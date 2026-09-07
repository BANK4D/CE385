// ============================================================
// Workshop 3 · ข้อที่ 1 — ระบบตรวจทะเบียน (Error-first Callback)
// ============================================================
//
// เงื่อนไข:
//  - ทุก callback ต้องตรวจ error ก่อนเสมอ
//  - ห้าม export ตัวแปร array ข้อมูลนักศึกษา
//  - ห้ามใช้ var

// ------------------------------------------------------------
// ส่วนที่ 1 — สร้างข้อมูลตั้งต้น: array ของนักศึกษาอย่างน้อย 4 คน
// แต่ละคนต้องมี: id, name, major, score
// ------------------------------------------------------------
const students = [
  { id: "6701", name: "นายซิกเซเว้น", major: "วิศวกรรมคอมพิวเตอร์", score: 85 },
  { id: "6702", name: "นางสาวซิกเอท", major: "วิศวกรรมไฟฟ้า", score: 92 },
  { id: "6703", name: "นายซิกไนน์", major: "วิศวกรรมเครื่องกล", score: 78 },
  { id: "6704", name: "นางสาวซิกเท็น", major: "วิศวกรรมโยธา", score: 88 },
  // TODO: เติมข้อมูลนักศึกษาอย่างน้อย 4 คน
  // { id: '6501', name: '...', major: '...', score: 0 },
];

// ------------------------------------------------------------
// ส่วนที่ 2 — fetchStudentById(id, callback) แบบ error-first
// ------------------------------------------------------------
// เงื่อนไข                | ต้องเรียก
// id ไม่ใช่ string หรือว่าง | callback(new Error('รหัสนักศึกษาไม่ถูกต้อง'))
// ค้นแล้วไม่พบ             | callback(new Error(`ไม่พบรหัสนักศึกษา ${id}`))
// พบ (หลัง setTimeout 300ms) | callback(null, { ...student }) — คืนสำเนาเสมอ
function fetchStudentById(id, callback) {
  if (typeof id !== "string" || id.trim() === "") {
    callback(new Error("รหัสนักศึกษาไม่ถูกต้อง"));
    return;
  }

  setTimeout(() => {
    const student = students.find((item) => item.id === id);

    if (!student) {
      callback(new Error(`ไม่พบรหัสนักศึกษา ${id}`));
      return;
    }

    callback(null, { ...student });
  }, 300);
}

// ------------------------------------------------------------
// ส่วนที่ 3 — เรียกใช้ครบ 3 กรณี 
// ------------------------------------------------------------
// a) id ที่มีจริง
fetchStudentById("6701", (error, student) => {
  if (error) {
    console.error("เกิดข้อผิดพลาด:", error.message);
    return;
  }

  console.log("สำเร็จ:", student.name, "คะแนน", student.score, "สาขา", student.major);
});

// b) id ที่ไม่มี
// TODO: fetchStudentById('....', (error, student) => { ... })
fetchStudentById("6742", (error, student) => {
  if (error) {
    console.error("ไม่พบข้อมูลในระบบ",error.message);
    return;
  }

  console.log("สำเร็จ:", student.name, "คะแนน", student.score, "สาขา", student.major);

});

// c) id ผิดรูปแบบ (เช่น 42 ซึ่งไม่ใช่ string)
fetchStudentById("tama", (error, student) => {
  if (error) {
    console.error("ผิดรูปแบบ", error.message);
    return;
  }

  console.log("สำเร็จ:", student.name, "คะแนน", student.score, "สาขา", student.major);
});

// ------------------------------------------------------------
// ส่วนที่ 4 — ตอบเป็น comment ท้ายไฟล์
// ------------------------------------------------------------
// ① ถ้าลืมตรวจ error แล้วอ่าน .name ทันที จะเกิดอะไร ใครเห็น error นั้น?
// TODO: จะทําให้ type eror userเป็นคนเห็น eror นั้น
//
// ② ทำไมต้อง return หลังเรียก callback(error)?
// TODO: เพราะเป็นการหยุดการทํางานของฟังก์ชันเพิ้อไม่ให้โค้ดส่วนต่่อไปเริ่มทํางาน
