function isArraysEquals(a, b) {
  return (
    a.length === b.length &&
    a.every((v, i) => parseInt(v, 10) === parseInt(b[i], 10))
  );
}

export default isArraysEquals;
