'use strict';

// ============================================================
// Workshop 3 · ข้อที่ 4 — เลือก Combinator ให้ถูกงาน
// ============================================================
//
// เงื่อนไข: ทั้ง 4 สถานการณ์เรียกกันในไฟล์เดียว ผ่าน main() เดียว
//          ห้ามแก้สถานการณ์ 1 ด้วย for+await
//
// Hint: ครบทุกชิ้น / รู้ผลทุกชิ้น / ตัวแรกที่สำเร็จ / ตัวแรกที่จบ
//       — ตรงตัวกับตาราง 4 นักสืบในสไลด์

// เครื่องมือจำลอง (ห้ามแก้)
const wait = (ms, value, willFail = false) =>
  new Promise((resolve, reject) => {
    setTimeout(() => (willFail ? reject(new Error(`${value} ล้มเหลว`)) : resolve(value)), ms);
  });

// ------------------------------------------------------------
// สถานการณ์ 1 — หน้าแรก: "โปรไฟล์"(300ms) + "ตารางเรียน"(400ms) + "ประกาศ"(500ms)
// ครบ -> เปิดหน้าแรก: ...   ขึ้นใดล้ม -> หน้าแรกเปิดไม่ได้: <error>
// (ทดสอบทั้งสองแบบ: ตั้งประกาศ willFail=true)
//
// เลือก combinator: Promise.all
// เหตุผล: ต้องการให้ทั้ง 3 ส่วนสำเร็จ ถ้าใดล้มส่วนเดียว -> หน้าแรกเปิดไม่ได้
async function scenario1() {
  console.log("[Scenario 1] หน้าแรก: โปรไฟล์ + ตารางเรียน + ประกาศ");
  try {
    const [profile, timetable, announcement] = await Promise.all([
      wait(300, "โปรไฟล์"),
      wait(400, "ตารางเรียน"),
      wait(500, "ประกาศ"),
    ]);
    console.log(`  ✓ เปิดหน้าแรก: ${profile}, ${timetable}, ${announcement}\n`);
  } catch (error) {
    console.log(`  ✗ หน้าแรกเปิดไม่ได้: ${error.message}\n`);
  }
}

// ------------------------------------------------------------
// สถานการณ์ 2 — แจ้งเตือนผลสอบ: "อีเมล"(300ms สำเร็จ) + "SMS"(500ms ล้ม) + "แอป"(400ms สำเร็จ)
// รายงานครบทุกช่อง ช่องที่ล้มห้ามทำรายงานพัง
//
// เลือก combinator: Promise.allSettled
// เหตุผล: ต้องการรายงานผลครบทุกช่อง ช่องไหนล้มก็ยังรายงานได้ (ไม่ทำให้ promise ล้มทั้งหมด)
async function scenario2() {
  console.log("[Scenario 2] แจ้งเตือนผลสอบ: อีเมล + SMS + แอป");
  const results = await Promise.allSettled([
    wait(300, "อีเมล"),
    wait(500, "SMS", true), // ล้มเหลว
    wait(400, "แอป"),
  ]);
  console.log("  ผลการแจ้งเตือน:");
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log(`    ✓ ${result.value} สำเร็จ`);
    } else {
      console.log(`    ✗ ${result.reason.message}`);
    }
  });
  console.log();
}

// ------------------------------------------------------------
// สถานการณ์ 3 — mirror server: mirror-A(300ms สำเร็จ) · mirror-B(600ms สำเร็จ)
// ได้ข้อมูลจากตัวแรกที่สำเร็จ -> ใช้ข้อมูลจาก: ...
//
// เลือก combinator: Promise.race (หรือ Promise.any สำหรับเอาแค่ success)
// เหตุผล: ต้องการใช้ข้อมูลจากเซิร์ฟเวอร์แรกที่ตอบสำเร็จ (ไม่รอตัวอื่น)
async function scenario3() {
  console.log("[Scenario 3] Mirror server: mirror-A + mirror-B");
  try {
    const result = await Promise.race([
      wait(300, "mirror-A"),
      wait(600, "mirror-B"),
    ]);
    console.log(`  ✓ ใช้ข้อมูลจาก: ${result}\n`);
  } catch (error) {
    console.log(`  ✗ ทั้งสอง mirror ล้มเหลว: ${error.message}\n`);
  }
}

// ------------------------------------------------------------
// สถานการณ์ 4 — ค้นหา: ฐานข้อมูล(1200ms สำเร็จ) แต่ผู้ใช้รอได้สูงสุด 800ms
// เกิน 800ms -> เลิกรอ -> ใช้แคชแทน (เขียน timeoutPromise(ms) เอง)
//
// เลือก combinator: Promise.race
// เหตุผล: ต้องการใช้ผลที่ได้ก่อน (สำเร็จหรือ timeout ใดมาก่อน)
function timeoutPromise(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`เกิน ${ms}ms - ใช้แคชแทน`)), ms);
  });
}
async function scenario4() {
  console.log("[Scenario 4] ค้นหา: ฐานข้อมูล vs timeout 800ms");
  try {
    const result = await Promise.race([
      wait(1200, "ผลค้นหาจากฐานข้อมูล"),
      timeoutPromise(800),
    ]);
    console.log(`  ✓ ${result}\n`);
  } catch (error) {
    console.log(`  ✗ ${error.message}\n`);
  }
}

async function main() {
  await scenario1();
  await scenario2();
  await scenario3();
  await scenario4();
}

main();
