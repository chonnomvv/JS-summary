// 1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라
const x = 15;
if (x > 10 && x < 20) {
  console.log(`Q1:::${x}`);
}

// 2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
for (let i = 0; i < 10; i++) {
  if (!(i % 2)) console.log(i);
}

// 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
let result = '';
for (let i = 0; i < 10; i++) {
  if (!(i % 2)) result += i;
}
console.log(result);

// 4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
for (let i = 9; i >= 0; i--) {
  if (i % 2) console.log(i);
}

// 5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
let i = 0;
while (i < 10) {
  if (!(i % 2)) console.log(i);
  i += 1;
}

// 6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
{ let number = 10;
  while (number >= 0) {
    if ((number % 2)) console.log(number);
    number -= 1;
  } }

// 7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += i;
}
console.log(sum);

// 8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
let sumNo8 = 0;
for (let i = 1; i < 20; i++) {
  if (i % 2 && i % 3) sumNo8 += i;
}
console.log(sumNo8);

// 9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
let sumNo9 = 0;
for (let i = 1; i < 20; i++) {
  if (!(i % 2) || !(i % 3)) sumNo9 += i;
}
console.log(sumNo9);

// 10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.
let arrayNo10 = [];
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    // if ( i + j === 6) console.log(`[${i}, ${j}]`)
    if (i + j === 6) arrayNo10 = [i, j];
  }
  console.log(arrayNo10);
}

// 11. 삼각형 출력하기 - pattern 1
{
  let result = '';
  const leng = 5;
  for (let i = 1; i <= leng; i++) {
    for (let j = 1; j <= i; j++) {
      result += '*';
    }
    result += '\n';
  }
  console.log(result);
}
// 12. 삼각형 출력하기 - pattern 2
{
  let result = '';
  const leng = 5;
  for (let i = 1; i <= leng; i++) {
    for (let j = 1; j <= leng; j++) {
      if (j < i) result += ' ';
      else {
        result += '*';
      }
    }
    result += '\n';
  }
  console.log(result);
}

// 13. 삼각형 출력하기 - pattern 3

{
  let result = '';
  const leng = 5;
  for (let i = 1; i <= leng; i++) {
    for (let j = leng; j >= i; j--) {
      result += '*';
    }
    result += '\n';
  }
  console.log(result);
}

// 14. 삼각형 출력하기 - pattern 4
{
  let result = '';
  const leng = 5;
  for (let i = 1; i <= leng; i++) {
    for (let j = 1; j <= leng; j++) {
      if (leng - i >= j) result += ' ';
      else {
        result += '*';
      }
    }
    result += '\n';
  }
  console.log(result);
}

// 15. 정삼각형 출력하기
{
  let result = '';
  const leng = 5;
  for (let i = 1; i <= leng; i++) {
    for (let j = 0; j <= leng - i; j++) {
      if (j < leng - i) result += ' ';
      else {
        for (let k = 1; k <= 2 * i - 1; k++) {
          result += '*';
        }
      }
    }
    result += '\n';
  }
  console.log(result);
}
// 16. 정삼각형 출력하기
{
  let result = '';
  const leng = 5;
  for (let i = 1; i <= leng; i++) {
    for (let j = 1; j < i; j++) {
      result += ' ';
    }
    for (let k = 0; k < -2 * i + 11; k++) {
      result += '*';
    }
    result += '\n';
  }
  console.log(result);
}
