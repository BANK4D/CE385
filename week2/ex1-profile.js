// ex1-profile.js
// แบบฝึกหัด: แนะนำตัว โดยใช้ const, Template Literal และ comment

// ประกาศตัวแปรข้อมูลส่วนตัวด้วย const (ห้ามใช้ var)
const studentId = "67112211";
const firstName = "สมชาย";
const lastName = "ใจดี";
const major = "วิศวกรรมคอมพิวเตอร์";
const year = 2;

// ใช้ Template Literal (backtick + ${}) แทนการต่อ string ด้วย +
const introText = `สวัสดีครับ ผมชื่อ ${firstName} ${lastName}
รหัสนักศึกษา: ${studentId}
สาขา: ${major} ชั้นปีที่ ${year}`;

// แสดงผลลัพธ์
console.log(introText);

// ตัวอย่าง Template Literal แบบคำนวณในตัว {} ได้ด้วย
const nextYear = year + 1;
console.log(`ปีหน้าผมจะขึ้นชั้นปีที่ ${nextYear}`); 