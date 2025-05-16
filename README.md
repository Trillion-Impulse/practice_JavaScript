# practice_JavaScript
how to use JavaScript
***

## 변수 선언 키워드

### var
- variable
- 변수를 선언, 추가로 동시에 값을 초기화
- 함수 스코프 내에서만 유효
- 함수 외부에서는 전역 변수로 취급 가능
- 호이스팅: 선언부가 코드의 상단으로 끌어올려짐
    - 선언 전에 해당 변수를 참조해도 `undefined`를 반환
- 재선언 가능

### let
- let 허용,허락하다
- 블록 스코프 지역 변수를 선언, 추가로 동시에 값을 초기화
- 블록 내에서만 유효
- `{}`로 묶인 코드 블록 내에서만 변수의 유효 범위가 제한
- 호이스팅: `var`와 달리 초기화되기 전에 접근하면 `ReferenceError`발생
- 재선언 불가능
- 같은 범위에서 재선언시 `SyntaxError`발생
- 변경 가능한 변수에 사용

### const
- constant
- 블록 스코프 읽기 전용 상수를 선언
- 문자, 밑줄이나 달러 기호로 시작해야 함
- 대입을 통해 값을 바꾸거나 재선언될 수 없음
- 값으로 초기화 해야함
- 같은 스코프에 있는 함수나 변수와 동일한 이름으로 선언 불가능
- 호이스팅: 초기화 전에 사용하려 하면 `ReferenceError`발생
- const로 선언된 객체나 배열의 참조(`Reference`)는 변경할 수 없지만, 내부의 값은 수정 가능
- 변경 불가능한 상수에 사용

---

## arrow function
- 함수 표현식을 간단하게 작성할 수 있도록 해주는 구문
- 전통적인 함수 선언 방식에 비해 간결
- this 키워드의 동작 방식에 차이가 존재
- 주로 콜백 함수나 간단한 함수에서 사용

### 기본 문법
```
const 함수이름 = (매개변수) => {
    // 함수 본문
}

const add = (a, b) => {
    return a + b;
};

console.log(add(2, 3));
```

### 반환값이 하나일 경우
- 반환값이 하나일 경우 `return` 생략 가능
```
const multiply = (a, b) => a * b;
console.log(multiply(2, 3));
```

### 중괄호의 생략
- 함수의 본문이 단일 표현식일 경우 `return`과 함께 생략
- 여러줄을 작성하거나 `return`이 필요한 경우 중괄호 사용

### 매개 변수가 하나일 경우
- 매개 변수가 하나일 경우 괄호 `()`생략 가능
```
const square = x => x * x;
console.log(square(5)); // 25
```

### 매개 변수가 없을 경우
- 매개 변수가 없을 경우 빈 괄호 `()`를 사용
```
const greet = () => console.log('Hello, world!');
greet();
```

### this 바인딩
- _바인딩: 키워드가 어떤 값을 참조하는지 결정하는 과정_
    - _특정 시점에 어떤 객체를 가리키는지 정하는 것_
- 전통적인 함수 선언 방식에서 this는 함수가 호출될 때 결정
- 화살표 함수에서는 this가 함수 정의 시의 환경에 의해 결정
- 화살표 함수는 this를 "lexical scoping" 방식으로 처리하므로, 그 함수가 정의될 때의 this 값을 그대로 사용
```
function ArrowFunction() {
    this.value = 1;
    setTimeout(() => {
        this.value++;  // 'this'는 ArrowFunction의 'this'를 그대로 참조
        console.log(this.value);  // 2
    }, 1000);
}
```

---

## callback 함수
- 다른 함수의 입력값으로 전달되어 실행되는 함수
    ```
        val = function(){
            return 리턴값
        }
        function fn(arg){
            arg();
        }
        fn(val)    // fn함수의 입력값으로 val이 전달되어 실행
                   // 여기서 val이 callback function
    ```
- 다른 함수가 작업을 완료한 후 실행되는 함수
- 주로 비동기 작업에서 사용
- 작업이 끝난 후 어떤 행동을 지정할 때 유용
- callback hell: 콜백 함수의 중첩으로 코드가 복잡하고 읽기 어려워지는 현상
    - 이를 해결하기 위해 promise나 async/await를 사용

### callback 함수 활용
- 배열 연산
    - filter(), forEach(), map() 등
    - ex) filter(callback) 함수
        - callback function의 결과가 true인 요소들만 모아서 새로운 배열을 반환
        ```
            const numbers = [1, 2, 3, 4, 5];
            const evens = numbers.filter(n => n % 2 === 0);  // [2, 4]
            // filter함수 내에 arrow function이 callback 함수
        ```
- 비동기 처리
    - Promise, async/await, fetch, setTimeout 등
- 이벤트 처리
    - addEventListener
- 데이터 처리
    - JSON, Object methods 등

---

## Promise
- 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타내는 객체
- 기본 구조
    ```
        const promise = new Promise((resolve, reject) => {
            // 비동기 작업 수행
        });

        promise
            .then
            .catch
            .finally
    ```

### Promise의 상태
- 대기(pending): 초기 상태
- 이행(fulfilled): 연산이 성공적으로 완료
- 거부(rejected): 연산이 실패

### Promise의 메서드
- `.then(onFulfilled, onRejected)`
    - 프로미스가 이행했을 때, 거부했을 때 호출될 콜백 함수를 예약
    - promise를 리턴
    - return을 사용하지 않으면 undefined를 리턴
    - `onFulfilled`: 이행했을 때 호출하는 함수
    - `onRejected`: 거부했을 때 호출하는 함수
    - 가독성을 위해 이행은 `.then()`, 거부는 `.catch()` 사용

- `.catch()`
    - 프로미스가 거부했을 때 호출될 콜백 함수를 예약
    - 체이닝된 모든 `.then()`에서 발생한 error를 모두 받을 수 있음
    - promise를 리턴
    - return을 사용하지 않으면 undefined를 리턴
    - then(undefined, onRejected)의 단축 표현

- `.then()`의 onRejected와 `.catch()`의 차이
    - `.then()`의 onRejected는 해당하는 `.then()`내부의 거부만 받음
    - `.catch()`는 체이닝된 모든 `.then()`의 거부를 모두 받을 수 있음
        ```
        .then()
        .then()
        .then()
        .catch()
        // 이런 구조의 경우 위의 .then에서 발생하는 모든 에러를 마지막 .catch()가 다 받음
        ```

- `.finally(onFinally)`
    - 프로미스를 처리(이행 or 거부)한 후 호출할 함수를 예약
    - `onFinally`: 프로미스가 처리된 후 비동기적으로 실행될 함수
    - 원래의 Promise 결과를 그대로 반환
    - 결과에 관계없이 프로미스가 처리되고 나서 무언가를 처리하거나 정리할 때 유용
    - 공통된 코드의 중복 제거와 가독성을 위해 사용


### Promise의 처리 흐름
```
    const promise = new Promise((resolve, reject) => {
        // 1. Promise의 초기 상태: pending
        setTimeout(() => {
            resolve("✅ 성공 결과");
            // 또는 reject("❌ 에러 메시지");
        }, 1000);
    });

    promise
        .then(result => {
            // 2. resolve가 호출되면 Promise의 상태가 fulfilled로 전환
            // 3. result는 resolve에서 반환한 value
            console.log(result); // ✅ 성공 결과
        })
        .catch(error => {
            // 2. reject가 호출되면 Promise의 상태가 rejected로 전환
            // 3. error는 reject에서 반환한 value
            console.error(error); // ❌ 에러 메시지
        })
        .finally(() => {
            // 4. 성공이든 실패든 항상 실행
            console.log("🔚 작업 완료");
        });
        // 5. .then과 .catch는 실행 후 값으로 promise를 반환
        // 이때 반환되는 promise의 상태는 초기 상태의 pending
```
### Promise의 체이닝
- `.then()`과 `.catch()`메서드가 promise를 반환하므로 추가적인 메서드의 사용을 통해 체이닝 가능
    ```
        const promise = new Promise((resolve, reject) => {
            resolve() // 혹은 reject()
            return 리턴값
        }
        promise
            .then
            .then
            .catch
            .finally
    ```
- `.then()`의 onRejected 인자와 `.catch()`를 모두 사용할 때
    ```
    const promise = new Promise((resolve, reject) => {
        resolve("성공");
    })

    function step2(result) {
        throw new Error("step2에서 에러 발생");
    }

    promise
        .then(onFulfilled, onRejected)
        .catch()
    // 이런 구조에서는 onRejected가 에러를 처리하기 때문에 `.catch()`는 실행되지 않음
    ```
- 여러개의 `.then()`을 체이닝 하는 경우
    - 각 `.then()`의 onRejected가 해당하는 `.then()`의 에러를 처리
    - onRejected를 사용하지 않는 모든 `.then()`의 에러를 `.catch()`가 모두 처리

---
## async & await

### async function
- Promise를 직관적이고 동기적인 코드처럼 작성할 수 있게 해주는 문법
- Promise를 반환
- 기본 구조
    ```
        async function name([param[, param[, ... param]]]) {
            statements
        }
    ```
    - name: 함수 이름
    - param: 인자 이름
    - statements: 함수 본문 내용, await 메커니즘 사용 가능

### await
- Promise를 기다리기 위해 사용
- async fuction 내부에서만 사용 가능
- await 동작 순서
    1. Promise가 fulfill되거나 reject 될 때까지 async 함수의 실행을 일시 정지
    2. 전달 된 Promise의 해결을 기다림
    3. Promise가 fulfill되면 async 함수를 일시 정지한 부분부터 실행
    4. 완료 후 Promise 에서 fulfill된 값을 반환
    4. 만약 Promise가 reject되면, await 문은 reject된 값을 throw
- 기본 구조
    ```
    function fetchUser() {
        return new Promise((resolve) => {
            setTimeout(() => {
            resolve("홍길동");
            }, 1000);
        });
    }

    async function showUser() {
        const user = await fetchUser();  // fetchUser()가 끝날 때까지 기다림
        console.log("사용자:", user);
    }

    showUser();
    ```
---

## .json
- JavaScript Object Notation
- 데이터를 저장하고 전달하기 위한 포맷
- 텍스트 기반: 사람이 읽을 수 있는 텍스트 형식
- 데이터 교환 형식: 웹 애플리케이션에서 클라이언트와 서버 간에 데이터를 전송할 때 사용
    - HTTP 요청과 응답에 널리 사용
- 경량: 간결하고 효율적인 형식을 사용하므로 적은 데이터를 사용
- 언어 독립적: JavaScript에서 유래했지만, 대부분의 프로그래밍 언어에서 JSON을 다룰 수 있는 라이브러리나 API를 제공
    - ex: Python, Java, Ruby, PHP 등

### 기본 구성 요소
- 객체(Object)와 배열(Array)
- 객체
    - JSON 객체는 중괄호 `{}`로 감싸진 키-값 쌍의 집합
    - 키: 문자열
    - 값: 문자열, 숫자, 배열, 객체 등 다양한 데이터 타입
- 배열
    - JSON 배열은 대괄호 `[]`로 감싸진 값들의 순서가 있는 집합
    - 배열 내의 값: 다른 배열, 객체, 숫자 등 다양한 데이터 타입
- 객체나 배열이 중첩된 구조

### javascript에서 .json 사용법
- JSON.stringify(): JavaScript 객체를 JSON 문자열로 변환
    ```
    const person = { name: "Alice", age: 30 };
    const jsonString = JSON.stringify(person);
    console.log(jsonString);
    ```

- JSON.parse(): JSON 문자열을 JavaScript 객체로 변환
    ```
    const parsedObject = JSON.parse(jsonString);
    console.log(parsedObject);
    ```

---

## 파싱
- 데이터나 문자열을 구조적으로 분석해서 의미 있는 정보로 바꾸는 과정
- 문자열을 특정 형식에 맞게 해석해서 데이터를 뽑아내는 행위
- _parse: (문장을 문법적으로)분석하다, 데이터를 분석해서 의미를 추출하다_

### 단순 파싱 함수
- parseInt(string, radix)
    - string: 숫자로 변환하고 싶은 문자열
    - radix: 진법
        - ex) 10진법, 16진법 등
    - 문자열이 숫자로 시작하지 않으면 NaN을 반환
        - NaN: Not a Number
    - 문자열이 숫자로 시작한다면 숫자만 남김
```
parseInt("123px"); // 123
```

### JSON 파싱
- JSON.parse(): JSON 문자열을 JavaScript 객체로 해석

### HTML 파싱
- 브라우저는 HTML 태그를 내부적으로 HTML 파서를 사용해 트리 구조(DOM)로 변경

---

## Template Literal
- 기존 문자열과 달리, 백틱`을 사용해서 문자열을 감싸는 방식
- `${}` 문법으로 변수나 표현식을 삽입 가능
    _- `${}`: 보통 placeholder 혹은 interpolated expression 이라고 부름_
```
const name = "Alex";
const age = 28;

const greeting = `Hello, my name is ${name} and I'm ${age} years old.`;
console.log(greeting);

// 출력: Hello, my name is Alex and I'm 28 years old.
```

### Tagged Template Literal
- Template Literal에 함수를 연결해서 처리하는 방법

```
function myTag(strings, ...values) {
  console.log(strings);
  console.log(values);
}

const name = "Jisoo";
myTag`Hello, ${name}!`; //myTag는 그냥 만들어낸 함수

// 출력: strings: ["Hello, ", "!"]
        values: ["Jisoo"]
```

---

## NaN
- Not a Number
- 숫자가 아님을 나타내는 숫자 값
- 타입: Number
- 자기 자신과 동등 비교가 flase
```
console.log(NaN === NaN); // false
```

### isNaN
- NaN인지 여부를 판단하는 함수
- isNaN은 내부적으로 값을 숫자로 변환한 후, 그 결과가 NaN인지 판단
```
isNaN("123") // false (문자열이지만 숫자로 변환되므로)
isNaN(123) // false
isNaN("undefined") // true
isNaN("abc") // true
Number.isNaN(NaN) // true
```

### Number.isNaN
- ES6부터 더 엄격한 판단이 가능한 `Number.isNaN` 도입
- 내부적으로 값을 숫자로 변환하지 않음
- 값이 실제로 NaN일 때만 true를 반환
```
Number.isNaN("123") // false
isNaN(123) // false
isNaN("undefined") // false
Number.isNaN("abc") // false
Number.isNaN(NaN) // true
```

---

## 연산자 == vs ===

### ==
- 느슨한 동등 연산자
- 비교 전에 타입을 자동 변환
- 타입이 달라도 비교 가능
- 의도와 다르게 작동할 가능성 존재
```
'5' == 5   // true -> 문자열 '5'가 숫자 5로 변환돼서 비교됨
false == 0 // true -> false는 0으로 변환됨
null == undefined // true -> 이건 예외적으로 true
```

### ===
- 엄격한 동등 연산자
- 타입 변환 없이 값과 타입을 모두 비교
- 예측 가능하고 안전한 비교를 위해 사용
```
'5' === 5   // false -> 타입이 다름 (문자열 vs 숫자)
false === 0 // false -> 타입이 다름 (불리언 vs 숫자)
null === undefined // false -> 타입이 다름
5 === 5     // true -> 값과 타입 모두 같음
```

---