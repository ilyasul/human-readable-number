module.exports = function toReadable(number) {
  const arrayStr1 = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'zero',
  ];

  const objectStr2 = {
    2: 'twen',
    3: 'thir',
    4: 'for',
    5: 'fif',
    6: 'six',
    7: 'seven',
    8: 'eigh',
    9: 'nine',
  };

  function numbTo100() {
    const arrayStrNumb = [...String(number)];
    const numbTo20 = arrayStr1[+arrayStrNumb[arrayStrNumb.length - 1] - 1];
    if (+arrayStrNumb[arrayStrNumb.length - 1] === 0) {
      const newStr100 = `${objectStr2[+arrayStrNumb[arrayStrNumb.length - 2]]}ty`;
      return newStr100;
    }
    const newStr100 = `${objectStr2[+arrayStrNumb[arrayStrNumb.length - 2]]}ty ${numbTo20}`;
    return newStr100;
  }

  function numbTo19() {
    if (number === 0) {
      const newStr19 = arrayStr1[19];
      return newStr19;
    }
    const newStr19 = arrayStr1[number - 1];
    return newStr19;
  }

  function numbTo1000() {
    const arrayStrNumb = [...String(number)];
    const firstCheck = arrayStrNumb[arrayStrNumb.length - 2];
    const secondCheck = arrayStrNumb[arrayStrNumb.length - 1];
    let check;
    function checkF() {
      const testCheck = +firstCheck + +secondCheck;
      if (testCheck !== 0) {
        check = firstCheck + secondCheck;
      }
      if (testCheck === 0) {
        check = +firstCheck + +secondCheck;
      }
      return check;
    }
    checkF();
    let newStr1000;
    if (number < 20) {
      newStr1000 = numbTo19(number);
      return newStr1000;
    }
    if (number < 100) {
      newStr1000 = numbTo100(number);
      return newStr1000;
    }
    if (check <= 19 && check > 0) {
      newStr1000 = `${arrayStr1[+arrayStrNumb[+arrayStrNumb.length - 3] - 1]} hundred ${arrayStr1[check - 1]}`;
      return newStr1000;
    }
    if (check === 0) {
      newStr1000 = `${arrayStr1[+arrayStrNumb[+arrayStrNumb.length - 3] - 1]} hundred`;
      return newStr1000;
    }
    if (number < 1000) {
      newStr1000 = `${arrayStr1[+arrayStrNumb[+arrayStrNumb.length - 3] - 1]} hundred ${numbTo100(number)}`;
      return newStr1000;
    }
    return newStr1000;
  }
  return numbTo1000(number);
};
