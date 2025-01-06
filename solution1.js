let uninitialized;
console.log(uninitialized); // 결과값: undefined

const apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable


let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 19


let mySchedule = "";
console.log(mySchedule || false); // false
console.log(!!mySchedule); // false