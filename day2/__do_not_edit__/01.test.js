import { array } from "../01.js";

describe("01.array 테스트", () => {
  it("배열의 초기화 상태를 확인합니다.", () => {
    expect(array).toBeInstanceOf(Array);
    expect(array).toHaveLength(3);
  });

  it("배열 요소가 [1, 2, 3]인지 확인합니다.", () => {
    expect(array).toEqual([1, 2, 3]);
  });
});
