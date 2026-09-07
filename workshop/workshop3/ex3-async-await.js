'use strict';

// ============================================================
// Workshop 3 · ข้อที่ 3 — async/await และลำดับ vs ขนาน
// ============================================================
//
// เงื่อนไข:
//  - ทุกฟังก์ชันเป็น async เรียกจาก main()
//  - ห้ามใช้ .then (ฝึก await ล้วน)
//  - ลำดับพิมพ์ต้องเรียบร้อย: จบข้อ 1 (reportSequential) ก่อนเริ่มข้อ 2 (reportParallel)
//
// Hint: เวลาที่ควรได้ ตามลำดับ ~900ms · ขนาน ~300ms
//       (ถ้าตัวเลขไม่ห่างกันขนาดนี้ แปลว่ายังรอทีละตัวอยู่)

// TODO: copy fetchStudentByIdAsync (และข้อมูล students) จากข้อ 2 มาไว้ที่นี่

// ------------------------------------------------------------
// ส่วนที่ 1 — reportSequential() 
// ------------------------------------------------------------
// ดึงนักศึกษา 3 คน "ทีละคน" ด้วย await ใน for...of
// เก็บเวลาด้วย Date.now() แล้วพิมพ์ว่าใช้กี่ ms
async function reportSequential() {
  // TODO: const start = Date.now();
  // TODO: for...of รายชื่อ id 3 ตัว -> await fetchStudentByIdAsync(id)
  // TODO: พิมพ์เวลาที่ใช้ = Date.now() - start
}

// ------------------------------------------------------------
// ส่วนที่ 2 — reportParallel()
// ------------------------------------------------------------
// ดึง 3 คนเดียวกัน "พร้อมกัน" ด้วย Promise.all + map
// พิมพ์เวลา และเทียบกับข้อ 1 ว่าเร็วขึ้นกี่เท่า
async function reportParallel() {
  // TODO: const start = Date.now();
  // TODO: await Promise.all(ids.map(id => fetchStudentByIdAsync(id)))
  // TODO: พิมพ์เวลาที่ใช้ และเทียบกับ reportSequential
}

// ------------------------------------------------------------
// ส่วนที่ 3 — safeReport(id) ครบ try-catch-finally
// ------------------------------------------------------------
// สำเร็จพิมพ์:   พบข้อมูล: <name> (เกรด X)
// ไม่พบพิมพ์:    ตรวจไม่พบ: <error>   (ห้าม crash)
// finally พิมพ์: -- จบการตรวจสอบ <id> --
async function safeReport(id) {
  // TODO: try { const student = await fetchStudentByIdAsync(id); ... }
  //       catch (error) { ... }
  //       finally { ... }
}

// ------------------------------------------------------------
// ส่วนที่ 4 — ตอบเป็น comment ท้ายไฟล์
// ------------------------------------------------------------
// ① ทำไม try-catch ครอบ await จับ reject ได้ แต่ครอบการเรียก callback ธรรมดาไม่ได้?
// TODO: เขียนคำตอบตรงนี้
//
// ② ทดลอง "ลืม await" หน้า Promise.all แล้วเอาผลไปใช้ต่อ — เกิดอะไรขึ้น เขียนคำอธิบายประกอบ
// TODO: เขียนคำตอบตรงนี้ (ลองโค้ดจริงเพื่อสังเกตผลก่อนสรุป)

async function main() {
  await reportSequential();
  await reportParallel();
  await safeReport(/* TODO: id ที่พบ */ '6501');
  await safeReport(/* TODO: id ที่ไม่พบ */ '0000');
}

main();
