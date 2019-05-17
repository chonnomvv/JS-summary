
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

/*
4. 문자열 내 p와 y의 개수
numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 인수로 전달받는다.
s에 존재하는 'p'의 개수와 'y'의 갯수를 비교해 같으면 true, 다르면 false를 리턴하도록 함수를 완성하라.
대소문자를 구별하지 않으며 'p', 'y' 모두 하나도 없는 경우는 항상 true를 리턴한다.
예를 들어 s가 'pPoooyY'면 true를 리턴하고 'Pyy'라면 false를 리턴한다.
*/

function numPY(s) {
  if (!s) return 'true';
  const str = s.toLowerCase();
  let countP = 0;
  let countY = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'p') countP += 1;
    else if (str[i] === 'y') countY += 1;
  }
  return countP === countY;
}

console.log(numPY('pPoooyY'));
console.log(numPY('Pyy'));
console.log(numPY('ab'));
console.log(numPY(''));
console.log(numPY());

/*
toWeirdCase함수는 문자열을 인수로 전달받는다. 
문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하라.

예를 들어 s가 ‘hello world’라면 첫번째 단어는 ‘HeLlO’, 두번째 단어는 ‘WoRlD’로 바꿔 ‘HeLlO WoRlD’를 리턴한다.

주의) 문자열 전체의 짝/홀수 인덱스가 아니라 단어(공백을 기준)별로 짝/홀수 인덱스를 판단한다.
*/

// function toWeirdCase(s) {
//   const arrayS = s.split(' ');
//   let resultS = '';
//   for (let i = 0; i < arrayS.length; i++) {
//     let newStr = '';
//     for (let j = 0; j < arrayS[i].length; j++) {
//       j % 2 === 0 ? newStr += arrayS[i][j].toUpperCase() : newStr += arrayS[i][j].toLowerCase();
//     }
//     resultS += `${newStr} `;
//   }
//   return resultS.trim();
// }

function toWeirdCase(s) {
  const wordArr = s.split(' ');
  function toUpperLower(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
      res += i % 2 ? str[i].toLowerCase() : str[i].toUpperCase();
    }
    return res;
  }
  for (let i = 0; i < wordArr.length; i++) {
    wordArr[i] = toUpperLower(wordArr[i]);
  }
  return wordArr.join(' ');
}

console.log(toWeirdCase('hello world'));    // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'

/*
strToInt 메소드는 문자열을 인수로 전달받는다. 전달받은 문자열 인수를 숫자로 변환한 결과를 반환하도록 strToInt를 작성하라.

예를 들어 str이 ‘1234’이면 1234를 반환하고, ‘-1234’이면 -1234를 반환한다. str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없다.
*/
// function strToInt(str) {
//   return Number(str);
// }

// function strToInt(str) {
//   return str * 1;
// }

function strToInt(str) {
  return +str;
}

console.log(strToInt('1234'));  // 1234
console.log(strToInt('-1234')); // -1234


/*
8. 수박수박수박수박수박수?
waterMelon 함수는 정수를 인수로 전달받는다. 길이가 n이고, 수박수박수…와 같은 패턴을 유지하는 문자열을 리턴하도록 함수를 완성하라.

예를 들어 n이 4이면 ‘수박수박’을 리턴하고 3이라면 ‘수박수’를 리턴한다.
*/
function waterMelon(n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    i % 2 === 0 ? result += '수' : result += '박'
  }
  return result;
}
console.log('n이 3인 경우: '+ waterMelon(3));
console.log('n이 4인 경우: '+ waterMelon(4));

/*
9. 정수제곱근 판별하기
nextSqaure함수는 정수를 인수로 전달받는다. n이 임의의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 임의의 정수 x의 제곱이 아니라면 ‘no’를 리턴하는 함수를 작성하라.

예를 들어 n이 121이라면 이는 정수 11의 제곱이므로 (11+1)의 제곱인 144를 리턴하고, 3이라면 ‘no’을 리턴한다.
*/

function nextSqaure(n) {
  return Math.floor(Math.sqrt(n)) === Math.sqrt(n) ? (Math.sqrt(n) + 1) ** 2 : 'no';
}

console.log(nextSqaure());    // no
console.log(nextSqaure(0));   // 1
console.log(nextSqaure(1));   // 4
console.log(nextSqaure(2));   // no
console.log(nextSqaure(3));   // no
console.log(nextSqaure(121)); // 144
console.log(nextSqaure(165)); // no
console.log(nextSqaure(400)); // 441

/*
10. 배열의 최대/최소값 구하기
배열의 요소 중 최대값/최소값을 반환하는 함수를 완성하라.

function getMaxValueFromArray(array) {

}
console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7

function getMinValueFromArray(array) {

}
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5
*/

function getMaxValueFromArray(array) {
  // return Math.max.apply(null, array);
  return Math.max(...array);
}

console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7

function getMinValueFromArray(array) {
  // return Math.min.apply(null, array);
  return Math.min(...array);
}

console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5