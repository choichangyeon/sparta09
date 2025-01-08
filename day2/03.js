/**
 * Q: squareElements 함수
 *
 * - squareElements(arr)를 작성하세요.
 * - 파라미터로 받는 배열의 각 원소를 제곱한 새 배열을 반환합니다.
 * - map 메소드를 사용하여 작성하세요.
 *
 * @param {number[]} arr
 * @returns {number[]} 각 원소를 제곱한 결과의 새 배열
 */

// TODO: squareElements 함수를 작성하세요.
function squareElements(arr) {
    return arr.map(e => {
        return e*e;
    })
}

// export를 수정하지 마세요.
export { squareElements };
