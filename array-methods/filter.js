const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const evens = numbers.filter((number) => number % 2 === 0);
console.log('evens:', evens);

const names2 = names.filter((name) => name.includes('d') === false && name.includes('D') === false);

console.log('names2:', names2);
