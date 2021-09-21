function isArraysEquals(a, b) {
  return (
    a.length === b.length &&
    a.every((v, i) => parseFloat(v) === parseFloat(b[i]))
  );
}

export default isArraysEquals;
