// ex3-calculator.js
// แบบฝึกหัด: เครื่องคิดเลขคะแนน โดยใช้ตัวดำเนินการคณิตศาสตร์ และ toFixed

// คะแนนแต่ละส่วนของวิชา (เต็ม 100)
const quizScore = 18;      // เต็ม 20
const midtermScore = 27;   // เต็ม 30
const finalScore = 42;     // เต็ม 50

// รวมคะแนนทั้งหมดด้วยตัวดำเนินการ +
const totalScore = quizScore + midtermScore + finalScore;
console.log(`คะแนนรวม: ${totalScore} / 100`);

// คำนวณเปอร์เซ็นต์ด้วย / และ *
const percentage = (totalScore / 100) * 100;
console.log(`คิดเป็น: ${percentage}%`);

// toFixed() ใช้ปัดทศนิยม คืนค่าเป็น string ที่มีจุดทศนิยมตามจำนวนที่กำหนด
const average = totalScore / 3; // เฉลี่ย 3 ส่วน
console.log(`คะแนนเฉลี่ยต่อส่วน: ${average.toFixed(2)}`); // ทศนิยม 2 ตำแหน่ง

// ตัวอย่างตัวดำเนินการอื่น ๆ
const bonusPoint = 2;
const finalTotal = totalScore + bonusPoint; // บวกคะแนนพิเศษ
const remainder = finalTotal % 10;          // หารเอาเศษ (modulo)
const squared = 5 ** 2;                     // ยกกำลัง

console.log(`คะแนนรวม + โบนัส: ${finalTotal}`);
console.log(`เศษจากการหาร 10: ${remainder}`);
console.log(`ตัวอย่างยกกำลัง 5^2 = ${squared}`);

// toFixed กับทศนิยมยาว ๆ เพื่อให้อ่านง่ายในการแสดงผล
const pi = 3.14159265;
console.log(`ค่า pi ปัดเหลือ 2 ตำแหน่ง: ${pi.toFixed(2)}`);