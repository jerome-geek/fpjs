const test = (a: number) => a;

const res = test(2);

/**
 * extends => 부분집합(같거나 작다)
 *
 *  - T extends number: T가 number의 부분집합이다
 *  - T extends 2 ? 3 : 4 : T = 2 ? 3 : 4
 */
type Test<T extends number> = T extends 2 ? 3 : 4;

type CC = Test<1>;

type Head<T extends any[]> = T extends [infer A, ...any[]] ? A : undefined;

type CC1 = Head<[1, 2, 3, 4]>; // 1
type CC2 = Head<[1]>; // 1
type CC3 = Head<[]>; // undefined
