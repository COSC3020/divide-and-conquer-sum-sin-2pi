function divideAndConquerSum(a) {
  if (a.length === 1) {
    return a[0];
  }

  if (a.length === 0) {
    return 0;
  }
  i1 = Math.floor(a.length / 3);
  i2 = Math.floor(2 * a.length / 3);

  const first = a.slice(0, i1);
  const second = a.slice(i1, i2);
  const third = a.slice(i2);

  const f = divideAndConquerSum(first);
  const s = divideAndConquerSum(second);
  const t = divideAndConquerSum(third);

  return f + s + t;
}

