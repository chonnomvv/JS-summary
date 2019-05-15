
function evenOrOdd(num) {
  if (num % 2) return 'Odd';
  return 'Even';
}

function evenOrOdd2(num) {
  return num % 2 ? 'Odd' : 'Even';
}
console.log(evenOrOdd(21));
console.log(evenOrOdd2(21));

// #2. 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기 (Google)
// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가? 이를 구하는 함수를 완성하라.

// 단, 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다. 예를 들어 8808은 3, 8888은 4로 카운팅 해야 한다.

// function getCount8() {
//   let count = 0;
//   for (let i = 0; i <= 10000; i++) {
//     const test = i.toString();
//     const box = test.split('8');
//     count += box.length - 1;
//   }
//   return count;
// }
function getCount8() {
  let longString = '';
  for (let i = 1; i < 10001; i++) {
    longString += i;
  }
  return longString.split('8').length - 1;
}
console.log(getCount8()); // 4000

// function alphaString46(s) {
//   const isNum = !isNaN(s);
//   const size = s.length > 3 && s.length < 7;
//   return isNum && size;
// }
// console.log(alphaString46('1234'));
function alphaString46(s) {
  if (s === undefined) return false;
  return s.length > 3 && s.length < 7 && Boolean(parseInt(s, 10).toString().length === s.length);
}
console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723'));  // false
console.log(alphaString46('a234')); // false
console.log(alphaString46(''));     // false
console.log(alphaString46());       // false