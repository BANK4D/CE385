console.log("1  typeof '42'      =", typeof "42");
console.log("3  typeof null      =", typeof null);
console.log("5  typeof NaN       =", typeof NaN);
console.log("6  '5' + 3          =", "5" + 3);
console.log("7  '5' - 3          =", "5" - 3);
console.log("8  0.1 + 0.2        =", 0.1 + 0.2);
console.log("   0.1+0.2 === 0.3  =", 0.1 + 0.2 === 0.3);
console.log("9  10 / 0           =", 10 / 0);
console.log("10 'abc' * 2        =", "abc" * 2);

// วิธีเก็บจำนวนเงินที่ถูกต้อง: เก็บเป็นสตางค์ (จำนวนเต็ม)
const priceSatang = 1050;   // 10.50 บาท
console.log("ราคา 3 ชิ้น =", (priceSatang * 3) / 100, "บาท");