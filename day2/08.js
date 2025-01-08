/**
 * Q: 배열을 특정 크기로 나누기 (Chunk)
 *
 * - `chunkArray` 함수를 작성하세요.
 *   1. 배열(arr)과 덩어리 크기(size)를 입력받아, 해당 크기로 배열을 나눈 2차원 배열을 반환.
 *   2. 마지막 덩어리는 나머지 원소만 포함
 *
 * 예)
 *   chunkArray([1,2,3,4,5], 2) => [[1,2],[3,4],[5]]
 *
 * @param {any[]} arr
 * @param {number} size
 * @returns {any[][]}
 */

// TODO: chunkArray 함수를 작성하세요.
function chunkArray(arr, size) {
  var ans = [];
  arr = arr.reverse();
  var count = 0;
  let temp = [];
  while(arr.length > 0){
    temp.push(arr.pop());
    if(++count === size){
      ans.push(temp);
      count = 0;
      temp = [];
    }
  }
  temp.length !== 0 ? ans.push(temp) : null;
  return ans;
}

// export를 수정하지 마세요.
export { chunkArray };
