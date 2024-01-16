const sqr = (x) => x * x;
const sqrt = (x) => x ** (0.5);
const distance = (x1, y1, x2, y2) => (sqrt(sqr(x2 - x1) + sqr(y2 - y1)));

module.exports = { distance, sqr, sqrt };