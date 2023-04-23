const log = console.log;

const curry =
    (f) =>
    (a, ..._) =>
        _.length ? f(a, ..._) : (..._) => f(a, ..._);

// 아래 함수들을 curry로 감싸주어 인자를 하나만 받을 경우 이후 인자들을 더 받기로 기다리는 함수를 리턴하는 형태로 바뀜
// const map = curry((f, iter) => {
//     let res = [];
//     iter = iter[Symbol.iterator]();
//     let cur;
//     while (!(cur = iter.next()).done) {
//         const a = cur.value;
//         res.push(f(a));
//     }
//     return res;
// });

// const filter = curry((f, iter) => {
//     let res = [];
//     iter = iter[Symbol.iterator]();
//     let cur;
//     while (!(cur = iter.next()).done) {
//         const a = cur.value;
//         if (f(a)) {
//             res.push(a);
//         }
//     }
//     return res;
// });

const isIterable = (a) => a && a[Symbol.iterator];

const go1 = (a, f) => (a instanceof Promise ? a.then(f) : f(a));

const reduce = curry((f, acc, iter) => {
    // iter가 없는 경우 acc가 iter
    if (!iter) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    } else {
        iter = iter[Symbol.iterator]();
    }

    return go1(acc, function recur(acc) {
        let cur;
        while (!(cur = iter.next()).done) {
            const a = cur.value;
            acc = f(acc, a);
            if (acc instanceof Promise) {
                return acc.then(recur);
            }
        }
        return acc;
    });
});

/**
 *  go
 * - 인자들을 받아서 하나의 값으로 축약한다? => reduce 사용!
 * - go는 함수들과 인자를 전달하여 즉시 값을 평가하는데 사용
 */
const go = (...args) => reduce((a, f) => f(a), args);

/**
 *  pipe
 * pipe는 내부적으로 go함수를 리턴하는 함수
 * - 함수들을 나열하여 합성된 함수를 만든다
 * - 첫번째 함수에서 인자를 2개이상 받을 수 있도록 처리
 */
const pipe =
    (f, ...fs) =>
    (...as) =>
        go(f(...as), ...fs);

const range = (l) => {
    let i = -1;
    let res = [];
    while (++i < l) {
        // log(i, 'range');
        res.push(i);
    }
    return res;
};

const take = curry((l, iter) => {
    let res = [];
    iter = iter[Symbol.iterator]();

    return (function recur() {
        let cur;
        while (!(cur = iter.next()).done) {
            const a = cur.value;
            if (a instanceof Promise) {
                return a
                    .then((a) =>
                        (res.push(a), res).length == l ? res : recur(),
                    )
                    .catch((e) => (e === nop ? recur() : Promise.reject(e)));
            }
            res.push(a);
            if (res.length == l) {
                return res;
            }
        }
        return res;
    })();
});

const find = curry((f, iter) => go(iter, L.filter(f), take(1), ([a]) => a));

const L = {};

L.range = function* (l) {
    let i = -1;
    while (++i < l) {
        // log(i, 'L.range');
        yield i;
    }
};

L.map = curry(function* (f, iter) {
    // iter = iter[Symbol.iterator]();
    // let cur;
    // while (!(cur = iter.next()).done) {
    //     const a = cur.value;
    //     yield f(a);
    // }
    for (const a of iter) {
        yield go1(a, f);
    }
});

const nop = Symbol('nop');

L.filter = curry(function* (f, iter) {
    // iter = iter[Symbol.iterator]();
    // let cur;
    // while (!(cur = iter.next()).done) {
    //     const a = cur.value;
    //     if (f(a)) {
    //         yield a;
    //     }
    // }
    for (const a of iter) {
        const b = go1(a, f);
        if (b instanceof Promise) {
            yield b.then((b) => (b ? a : Promise.reject(nop)));
        } else if (b) {
            yield a;
        }
    }
});

const takeAll = take(Infinity);

// L.map을 통해 구현한 map
const map = curry(pipe(L.map, takeAll));

// L.filter를 통해 구현한 filter
const filter = curry(pipe(L.filter, takeAll));
