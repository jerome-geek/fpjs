const log = console.log;

const curry =
    (f) =>
    (a, ..._) =>
        _.length ? f(a, ..._) : (..._) => f(a, ..._);

// 아래 함수들을 curry로 감싸주어 인자를 하나만 받을 경우 이후 인자들을 더 받기로 기다리는 함수를 리턴하는 형태로 바뀜
const map = curry((f, iter) => {
    let res = [];
    for (const p of iter) {
        res.push(f(p));
    }
    return res;
});

const filter = curry((f, iter) => {
    let res = [];
    for (const a of iter) {
        if (f(a)) {
            res.push(a);
        }
    }
    return res;
});

const reduce = curry((f, acc, iter) => {
    // iter가 없는 경우 acc가 iter
    if (!iter) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }

    for (const a of iter) {
        acc = f(acc, a);
    }
    return acc;
});
