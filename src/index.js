module.exports = function toReadable (num) {
  let numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };
  
  let tens = {
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred'
  };
  
  let total = '';

  const tenToRead = (number) => {
    let result = '';
    let digit = number % 10;
    if (digit === 0) {
      result += tens[number];
    } else {
      let ten = number - digit;
      result += `${tens[ten]} ${numbers[digit]}`;
    }
    return result;
  }

  if (num < 20) {
    total += numbers[num];
  } else if (num < 100) {
    total += tenToRead(num);
  } else {
    let extra = num % 100;
    let theHundred = (num - extra) / 100;
    if (extra === 0) {
      total += `${numbers[theHundred]} hundred`;
    } else if (extra < 20) {
      total += `${numbers[theHundred]} hundred ${numbers[extra]}`;
    } else {
      total += `${numbers[theHundred]} hundred ${tenToRead(extra)}`;
    }
  }
  return total;
};