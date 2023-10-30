const set1 = new Set();
set1.add({ x: 10, y: 20 }).add({ x: 20, y: 30 });

set1.forEach((point) => {
  if (point.x > 10) {
    set1.delete(point);
  }
});

const iterator1 = set1.entries();

for (const [value, _] of iterator1) {
  console.log(value);
}
