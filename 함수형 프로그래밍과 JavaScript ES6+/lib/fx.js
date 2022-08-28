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
