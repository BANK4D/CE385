// ex2-types.js
// แบบฝึกหัด: ชนิดข้อมูล (Data Types) และการใช้ typeof, null vs undefined

// ตัวแปรแต่ละชนิดข้อมูลพื้นฐานใน JavaScript
const studentName = "สมหญิง";      // String
const studentAge = 20;              // Number
const isPassed = true;              // Boolean
const scores = [85, 90, 78];        // Object (Array)
const studentInfo = {               // Object
  name: studentName,
  age: studentAge,
};

// ตัวแปรที่ยังไม่ได้กำหนดค่า -> undefined
let phoneNumber;

// ตัวแปรที่ตั้งใจกำหนดให้ "ไม่มีค่า" -> null
let middleName = null;

// ใช้ typeof เพื่อตรวจสอบชนิดข้อมูลของแต่ละตัวแปร
console.log(`studentName คือชนิด: ${typeof studentName}`);
console.log(`studentAge คือชนิด: ${typeof studentAge}`);
console.log(`isPassed คือชนิด: ${typeof isPassed}`);
console.log(`scores คือชนิด: ${typeof scores}`);
console.log(`studentInfo คือชนิด: ${typeof studentInfo}`);
console.log(`phoneNumber คือชนิด: ${typeof phoneNumber}`);
// หมายเหตุ: typeof null จะได้ "object" ซึ่งเป็นจุดแปลก (bug) ที่มีมาตั้งแต่ JS เวอร์ชันแรก
console.log(`middleName คือชนิด: ${typeof middleName}`);

// เปรียบเทียบ null กับ undefined ด้วย ===
console.log(`middleName === null : ${middleName === null}`);
console.log(`phoneNumber === undefined : ${phoneNumber === undefined}`);
console.log(`null === undefined : ${null === undefined}`); // false เพราะคนละชนิดข้อมูล

// สรุปความหมาย
console.log("undefined = ยังไม่ได้กำหนดค่าให้ตัวแปร (ระบบตั้งให้อัตโนมัติ)");
console.log("null = ตั้งใจกำหนดว่า 'ไม่มีค่า' โดยผู้เขียนโค้ดเอง");