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

type Equal<A, B> = A extends B ? (B extends A ? 1 : 0) : 0;

// 아래와 같은 부분을 해결하기 위해 참고 https://github.com/Microsoft/TypeScript/issues/27024#issuecomment-421529650
type Cc = Equal<1, 1 | 2>;

const Pass = 1;
const Fail = 0;
// declare 키워드로 실제 로직을 구현하지 않아도 함수 사용 가능
// Equal<A, B>의 결과값이 1(Pass)이길 원하는 함수
declare function check<A, B>(params: Equal<Equal<A, B>, typeof Pass>): void;

check<1, 2>(Fail);

check<Head<[1, 2, 3, 4]>, 1>(Pass);
check<Head<[1]>, 1>(Pass);
check<Head<[]>, undefined>(Pass);
check<Head<[]>, 2>(Fail);

// never = 공집합
type Length<T extends any[] | string, P extends any[] = []> = T extends any[]
    ? T['length']
    : T extends `${T[0]}${infer A}`
    ? Length<A, Append<P, any>>
    : Length<P>;
check<Length<[1, 2, 3]>, 3>(Pass);
check<Length<'abcd'>, 4>(Pass);
check<Length<'🙏abcd'>, 6>(Pass);

type HasTail<T extends any[]> = Length<T> extends 0 ? false : true;
check<HasTail<[1, 2, 3]>, true>(Pass);
check<HasTail<[3]>, true>(Pass);
check<HasTail<[]>, false>(Pass);

type Tail<T extends any[]> = T extends [any, ...infer A] ? A : [];
check<Tail<[1, 2, 3, 4, 5]>, [2, 3, 4, 5]>(Pass);
check<Tail<[4, 5]>, [5]>(Pass);
check<Tail<[4]>, []>(Pass);
check<Tail<[]>, []>(Pass);

// JS와 다르게 TS에서는 spread operator를 마지막에 쓰지 않아도 된다
type Last<T extends any[]> = T extends [...any[], infer A] ? A : undefined;
check<Last<[1, 2, 3, 4]>, 4>(Pass);
check<Last<[1]>, 1>(Pass);
check<Last<[]>, undefined>(Pass);
check<Last<[2]>, undefined>(Fail);

type Prepend<T extends any[], E> = [E, ...T];
check<Prepend<[], 1>, [1]>(Pass);
check<Prepend<[3, 4, 5], 2>, [2, 3, 4, 5]>(Pass);

// const a = { '0': 1 as const }['0']; 패턴을 이용해서 구현
type Drop<N extends number, T extends any[], P extends any[] = []> = {
    0: T;
    1: Drop<N, Tail<T>, Prepend<P, any>>;
}[Length<P> extends N ? 0 : 1];
check<Drop<3, [1, 2, 3, 4, 5, 6]>, [4, 5, 6]>(Pass);
check<Drop<0, [1, 2, 3, 4, 5, 6]>, [1, 2, 3, 4, 5, 6]>(Pass);
check<Drop<7, [1, 2, 3, 4, 5, 6]>, []>(Pass);
check<Drop<6, [1, 2, 3, 4, 5, 6]>, []>(Pass);

type Reverse<T extends any[], P extends any[] = []> = {
    0: P;
    1: Reverse<Tail<T>, Prepend<P, Head<T>>>;
}[Length<T> extends 0 ? 0 : 1];
check<Reverse<[1, 2, 3, 4, 5, 6]>, [6, 5, 4, 3, 2, 1]>(Pass);

type Concat<A extends any[], B extends any[]> = [...A, ...B];
check<Concat<[1, 2, 3], [4, 5, 6]>, [1, 2, 3, 4, 5, 6]>(Pass);

type Append<A extends any[], B> = Concat<A, [B]>;
check<Append<[1, 2, 3], 4>, [1, 2, 3, 4]>(Pass);

/**
 * String 유틸함수
 */
type Join<T extends any[], S extends string> = Length<T> extends 0
    ? ''
    : Length<T> extends 1
    ? `${T[0]}`
    : `${T[0]}${S}${Join<Tail<T>, S>}`;
check<Join<[1, 2, 3, 4, 5], ','>, '1,2,3,4,5'>(Pass);
check<Join<[1], ','>, '1'>(Pass);
check<Join<[], ','>, ''>(Pass);

type Replace<
    T extends string,
    A extends string,
    B extends string,
> = T extends `${infer P1}${A}${infer P2}`
    ? Replace<`${P1}${B}${P2}`, A, B>
    : T;
check<Replace<'abcdfdfda', 'f', 'c'>, 'abcdcdcda'>(Pass);

type Split<
    T extends string,
    S extends string,
    P extends any[] = [],
> = T extends `${infer A}${S}${infer B}`
    ? Split<B, S, Append<P, A>>
    : Append<P, T>;
check<Split<'asd,f,fd,dfasd', ','>, ['asd', 'f', 'fd', 'dfasd']>(Pass);

// Split 유틸의 경우에는 버그가 있네요. 두 번째 인자로 ''(빈 문자열)을 넣었을 경우 결과 배열에 ''이 하나 더 붙습니다.
// 따라서 예외를 하나 더 추가해 주어야 할 것 같네요.
// type Split<
//     Str extends string,
//     Spliter extends string,
//     Acc extends any[] = [],
// > = Str extends `${infer A}${Spliter}${infer B}`
//     ? Split<B, Spliter, Append<Acc, A>>
//     : Str extends ''
//     ? Acc
//     : Append<Str, Acc>;

// [].flat();
// const arr = [1, 2, 3, 4, 5][0]; // 1
// const arr = [1, 2, 3, 4, 5][1]; // 2

// const arr = [-1, 0, 1, 2, 3, 4][2]; // 1
// const arr = [-1, 0, 1, 2, 3, 4][1]; // 0

type Flat<T, N extends number = 1> = {
    0: T;
    1: T extends Array<infer A> ? Flat<A, [-1, 0, 1, 2, 3, 4, 5, 6, 7][N]> : T;
}[N extends -1 ? 0 : 1];

declare function flat<T, N extends number = 1>(arr: T, n?: N): Flat<T, N>[];
const arr = flat([1, 2, 3]);
const arr2 = flat([1, 2, 3, [4]]);
const arr3 = flat([1, 2, 3, [[4]]], 2);

check<Flat<[1, 2, 3, [4]], 1>, 1 | 2 | 3 | 4>(Pass);
check<Flat<[1, 2, 3, [[4]]], 1>, 1 | 2 | 3 | [4]>(Pass);
check<Flat<[1, 2, 3, [[4]]], 2>, 1 | 2 | 3 | 4>(Pass);
check<Flat<[1, 2, [3, [4]]], 1>, 1 | 2 | 3 | [4]>(Pass);
check<Flat<[1, 2, [3, [4]]], 2>, 1 | 2 | 3 | 4>(Pass);
