function countDigits(num) {
  num = Math.abs(num);
  
  if (num < 10) {
    return 1;
  }

  return 1 + countDigits(Math.floor(num / 10));
}

console.log(countDigits(12345) === 5);
console.log(countDigits(7) === 1);
console.log(countDigits(100000) === 6);
console.log(countDigits(99999) === 5);
console.log(countDigits(0) === 1);

// All test cases should log true.