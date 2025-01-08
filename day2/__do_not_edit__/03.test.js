import { squareElements } from "../03.js";

describe("squareElements 함수 테스트", () => {
  it("배열의 각 원소를 제곱한 새 배열을 반환해야 합니다.", () => {
    const input = [1, 2, 3, 4];
    const expectedOutput = [1, 4, 9, 16];
    expect(squareElements(input)).toEqual(expectedOutput);
  });

  it("빈 배열을 입력하면 빈 배열을 반환해야 합니다.", () => {
    expect(squareElements([])).toEqual([]);
  });

  it("음수 값이 포함된 배열도 올바르게 제곱해야 합니다.", () => {
    const input = [-1, -2, -3];
    const expectedOutput = [1, 4, 9];
    expect(squareElements(input)).toEqual(expectedOutput);
  });
});
