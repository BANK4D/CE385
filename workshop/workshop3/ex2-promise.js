'use strict';

// ============================================================
// Workshop 3 · ข้อที่ 2 — แปลง Callback เป็น Promise
// ============================================================
//
// เงื่อนไข:
//  - ทุกขั้นของโซ่ (chain) ต้อง return
//  - ห้ามแก้ข้อ 1 (copy มาใช้ในไฟล์นี้แทน)
//  - ห้ามตั้ง Promise โดยไม่มี .catch

// ------------------------------------------------------------
// (คัดลอก) ข้อมูลนักศึกษาจากข้อ 1 มาไว้ในไฟล์นี้
// ------------------------------------------------------------
const students = [
  { id: "6701", name: "นายซิกเซเว้น", major: "วิศวกรรมคอมพิวเตอร์", score: 85 },
  { id: "6702", name: "นางสาวซิกเอท", major: "วิศวกรรมไฟฟ้า", score: 92 },
  { id: "6703", name: "นายซิกไนน์", major: "วิศวกรรมเครื่องกล", score: 78 },
  { id: "6704", name: "นางสาวซิกเท็น", major: "วิศวกรรมโยธา", score: 88 },
  { id: "6501", name: "นายหกห้า", major: "วิศวกรรมคอมพิวเตอร์", score: 85 },
];

// ------------------------------------------------------------
// ส่วนที่ 1 — fetchStudentByIdAsync(id) คืน Promise
// ------------------------------------------------------------
// ห้ามใช้คำว่า async ในข้อนี้ (ห่อด้วย new Promise เท่านั้น) ยังหน่วง 300ms เหมือนเดิม
// reject เมื่อ id ผิดรูปแบบหรือไม่พบ · resolve ด้วยสำเนา object เมื่อพบ
//
// Hint: ย้ายโค้ดตรวจสอบจากข้อ 1 มาไว้ใน executor เปลี่ยน
//       callback(err, x) -> reject(err) / resolve(x)
function fetchStudentByIdAsync(id) {
  return new Promise((resolve, reject) => {
    if (typeof id !== "string" || id.trim() === "") {
      reject(new Error("รหัสนักศึกษาไม่ถูกต้อง"));
      return;
    }

    setTimeout(() => {
      const student = students.find((item) => item.id === id);

      if (!student) {
        reject(new Error(`ไม่พบรหัสนักศึกษา ${id}`));
        return;
      }

      resolve({ ...student });
    }, 300);
  });
}

// ------------------------------------------------------------
// ส่วนที่ 2 — เรียกใช้ครบ 3 กรณีเหมือนข้อ 1 ด้วย .then/.catch
//            แล้วปิดท้ายด้วย .finally (ต้องทำงานทุกกรณี)
// ------------------------------------------------------------

// a) id ที่มีจริง
fetchStudentByIdAsync("6701")
  .then((student) => {
    return console.log("สำเร็จ:", student.name);
  })
  .catch((error) => {
    console.error(error.message);
  })
  .finally(() => {
    console.log("จบกรณี a");
  });

// b) id ที่ไม่มี
fetchStudentByIdAsync("6742")
  .then((student) => {
    return console.log("สำเร็จ:", student.name);
  })
  .catch((error) => {
    console.error(error.message);
  })
  .finally(() => {
    console.log("จบกรณี b");
  });

// c) id ผิดรูปแบบ
fetchStudentByIdAsync(42)
  .then((student) => {
    return console.log("สำเร็จ:", student.name);
  })
  .catch((error) => {
    console.error(error.message);
  })
  .finally(() => {
    console.log("จบกรณี c");
  });

// ------------------------------------------------------------
// ส่วนที่ 3 — เขียน "โซ่" 3 ขั้น แต่ละขั้นต้อง return ส่งต่อ
// ------------------------------------------------------------
// fetchStudentByIdAsync('6501')
//   -> ขั้น 1: แปลงเป็น { name, grade } (ใช้กฎตัดเกรดเดิมจาก Workshop 2)
//   -> ขั้น 2: แปลงเป็นข้อความรายงาน 1 บรรทัด
//   -> ขั้น 3: พิมพ์ออกทาง console
//
fetchStudentByIdAsync("6501")
  .then((student) => {
    const grade = student.score >= 80 ? "A" : student.score >= 70 ? "B" : student.score >= 60 ? "C" : student.score >= 50 ? "D" : "F";
    return { name: student.name, grade };
  })
  .then((info) => {
    return `นักศึกษา ${info.name} ได้เกรด ${info.grade}`;
  })
  .then((line) => {
    return console.log(line);
  })
  .catch((error) => {
    console.error(error.message);
  });

// ------------------------------------------------------------
// ส่วนที่ 4 (โบนัส +0.5) — promisify(fn)
// ------------------------------------------------------------
// รับฟังก์ชัน error-first ใด ๆ คืนเวอร์ชัน Promise
// ทดสอบกับฟังก์ชันตัวอย่างอื่นนอกจากข้อ 1
function promisify(fn) {
  return (...args) => new Promise((resolve, reject) => {
    fn(...args, (error, result) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(result);
    });
  });
}

function addAsync(firstNumber, secondNumber, callback) {
  setTimeout(() => callback(null, firstNumber + secondNumber), 100);
}

promisify(addAsync)(2, 3)
  .then((result) => {
    return console.log("ผลบวก:", result);
  })
  .catch((error) => {
    console.error(error.message);
  });
