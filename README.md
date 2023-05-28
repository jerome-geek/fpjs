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
    11. [x] ES6의 기본 규약을 통해 구현하는 지연 평가의 장점
7. 지연성2
    1. [x] 결과를 만드는 함수 reduce, take
    2. [x] queryStr 함수 만들기
    3. [x] Array.prototype.join보다 다형성이 높은 join함수
    4. [x] take, find
    5. [x] L.map, L.filter로 map과 filter 만들기
    6. [x] L.flatten, flatten
    7. [x] yield\*, L.deepFlat
    8. [x] L.flatMap, flatMap
    9. [x] 2차원 배열 다루기
    10. [x] 이터러블 중심 프로그래밍 실무 코드
8. 비동기: 동시성 프로그래밍 1
    1. [x] callback과 Promise
    2. [x] 비동기를 값으로 만드는 Promise
    3. [x] 값으로서의 Promise 활용
    4. [x] 합성 관점에서의 Promise와 모나드
    5. [x] Kleisli Composition 관점에서의 Promise
    6. [x] go, pipe, reduce에서 비동기 제어
    7. [x] promise.then의 중요한 규칙
9. 비동기: 동시성 프로그래밍 2
    1. [x] 지연평가 + Promise - L.map, map, take
    2. [x] Kleisli Composition - L.filter, filter, nop, take
    3. [x] reduce에서 nop 지원
    4. [x] 지연평가 + Promise의 효율성
    5. [x] 지연된 함수열을 병렬적으로 평가하기 - C.reduce, C.take [1]
    6. [x] 지연된 함수열을 병렬적으로 평가하기 - C.reduce, C.take [2]
    7. [x] 즉시 병렬적으로 평가하기 - C.map, C.filter
    8. [x] 즉시, 지연, Promise, 병렬적 조합하기
    9. [x] 코드 간단하게 정리
    10. [x] Node.js에서 SQL 병렬 평가로 얻은 효율
10. 비동기: 동시성 프로그래밍 3
    1. [x] async:await
    2. [x] [QnA] Array.prototype.map이 있는데 FxJS의 map 함수가 필요한지?
    3. [x] [QnA] 이제 비동기는 async:await로 제어할 수 있는데 왜 파이프라인이 필요한지?
    4. [x] [QnA] async:await와 파이프라인을 같이 사용하기도 하는지?
    5. [x] [QnA] 동기 상황에서 에러 핸들링은 어떻게 해야하는지?
    6. [x] [QnA] 비동기 상황에서 에러 핸들링은 어떻게 해야하는지?
    7. [x] [QnA] 동기 / 비동기 에러 핸들링에서의 파이프라인의 이점은?

## 함수형 프로그래밍과 JavaScript ES6+ 응용편

0. 이터러블 프로그래밍 혹은 리스트 프로세싱(Lisp)
    1. [x] 들어가며
    2. [x] 홀수 n개 더하기
    3. [x] if를 filter로
    4. [x] 값 변화 후 변수 할당을 map으로
    5. [x] break를 take로
    6. [x] 축약 및 합산을 reduce로
    7. [x] while을 range로
    8. [x] 효과를 each로 구분
    9. [x] 추억의 별 그리기
    10. [x] 추억의 구구단
1. 명령형 습관 지우기 - 만능 reduce? No!
    1. [x] reduce + 복잡한 함수 + acc보다 map + 간단한 함수 + reduce
    2. [x] reduce 하나 보다 map + filter + reduce
    3. [x] query1, query2
    4. [x] query3, query4
    5. [x] queryToObject
2. 안전한 합성에 대해
    1. [x] map으로 합성하기
    2. [x] find대신 L.filter써보기
3. 객체를 이터러블 프로그래밍으로 다루기
    1. [x] 들어가며
    2. [x] values
    3. [x] entries
    4. [x] keys
    5. [x] 어떠한 값이든 이터러블 프로그래밍으로 다루기
    6. [x] object
    7. [ ] mapObject
    8. [ ] pick
    9. [ ] indexBy
    10. [ ] indexBy 된 값을 filter 하기
4. 객체지향과 함께 사용하기 - 사용자 정의 객체를 이터러블 프로그래밍으로
    1. [ ] Map, Set, NodeList
    2. [ ] Model, Collection 클래스 만들어서 이터러블 프로토콜 지원하기
    3. [ ] Product, Products - 메서드를 함수형으로 구현하기
5. 시간을 이터러블로 다루기
    1. [ ] range와 take의 재해석
    2. [ ] takeWhile, takeUntil
    3. [ ] 자동차 경주 - 할 일들을 이터러블(리스트)로 바라보기
    4. [ ] 아임포트 결제 누락 처리 스케쥴러 - API 설명
    5. [ ] 아임포트 결제 누락 처리 스케쥴러 - 결제된 내역 가져오기
    6. [ ] 아임포트 결제 누락 처리 스케쥴러 - 가맹점 DB의 주문서 가져오기
    7. [ ] 아임포트 결제 누락 처리 스케쥴러 - 비교 후 결제 취소 API 실행하기
    8. [ ] 아임포트 결제 누락 처리 스케쥴러 - 반복 실행하기
6. 프론트엔드에서 함수형/이터러블/동시성프로그래밍
    1. [ ] ES6 템플릿 리터럴 활용
    2. [ ] 이미지 목록 그리기
    3. [ ] 아이템 지우기
    4. [ ] 커스텀 confirm 창과 Promise
    5. [ ] 클래스를 대신 함수로 하는 추상화
    6. [ ] 이미지 동시성 다루기
    7. [ ] 동시성 부하 조절
    8. [ ] 고차 함수로 더 작게 나누어 재사용성 높이기 - 데이터형 없애기
    9. [ ] 상위 스코프 변수를 사용하는 함수와 아닌 함수들 쪼개기
    10. [ ] DOM을 다루는 고차함수
