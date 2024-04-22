let bugers = [];
let drinks = [];
for (let i = 0; i < 3; i++) {
  let buger = prompt(`${i + 1}번째 햄버거 가격 입력 : `);
  bugers.push(buger);
}
for (let i = 0; i < 2; i++) {
  let drink = prompt(`${i + 1}번째 음료 가격 입력 : `);
  drinks.push(drink);
}

let minbuger = Math.min(...bugers);
let mindrink = Math.min(...drinks);
let sets = minbuger+mindrink-50;

document.write(`가장 싼 버거 ${minbuger}원 + 가장 싼 음료 ${mindrink}원으로<br>세트는 50원 할인해서 총 ${sets}원 입니다.`);