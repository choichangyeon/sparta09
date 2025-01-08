// functions.test.js
import { calculateStatistics } from "../09.js";

describe("calculateStatistics 함수", () => {
  it("여러 사용자의 나이를 전달하면 평균 나이와 최대 나이를 정확히 계산해야 합니다.", () => {
    const users = [
      { age: 20 },
      { age: 30 },
      { age: 40 },
      { age: 25 },
      { age: 35 },
    ];
    const result = calculateStatistics(users);
    expect(result).toEqual({ averageAge: 30, maxAge: 40 });
  });

  it("빈 배열을 전달하면 averageAge와 maxAge가 0을 반환해야 합니다.", () => {
    const users = [];
    const result = calculateStatistics(users);
    expect(result).toEqual({ averageAge: 0, maxAge: 0 });
  });

  it("하나의 사용자만 있는 배열을 전달하면 그 사용자의 나이가 averageAge와 maxAge가 되어야 합니다.", () => {
    const users = [{ age: 25 }];
    const result = calculateStatistics(users);
    expect(result).toEqual({ averageAge: 25, maxAge: 25 });
  });

  it("모든 사용자의 나이가 동일할 경우, averageAge와 maxAge가 동일해야 합니다.", () => {
    const users = [{ age: 30 }, { age: 30 }, { age: 30 }];
    const result = calculateStatistics(users);
    expect(result).toEqual({ averageAge: 30, maxAge: 30 });
  });

  it("사용자 나이에 음수가 포함되어 있을 때도 올바르게 계산해야 합니다.", () => {
    const users = [{ age: -10 }, { age: 20 }, { age: 30 }];
    const result = calculateStatistics(users);
    expect(result).toEqual({ averageAge: 13.333333333333334, maxAge: 30 });
  });

  it("모든 사용자의 나이가 음수일 경우에도 올바르게 계산해야 합니다.", () => {
    const users = [{ age: -5 }, { age: -15 }, { age: -25 }];
    const result = calculateStatistics(users);
    expect(result).toEqual({ averageAge: -15, maxAge: -5 });
  });
});
