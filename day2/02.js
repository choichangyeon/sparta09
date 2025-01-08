/**
 * Q: spread 연산자로 배열 복사하기
 *
 * - spread 연산자를 사용하여 array 배열을 복사하여 반환하세요.
 * - newArray와 array는 같은 배열을 참조하면 안됩니다.
 * - newArray 배열의 요소는 1, 2, 3, 4 가 되어야 합니다.
 * - array 배열은 변경되면 안됩니다.
 *
 * @returns {number[]} 요소가 1, 2, 3, 4 인 배열
 *
 * Q: spread 연산자로 객체 복사하기
 *
 * - spread 연산자를 사용하여 obj 객체를 복사하여 반환하세요.
 * - obj와 newObj는 같은 객체를 참조하면 안됩니다.
 * - newObj 는 obj 보다 1살 많아야 합니다.
 *
 */

const array = [1, 2, 3];

// TODO: spread 연산자를 사용하여 array 배열을 복사하고 원하는 요소를 추가하세요.
const newArray = [...array];
newArray.push(4);

const obj = {
  name: "철수",
  age: 25,
};

// TODO : spread 연산자를 사용하여 obj 객체를 복사하고 newObj 객체를 만들어 원하는 부분만 수정하세요.
const newObj = {...obj};
newObj.age = obj.age + 1;



//export를 수정하지 마세요.
export { obj, newObj, array, newArray };
