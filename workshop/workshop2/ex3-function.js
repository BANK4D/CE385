const students = [
  { id: 'S001', name: 'มิ้นท์', major: 'CE', score: 78 },
  { id: 'S002', name: 'ปัน', major: 'IT', score: 65 },
  { id: 'S003', name: 'โฟกัส', major: 'CE', score: 42 },
  { id: 'S004', name: 'พลอย', major: 'IT', score: 91 },
  { id: 'S005', name: 'ต้นน้ำ', major: 'CE', score: 55 },
  { id: 'S006', name: 'ฟ้าใส', major: 'IT', score: 33 },
];

// แปลงคะแนนเป็นเกรด (เกณฑ์เดียวกับ ex1-functions.js)
// หมายเหตุ: ไฟล์นี้รันแยกเป็นสคริปต์ของตัวเอง เลยต้องมีฟังก์ชันนี้ซ้ำไว้ในตัว
// (ถ้าอยากใช้ร่วมกันจริง ๆ ค่อยย้ายไปรวมกันตอนทำ ex5-module ทีหลัง)
const toGrade = (score) => {
  if (score >= 80) return 'A';
  if (score >= 75) return 'B+';
  if (score >= 70) return 'B';
  if (score >= 65) return 'C+';
  if (score >= 60) return 'C';
  if (score >= 55) return 'D+';
  if (score >= 50) return 'D';
  return 'F';
};


// ส่วนที่ 1: ฟังก์ชันสรุปข้อมูล 

// คืน array ของชื่อทุกคน
const getNames = (studentList) => studentList.map((student) => student.name);

// คืน array ของคนที่สอบผ่าน (คะแนน >= 50)
const getPassedStudents = (studentList) => studentList.filter((student) => student.score >= 50);

// คืนผลรวมคะแนนทั้งหมด
const getTotalScore = (studentList) =>
  studentList.reduce((sum, student) => sum + student.score, 0);

// คืนคะแนนเฉลี่ย ทศนิยม 2 ตำแหน่ง — array ว่างต้องคืน 0 ไม่ใช่ NaN
const getAverageScore = (studentList) => {
  if (studentList.length === 0) return 0;
  const average = getTotalScore(studentList) / studentList.length;
  return Math.round(average * 100) / 100;
};

// นับจำนวนนักศึกษาแยกตามเกรด เช่น { A: 2, B: 1, F: 1 }
const countByGrade = (studentList) =>
  studentList.reduce((counts, student) => {
    const grade = toGrade(student.score);
    return { ...counts, [grade]: (counts[grade] ?? 0) + 1 };
  }, {});

// คืนนักศึกษาที่คะแนนสูงสุด (ใช้ reduce, คืน null ถ้า array ว่าง — ไม่ error)
const getTopStudent = (studentList) =>
  studentList.reduce(
    (top, student) => (top === null || student.score > top.score ? student : top),
    null
  );


// ส่วนที่ 2: ท่อข้อมูลต่อกัน (filter -> map -> reduce) บรรทัดเดียว

// หาคะแนนเฉลี่ยของนักศึกษาสาขา CE ที่สอบผ่านเท่านั้น


const averageScoreOfPassedCE = students
  .filter((student) => student.major === 'CE' && student.score >= 50)
  .map((student) => student.score)
  .reduce((sum, score, _index, arr) => sum + score / arr.length, 0);

console.log('คะแนนเฉลี่ยของนักศึกษา CE ที่สอบผ่าน:', averageScoreOfPassedCE);



// ส่วนที่ 3: ทดสอบกรณีขอบด้วย array ว่าง []

const emptyList = [];
console.log('getNames([]):', getNames(emptyList));
console.log('getPassedStudents([]):', getPassedStudents(emptyList));
console.log('getTotalScore([]):', getTotalScore(emptyList));
console.log('getAverageScore([]):', getAverageScore(emptyList)); // ต้องได้ 0 ไม่ใช่ NaN
console.log('countByGrade([]):', countByGrade(emptyList)); // {}
console.log('getTopStudent([]):', getTopStudent(emptyList)); // null ไม่ error

console.log('array เดิมยังยาว 6 คนเท่าเดิม:', students.length === 6); // พิสูจน์ว่าไม่ได้แก้ของเดิม