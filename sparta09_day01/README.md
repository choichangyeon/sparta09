# Sparta_jsrunning_train

달리기반 실습 과제입니다.  
1일차에 배운 내용들을 토대로 풀 수 있도록 구성되어 있습니다.

Repository를 fork 하여 본인의 repository로 옮긴 후,
각각의 문항에 맞는 js파일을 만들어서 git에 push해주세요.
(ex: quiz01.js, quiz02.js, quiz03.js ...)

&nbsp;

## 1. 빈칸 채우기 문제

아래 내용에서 빈 칸에 들어갈 항목들을 채워주시고 왜 그렇게 생각했는지
본인의 생각을 간단하게 1줄 정도 같이 적어주세요.

```javascript
1. let uninitialized;
console.log(uninitialized); // 결과값 < 빈칸 >


2. < 빈칸 > apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable


3. let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 빈칸 >


4.
let mySchedule = "";
console.log(mySchedule || false); // < 빈칸 >
console.log(!!mySchedule); // < 빈칸 >

```

&nbsp;

## 2. 객체 선언해보기

지난 시간에 배웠던 객체(object)를 다시 복습해보며, 아래의 조건을 충족하는 객체를 직접 선언해보세요.

- 자기 자신을 소개하는 객체입니다.
- 이름, 나이, MBTI 세 가지 키와 값이 포함되어 있어야 합니다.
- 콘솔 창에 이름, 나이, MBTI가 나오도록 console.log() 를 찍어보세요.

예시

```javascript
const junhyun = {
    // 조건을 충족하는 코드 작성
};

console.log(이름이 나오게 콘솔을 실행시켜 주세요.);
console.log(나이가 나오게 콘솔을 실행시켜 주세요.);
console.log(MBTI가 나오게 콘솔을 실행시켜 주세요.);
```

&nbsp;

## 3. 홀짝 판별기

지난 시간에 배웠던 연산자를 활용하여, 숫자를 입력하면 홀수인지 짝수인지 판별하는 함수를 만들어 보려고 합니다. 다음과 같은 결과값이 나올 수 있도록 코드를 작성해 주세요.

예시

```javascript
function 함수명(매개변수) {
  // 코드를 작성해 주세요.
}

console.log(함수명(10)); // 결과값 "짝수";
console.log(함수명(7)); // 결과값 "홀수";
```

&nbsp;

## 4. 계산기 문제

연산자와 함수, 조건문을 토대로 계산기 함수를 하나 만들어 보려고 합니다.
함수에 숫자 , 연산자 , 숫자 세 개의 매개변수를 넣었을 때 해당 연산자를 기준으로 연산을 해서 값을 반환하는 함수를 만들어주세요.

예시

```javascript
function 함수명(매개변수1, 매개변수2, 매개변수3) {
  // 코드를 작성해주세요.
}

함수명(3, "+", 6); // 결과값 9
함수명(11, "-", 6); // 결과값 5
함수명(6, "*", 3); // 결과값 18
함수명(15, "/", 3); // 결과값 5
```

&nbsp;

## 5. 점수 수정하기

&nbsp;

학교에서 시험을 보았는데 전산 문제로 한 문제의 답이 전부 오답처리가 된 바람에 학생들의 점수를 전부 3점씩 올려주어야 합니다.

scores에 있는 학생들의 점수를 반복문을 통해 3점씩 올리게 고쳐주시는데 4번 문제를 통해 만든 계산기 함수를 통해 더해주세요.

```javascript
const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function 함수명(scores) {
  // 4번 문제의 계산기 함수를 활용한 코드를 작성해주세요.
}

함수명(scores);

console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]
```

&nbsp;

## 6. 장바구니 뒤바뀜 문제

&nbsp;

아래 코드는 두 명의 유저(유저 A, 유저 B)가 각각 장바구니를 가지고 있다고 가정한 예시입니다.

B 유저에게 할인 쿠폰을 적용하려고 applyCoupon 함수를 만들었습니다.

```javascript
function applyCoupon(cart, coupon) {
  cart.items.forEach((item) => {
    item.price -= coupon.discount;
  });
}

const userACart = {
  items: [
    { name: "키보드", price: 30000 },
    { name: "마우스", price: 20000 },
  ],
};

const userBCart = userACart;
const coupon = { discount: 5000 };

applyCoupon(userBCart, coupon);
```

1.	실행 결과로 userACart.items와 userBCart.items는 각각 어떻게 달라져 있을까요?

2.	1번의 결과에 대한 이유를 설명해보세요.

3.	원래 의도대로라면 유저 A와 유저 B 장바구니가 독립적으로 동작해야 하는데, 그렇게 하려면 코드를 어떻게 수정해야 할까요?
