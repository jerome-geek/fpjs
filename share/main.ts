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
