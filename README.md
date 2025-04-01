# practice_JavaScript
how to use JavaScript
***

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