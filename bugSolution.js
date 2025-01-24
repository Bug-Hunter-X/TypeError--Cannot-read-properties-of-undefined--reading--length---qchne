function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null or undefined case
  }
  return x.length; // Access 'length' property of x
}