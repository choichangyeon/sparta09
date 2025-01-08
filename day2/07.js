/**
import { name } from './node_modules/ci-info/index.d';
import { typeOf } from './node_modules/@sinonjs/commons/types/index.d';
 * Q: array method 응용 (method 체이닝)
 *
 * - get20sEmail 함수의 파라미터로 person object 배열이 주어집니다.
 *
 * - 배열의 각 요소는 다음과 같은 object입니다.
 * {
 *  name: string,
 *  age: number
 *  email: string
 * }
 *
 * - 배열의 각 요소 중 20대인 사람만 고른 뒤 나이 순으로 정렬한 후, email만 뽑아서 배열로 반환하세요.
 * - method 체이닝을 사용하세요.
 * - 원본 배열을 변경하지 말고 새로운 배열을 반환하세요.
 *
 * @param {{
 *  name: string,
 *  age: number,
 *  email: string
 * }[]} arr
 * @returns {string[]} 20대인 사람의 email 배열
 *
 */

// TODO: get20sEmail 함수를 작성하세요.
function get20sEmail(arr) {
    return arr.filter(obj => {
        if(Math.floor(obj.age / 10) === 2){
            return obj;
        }
    }).sort((a, b) => a.age - b.age).map(e => {
        return e.email;
    });
}

// export를 수정하지 마세요.
export { get20sEmail };
