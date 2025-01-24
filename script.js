// 1
let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22];

let number = arr.filter(item => typeof item === 'number').length;
if (number > 5) {
  console.log('гуд');
}

// 2
let arrObject = [
  [{ a: { price: 20 } }],
  [{ a: { price: 35 } }],
  [{ a: { price: 44 } }]
];
let total = 0;

arrObject.forEach(subArray => {
  subArray.forEach(obj => {
    total += obj.a.price;
  });
});

console.log('Total:', total);
