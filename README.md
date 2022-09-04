# fpjs

:octocat: Functional Programming in JavaScript

## 자바스크립트로 알아보는 함수형 프로그래밍 (ES5)

## 함수형 프로그래밍과 JavaScript ES6+

-   https://www.inflearn.com/course/functional-es6/dashboard 참고

0. [함수형 자바스크립트 기본기](함수형%20프로그래밍과%20JavaScript%20ES6+/00.html)
    1. [x] 평가와 일급
    2. [x] 일급 함수
    3. [x] 고차 함수
1. [ES6에서의 순회와 이터러블: 이터레이터 프로토콜](함수형%20프로그래밍과%20JavaScript%20ES6+/01.html)
    1. [x] 기존과 달라진 ES6에서의 리스트 순회
    2. [x] Array, Set, Map을 통해 알아보는 이터러블 / 이터레이터 프로토콜
    3. [x] 사용자 정의 이터러벌, 이터러블 / 이터레이터 프로토콜 정의
    4. [x] 전개 연산자
2. [제너레이터와 이터레이터](./%ED%95%A8%EC%88%98%ED%98%95%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%EA%B3%BC%20JavaScript%20ES6%2B/02.html)
    1. [x] 제너레이터와 이터레이터
    2. [x] odds
    3. [x] for...of, 전개 연산자, 구조 분해, 나머지 연산자
3. [map, filter, reduce](함수형%20프로그래밍과%20JavaScript%20ES6+/03.html)
    1. [x] map
    2. [x] 이터러블 프로토콜을 따른 map의 다형성 1
    3. [x] 이터러블 프로토콜을 따른 map의 다형성 2
    4. [x] filter
    5. [x] reduce
    6. [x] reduce2
    7. [x] map + filter + reduce 중첩 사용과 함수형 사고
4. 코드를 값으로 다루어 표현력 높이기
    1. [x] go
    2. [x] pipe
    3. [x] go를 사용하여 읽기 좋은 코드로 만들기
    4. [x] go + curry를 사용하여 더 읽기 좋은 코드로 만들기
    5. [x] 함수 조합으로 함수 만들기
5. 장바구니 예제
    1. [x] 총 수량, 총 가격
    2. [x] HTML로 출력하기
6. 지연성1
    1. [x] range와 느긋한 L.range
    2. [x] range와 느긋한 L.range 테스트
    3. [x] take
    4. [x] 제너레이터 / 이터레이터 프로토콜로 구현하는 지연 평가
    5. [x] L.map
    6. [x] L.filter
    7. [x] range, map, filter, take, reduce 중첩 사용
    8. [x] L.range, L.map, L.filter, take의 평가 순서
    9. [x] 엄격한 계산과 느긋한 계산의 효율성 비교
    10. [x] map, filter 계열 함수들이 가지는 결합 법칙
    11. [ ] ES6의 기본 규약을 통해 구현하는 지연 평가의 장점
7. 지연성2
    1. [ ] 결과를 만드는 함수 reduce, take
    2. [ ] queryStr 함수 만들기
    3. [ ] Array.prototype.join보다 다형성이 높은 join함수
    4. [ ] take, find
    5. [ ] L.map, L.filter로 map과 filter 만들기
    6. [ ] L.flatten, flatten
    7. [ ] yield\*, L.deepFlat
    8. [ ] 2차원 배열 다루기
    9. [ ] 이터러블 중심 프로그래밍 실무 코드
8. 비동기: 동시성 프로그래밍 1
    1. [ ] callback과 Promise
    2. [ ] 비동기를 값으로 만드는 Promise
    3. [ ] 값으로서의 Promise 활용
    4. [ ] 합성 관점에서의 Promise와 모나드
    5. [ ] Kleisli Composition 관점에서의 Promise
    6. [ ] go, pipe, reduce에서 비동기 제어
    7. [ ] promise.then의 중요한 규칙
9. 비동기: 동시성 프로그래밍 2
10. [ ] 지연평가 + Promise - L.map, map, take
11. [ ] Kleisli Composition - L.filter, filter, nop, take
12. [ ] reduce에서 nop 지원
13. [ ] 지연평가 + Promise의 효율성
14. [ ] 지연된 함수열을 병렬적으로 평가하기 - C.reduce, C.take [1]
15. [ ] 지연된 함수열을 병렬적으로 평가하기 - C.reduce, C.take [2]
16. [ ] 즉시 병렬적으로 평가하기 - C.map, C.filter
17. [ ] 즉시, 지연, Promise, 병렬적 조합하기
18. [ ] 코드 간단하게 정리
19. [ ] Node.js에서 SQL 병렬 평가로 얻은 효율
20. 비동기: 동시성 프로그래밍 3
21. [ ] async:await
22. [ ] 이제 비동기는 async:await로 제어할 수 있는데 왜 파이프라인이 필요한지?
23. [ ] [QnA] Array.prototype.map이 있는데 FxJS의 map 함수가 필요한지?
24. [ ] [QnA] async:await와 파이프라인을 같이 사용하기도 하는지?
25. [ ] [QnA] 동기 상황에서 에러 핸들링은 어떻게 해야하는지?
26. [ ] [QnA] 비동기 상황에서 에러 핸들링은 어떻게 해야하는지?
27. [ ] [QnA] 동기 / 비ㅏ동기 에러 핸들링에서의 파이프라인의 이점은?

## 함수형 프로그래밍과 JavaScript ES6+ 응용편
