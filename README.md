# practice_JavaScript
how to use JavaScript
***

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
- 다른 함수의 인수로 전달되어 실행되는 함수
- 다른 함수가 작업을 완료한 후 실행되는 함수
- 주로 비동기 작업에서 사용
- 작업이 끝난 후 어떤 행동을 지정할 때 유용
- callback hell: 콜백 함수의 중첩으로 코드가 복잡하고 읽기 어려워지는 현상
    - 이를 해결하기 위해 promise나 async/await를 사용

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