const log = console.log;

const map = (f, iter) => {
    let res = [];
    for (const p of iter) {
        res.push(f(p));
    }
    return res;
};

const filter = (f, iter) => {
    let res = [];
    for (const a of iter) {
        if (f(a)) {
            res.push(a);
        }
    }
    return res;
};

const reduce = (f, acc, iter) => {
    // iter가 없는 경우 acc가 iter
    if (!iter) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }

    for (const a of iter) {
        acc = f(acc, a);
    }
    return acc;
};
