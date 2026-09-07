//ฐานข้อมูล จําลอง :ตอบช้่า 400ms เหมือนงาน I/o จริง
const students = [
 { id : "6501", name: "สมชาย",  score: 78 },
 { id : "6502", name: "สมหญิง", score: 91 },
];

function findStudentById(id, callback) {setTimeout(() => {
    const student = students.find((s) => s.id === id);
    callback(student);
}, 400); //งานเสร็จค่อยเรียก "โทรกลับ"
}

findStudentById("6501", (student) => {
    console.log("ได้ข้อมูล:", student.name);
});
console.log("บรรทัดนี้พิมพ์ก่อนได้ข้อมูล!"); 
// ระบบไม่เคยหยุดรอ  