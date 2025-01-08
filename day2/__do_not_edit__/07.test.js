// functions.test.js
import { get20sEmail } from "../07.js";

describe("get20sEmail 함수", () => {
  it("20대인 사람들의 이메일을 나이 순으로 정렬하여 반환해야 합니다.", () => {
    const persons = [
      { name: "Alice", age: 25, email: "alice@example.com" },
      { name: "Bob", age: 22, email: "bob@example.com" },
      { name: "Charlie", age: 19, email: "charlie@example.com" },
      { name: "David", age: 27, email: "david@example.com" },
      { name: "Eve", age: 30, email: "eve@example.com" },
    ];
    const result = get20sEmail(persons);
    expect(result).toEqual([
      "bob@example.com",
      "alice@example.com",
      "david@example.com",
    ]);
  });

  it("20대인 사람이 없으면 빈 배열을 반환해야 합니다.", () => {
    const persons = [
      { name: "Frank", age: 18, email: "frank@example.com" },
      { name: "Grace", age: 31, email: "grace@example.com" },
      { name: "Heidi", age: 40, email: "heidi@example.com" },
    ];
    const result = get20sEmail(persons);
    expect(result).toEqual([]);
  });

  it("빈 배열을 전달하면 빈 배열을 반환해야 합니다.", () => {
    const persons = [];
    const result = get20sEmail(persons);
    expect(result).toEqual([]);
  });

  it("원본 배열을 변경하지 않고 새로운 배열을 반환해야 합니다.", () => {
    const persons = [
      { name: "Ivan", age: 23, email: "ivan@example.com" },
      { name: "Judy", age: 29, email: "judy@example.com" },
    ];
    const original = [...persons];
    const result = get20sEmail(persons);
    expect(result).toEqual(["ivan@example.com", "judy@example.com"]);
    expect(persons).toEqual(original);
  });

  it("20대인 사람의 나이가 동일할 경우 원래 배열의 순서를 유지해야 합니다.", () => {
    const persons = [
      { name: "Kate", age: 24, email: "kate@example.com" },
      { name: "Leo", age: 24, email: "leo@example.com" },
      { name: "Mia", age: 24, email: "mia@example.com" },
    ];
    const result = get20sEmail(persons);
    expect(result).toEqual([
      "kate@example.com",
      "leo@example.com",
      "mia@example.com",
    ]);
  });

  it("나이가 20대의 경계값을 정확하게 처리해야 합니다.", () => {
    const persons = [
      { name: "Nina", age: 20, email: "nina@example.com" },
      { name: "Oscar", age: 29, email: "oscar@example.com" },
      { name: "Paul", age: 19, email: "paul@example.com" },
      { name: "Quinn", age: 30, email: "quinn@example.com" },
    ];
    const result = get20sEmail(persons);
    expect(result).toEqual(["nina@example.com", "oscar@example.com"]);
  });
});
