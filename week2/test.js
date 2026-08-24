function getPrice(size) {
  let price = 0;
  switch (size) {
    case "S":  price = 30;
    case "M":  price = 45;
    case "L":  price = 60;
    default:   price = 0;
  }
  return price;
}
console.log(getPrice("S"));   // ?
console.log(getPrice("M"));   // ?