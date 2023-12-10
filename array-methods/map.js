const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const prices2 = prices.map((x) => {
  return { price: x, salePrice: x / 2 };
})

console.log('prices2:', prices2);

const prices3 = prices.map((x) => '$' + x.toFixed(2));

console.log('prices3:', prices3);
