var romanToInt = function (s) {
  let map = new Map();
  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);

  let len = s.length;
  let last = 0;
  let sum = 0;

  for(let i = (len - 1); i >= 0; i--) {
    let n = s[i];
    let number = map.get(n);
    if (number >= last) {
      sum += number;
    } else {
      sum -= number;
    }
    last = number;
  }
  return sum;
};