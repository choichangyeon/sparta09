import { obj, newObj, array, newArray } from "../02.js";

describe("spread 연산자 테스트", () => {
  describe("배열 복사 테스트", () => {
    it("newArray는 array와 같은 참조를 가지지 않아야 합니다.", () => {
      expect(newArray).not.toBe(array);
    });

    it("newArray는 [1, 2, 3, 4] 이어야 합니다.", () => {
      expect(newArray).toEqual([1, 2, 3, 4]);
    });

    it("array는 원래 배열 [1, 2, 3]을 유지해야 합니다.", () => {
      expect(array).toEqual([1, 2, 3]);
    });
  });

  describe("객체 복사 테스트", () => {
    it("newObj는 obj와 같은 참조를 가지지 않아야 합니다.", () => {
      expect(newObj).not.toBe(obj);
    });

    it("newObj는 obj의 age보다 1 더 많아야 합니다.", () => {
      expect(newObj.age).toBe(obj.age + 1);
    });

    it("newObj의 나이를 제외한 다른 속성은 obj와 동일해야 합니다.", () => {
      const { age, ...restObj } = obj;
      const { age: newAge, ...restNewObj } = newObj;
      expect(restNewObj).toEqual(restObj);
    });
  });
});
