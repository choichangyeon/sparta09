// functions.test.js
import { hasNegative, allPositive } from "../06.js";

describe("hasNegative 함수", () => {
  it("배열에 음수가 있으면 true를 반환해야 합니다.", () => {
    const arr = [1, -2, 3, 4];
    const result = hasNegative(arr);
    expect(result).toBe(true);
  });

  it("배열에 음수가 없으면 false를 반환해야 합니다.", () => {
    const arr = [1, 2, 3, 4];
    const result = hasNegative(arr);
    expect(result).toBe(false);
  });

  it("빈 배열을 전달하면 false를 반환해야 합니다.", () => {
    const arr = [];
    const result = hasNegative(arr);
    expect(result).toBe(false);
  });

  it("모든 요소가 음수인 배열에 대해서도 true를 반환해야 합니다.", () => {
    const arr = [-1, -2, -3];
    const result = hasNegative(arr);
    expect(result).toBe(true);
  });
});

describe("allPositive 함수", () => {
  it("배열의 모든 요소가 양수이면 true를 반환해야 합니다.", () => {
    const arr = [1, 2, 3, 4];
    const result = allPositive(arr);
    expect(result).toBe(true);
  });

  it("배열에 하나라도 음수가 있으면 false를 반환해야 합니다.", () => {
    const arr = [1, -2, 3, 4];
    const result = allPositive(arr);
    expect(result).toBe(false);
  });

  it("빈 배열을 전달하면 true를 반환해야 합니다.", () => {
    const arr = [];
    const result = allPositive(arr);
    expect(result).toBe(true);
  });

  it("배열에 0이 포함되어 있으면 false를 반환해야 합니다.", () => {
    const arr = [1, 2, 0, 4];
    const result = allPositive(arr);
    expect(result).toBe(false);
  });
});
