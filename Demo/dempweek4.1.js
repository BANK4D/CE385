const STUDENTS = [
    { id : "6501", name: "สมชาย",  score: 78 },
];

function fetchStudentById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const student = STUDENTS.find((s) => s.id === id);
      if (student) resolve(student);
      else reject(new Error(`ไม่พบรหัสนักศึกษา ${id}`));
    }, 400);
  });
}
fetchStudentById("6501")
  .then((student) => {
    console.log("สำเร็จ  :", student.name, "คะแนน", student.score);
  })
  .catch((error) => {
    console.log("ล้มเหลว:", error.message);   // ไม่ว่าโซ่จะพังตรงไหน มาเจอกันที่นี่
  })
  .finally(() => {
    console.log("finally : ทำงานเสมอ — ปิดการเชื่อมต่อ/ซ่อนตัวโหลดหมุน");
  }); 