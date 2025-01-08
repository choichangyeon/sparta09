// functions.test.js
import { chunkArray } from "../08.js";

describe("chunkArray 함수", () => {
  it("주어진 크기로 배열을 잘라 2차원 배열을 반환해야 합니다.", () => {
    const arr = [1, 2, 3, 4, 5];
    const size = 2;
    const result = chunkArray(arr, size);
    expect(result).toEqual([[1, 2], [3, 4], [5]]);
  });

  it("배열의 길이가 덩어리 크기의 배수일 경우 모든 덩어리가 동일한 크기를 가져야 합니다.", () => {
    const arr = [1, 2, 3, 4];
    const size = 2;
    const result = chunkArray(arr, size);
    expect(result).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  it("덩어리 크기가 1일 때, 각 원소가 개별 배열로 나뉘어야 합니다.", () => {
    const arr = [1, 2, 3];
    const size = 1;
    const result = chunkArray(arr, size);
    expect(result).toEqual([[1], [2], [3]]);
  });

  it("빈 배열을 전달하면 빈 배열을 반환해야 합니다.", () => {
    const arr = [];
    const size = 3;
    const result = chunkArray(arr, size);
    expect(result).toEqual([]);
  });

  it("덩어리 크기가 배열의 길이보다 클 경우, 전체 배열을 하나의 덩어리로 반환해야 합니다.", () => {
    const arr = [1, 2, 3];
    const size = 5;
    const result = chunkArray(arr, size);
    expect(result).toEqual([[1, 2, 3]]);
  });
});
