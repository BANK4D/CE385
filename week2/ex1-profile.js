// ข้อมูลส่วนตัว
const name = "แบงค์";
const studentId = "67112211";
const age = 22;
const major = "วิศวกรรมคอมพิวเตอร์";

// สมมติว่าเหลือเวลาเรียนอีก 2 ปี และปีปัจจุบันคือ พ.ศ. 2569
const remainingYears = 2;
const graduationYear = 2569 + remainingYears;

// จำนวนวิชาที่ลงทะเบียน สมมติว่าลงทะเบียนเต็มตารางเรียน
const courses = 5;


// แสดงผลด้วย Template Literal
console.log(`===== บัตรแนะนำตัว =====
ชื่อเล่น       : ${name}
รหัสนักศึกษา   : ${studentId}
อายุ           : ${age} ปี
สาขาวิชา       : ${major}
ลงทะเบียน      : ${courses} วิชา
ปีที่จะจบ      : ${graduationYear}
========================`);