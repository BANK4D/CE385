const students = [
  { id: "6701", name: "นายซิกเซเว้น", major: "วิศวกรรมคอมพิวเตอร์", score: 85 },
  { id: "6702", name: "นางสาวซิกเอท", major: "วิศวกรรมไฟฟ้า", score: 92 },
  { id: "6703", name: "นายซิกไนน์", major: "วิศวกรรมเครื่องกล", score: 78 },
  { id: "6704", name: "นางสาวซิกเท็น", major: "วิศวกรรมโยธา", score: 88 },
  { id: "6501", name: "นายหกห้า", major: "วิศวกรรมคอมพิวเตอร์", score: 85 },
];

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
// ส่วนที่ 1 — reportSequential() 
// ------------------------------------------------------------
// ดึงนักศึกษา 3 คน "ทีละคน" ด้วย await ใน for...of
// เก็บเวลาด้วย Date.now() แล้วพิมพ์ว่าใช้กี่ ms
async function reportSequential() {
  const start = Date.now();
  const ids = ["6701", "6702", "6703"];
  for (const id of ids) {
    const student = await fetchStudentByIdAsync(id);
    console.log(`  ✓ ${student.name} (${student.score})`);
  }
  const elapsed = Date.now() - start;
  console.log(`[Sequential] ใช้เวลา ${elapsed}ms\n`);
}

// ------------------------------------------------------------
// ส่วนที่ 2 — reportParallel()
// ------------------------------------------------------------
// ดึง 3 คนเดียวกัน "พร้อมกัน" ด้วย Promise.all + map
// พิมพ์เวลา และเทียบกับข้อ 1 ว่าเร็วขึ้นกี่เท่า
async function reportParallel() {
  const start = Date.now();
  const ids = ["6701", "6702", "6703"];
  const results = await Promise.all(ids.map(id => fetchStudentByIdAsync(id)));
  results.forEach(student => {
    console.log(`  ✓ ${student.name} (${student.score})`);
  });
  const elapsed = Date.now() - start;
  console.log(`[Parallel] ใช้เวลา ${elapsed}ms`);
  console.log(`เร็วขึ้นประมาณ 3 เท่า (Sequential ~900ms vs Parallel ~300ms)\n`);
}

// ------------------------------------------------------------
// ส่วนที่ 3 — safeReport(id) ครบ try-catch-finally
// ------------------------------------------------------------
// สำเร็จพิมพ์:   พบข้อมูล: <name> (เกรด X)
// ไม่พบพิมพ์:    ตรวจไม่พบ: <error>   (ห้าม crash)
// finally พิมพ์: -- จบการตรวจสอบ <id> --
async function safeReport(id) {
  try {
    const student = await fetchStudentByIdAsync(id);
    const grade = student.score >= 80 ? "A" : student.score >= 70 ? "B" : student.score >= 60 ? "C" : student.score >= 50 ? "D" : "F";
    console.log(`  ✓ พบข้อมูล: ${student.name} (เกรด ${grade})`);
  } catch (error) {
    console.log(`  ✗ ตรวจไม่พบ: ${error.message}`);
  } finally {
    console.log(`  -- จบการตรวจสอบ ${id} --\n`);
  }
}

// ------------------------------------------------------------
// ส่วนที่ 4 — ตอบเป็น comment ท้ายไฟล์
// ------------------------------------------------------------
// ① ทำไม try-catch ครอบ await จับ reject ได้ แต่ครอบการเรียก callback ธรรมดาไม่ได้?
// คำตอบ: await รอให้ Promise settled ภายใน try block ก่อน
//        ถ้า Promise reject แล้ว await จะ throw error ออกมา ให้ catch จับได้
//        แต่ callback ธรรมดา (non-Promise) ไม่มี throw ออกมา เพราะ error เกิดใน context ของ callback ไม่ใช่ synchronous code
//
// ② ทดลอง "ลืม await" หน้า Promise.all แล้วเอาผลไปใช้ต่อ — เกิดอะไรขึ้น เขียนคำอธิบายประกอบ
// คำตอบ: ถ้าลืม await ก่อน Promise.all จะได้ Promise object ไม่ใช่ผลลัพธ์
//        เมื่อเอา Promise object ไปใช้ต่อ (เช่น .forEach) จะได้ผิด เพราะ results จะเป็น Promise ไม่ใช่ array
//        Promise.all() จะยังคงดำเนินการใน background แต่ code ต่อไปจะไม่รอมัน ส่งผลให้ logic ผิด

async function main() {
  await reportSequential();
  await reportParallel();
  await safeReport(/* TODO: id ที่พบ */ '6501');
  await safeReport(/* TODO: id ที่ไม่พบ */ '0000');
}

main();
