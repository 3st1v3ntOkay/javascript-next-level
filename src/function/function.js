function tradFunc() {
  return "traditional function";
}

const namedTradFunc = function () {
  return "named traditional function";
};

const arrowFunc = () => {
  return "arrow function";
};

console.log(tradFunc());
console.log(namedTradFunc());
console.log(arrowFunc());

const objectFunc = new Function("a", "b", "return a + b");
console.log(objectFunc(2, 6));

const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(this, numbers);
console.log(max);

const applyFunc = tradFunc.apply(this);
console.log(applyFunc);

function log(...args) {
  console.log(this, ...args);
}

const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);

console.log(boundLog2());

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// Expected output: "cheese"
