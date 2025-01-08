/**
import { every } from './node_modules/@sinonjs/commons/types/index.d';
 * Q: hasNegative 함수
 *
 * - hasNegative 를 작성하세요.
 * - 파라미터로 받는 배열에 음수가 있는지 확인합니다. (some 사용)
 *
 * @param {number[]} arr
 * @returns {boolean}
 *
 * Q: allPositive 함수
 *
 * - allPositive를 작성하세요.
 * - 파라미터로 받는 배열이 모두 양수인지 확인합니다. (every 사용)
 *
 * @param {number[]} arr
 * @returns {boolean}
 */

// TODO: hasNegative 함수를 작성하세요.
function hasNegative(arr) {
    return arr.some(e => e < 0);
}


// TODO: allPositive 함수를 작성하세요.
function allPositive(arr) {
    return arr.every(e => e > 0);
}


// export를 수정하지 마세요.
export { hasNegative, allPositive };
