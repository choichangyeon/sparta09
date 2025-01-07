// B 유저에게 할인 쿠폰을 적용하려고 applyCoupon 함수를 만들었습니다.


function applyCoupon(cart, coupon) {
  cart.items.forEach((item) => {
    item.price -= coupon.discount;
  });
}

const userACart = {
  items: [
    { name: "키보드", price: 30000 },
    { name: "마우스", price: 20000 },
  ],
};

// const userBCart = userACart;
const coupon = { discount: 5000 };

// applyCoupon(userBCart, coupon);

// console.log(userACart); //{items: [ { name: '키보드', price: 25000 }, { name: '마우스', price: 15000 } ]}
// console.log(userBCart); //{items: [ { name: '키보드', price: 25000 }, { name: '마우스', price: 15000 } ]}

// 1.	실행 결과로 userACart.items와 userBCart.items는 각각 어떻게 달라져 있을까요?
    // userAcart와 userBcart의 변경사항은 동일할 것이며
    // 각 items들의 가격이 5000이 줄어든 키보드 - 25000, 마우스 - 15000일 것 이다. (실행 후 동일한 것 확인)

// 2.	1번의 결과에 대한 이유를 설명해보세요.
    // 실행 전 예상 - userAcart와 userBcart는 참조형 변수이기에 단순 연산자를 통한 복사는 주소를 복사하는 것과 동일하다.
    // 그렇기에 userAcart와 userBcart의 변경사항은 동일할 것이다.

// 3.	원래 의도대로라면 유저 A와 유저 B 장바구니가 독립적으로 동작해야 하는데, 그렇게 하려면 코드를 어떻게 수정해야 할까요?
    // 실행 전 예상 - 얕은 복사로는 중첩 객체에 대한 주소 분리를 할 수 없기 때문에 재귀적으로 구현해야한다.
    // 구현 중 - 재귀적으로 구현 시 items는 객체가 아닌 배열이라 재귀문이 아닌 반복문을 통해 복사해야한다는 것을 깨달았다.


let copy = function(obj){
    var result = {};
    for(prop in obj){
        result[prop] = obj[prop].map((item) =>{
            var dic = {};
            for(tag in item){
                dic[tag] = item[tag];
            }
            return dic;
        } )
    }
    return result;
}

//{items: [ { name: '키보드', price: 25000 }, { name: '마우스', price: 15000 } ]}


let temp = copy(userACart);
const userBCart = temp;
applyCoupon(userBCart, coupon);

console.log(userBCart);
console.log(userACart);