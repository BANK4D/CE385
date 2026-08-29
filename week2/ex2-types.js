// ส่วนที่ 1: สร้างตัวแปรให้ครบ 6 ชนิดข้อมูล
const myString = "สวัสดี";
const myNumber = 22;
const myBoolean = true;
let myUndefined;
const myNull = null;
const myArray = ["JavaScript", "HTML", "CSS"];

// แสดงค่าและชนิดข้อมูลของแต่ละตัวแปร
console.log("ค่า:", myString, "| ชนิด:", typeof myString);
console.log("ค่า:", myNumber, "| ชนิด:", typeof myNumber);
console.log("ค่า:", myBoolean, "| ชนิด:", typeof myBoolean);
console.log("ค่า:", myUndefined, "| ชนิด:", typeof myUndefined);
console.log("ค่า:", myNull, "| ชนิด:", typeof myNull);
console.log("ค่า:", myArray, "| ชนิด:", typeof myArray);


// ส่วนที่ 2: ตอบคำถามเกี่ยวกับ typeof
console.log("typeof null =", typeof null);
console.log("typeof null เป็น object จริงหรือไม่ =", typeof null === "object");

console.log("ตัวแปรที่ประกาศแล้วแต่ยังไม่กำหนดค่า มีชนิดเป็น =", typeof myUndefined);

const myNaN = Number("abc");
console.log("typeof NaN =", typeof myNaN);


// ส่วนที่ 3: การแปลงชนิดข้อมูล
const inputAge = "20";
const inputScore = "85.5";

// แปลง inputAge จาก string เป็น number
const ageNumber = Number(inputAge);

// แปลง inputScore เป็น number และแสดงทศนิยม 1 ตำแหน่ง
const scoreNumber = Number(inputScore);

console.log("inputAge =", inputAge);
console.log("หลังแปลง inputAge =", ageNumber);
console.log("inputAge === 20 =", inputAge === 20);
console.log("Number(inputAge) === 20 =", Number(inputAge) === 20);

console.log("inputScore =", inputScore);
console.log("หลังแปลง inputScore =", scoreNumber.toFixed(1));

// ตรวจสอบ NaN
console.log("myNaN เป็น NaN หรือไม่ =", Number.isNaN(myNaN));