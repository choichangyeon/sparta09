let uninitialized;
console.log(uninitialized); // 결과값: undefined

const apple = "사과"; // 상수 값은 재할당이 불가능하기 때문에 해당 오류가 발생한것이다.
apple = "바나나"; // TypeError: Assignment to constant variable


let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 19


let mySchedule = ""; // 해당 값("")은 falsy한 값이므로 or 혹은 !! 연산자를 통해 false 값이 출력됨을 확인할 수 있다.
console.log(mySchedule || false); // false
console.log(!!mySchedule); // false