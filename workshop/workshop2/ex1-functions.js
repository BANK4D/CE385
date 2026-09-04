const GRADE_RULES = [
  { min: 80, grade: 'A' },
  { min: 75, grade: 'B+' },
  { min: 70, grade: 'B' },
  { min: 65, grade: 'C+' },
  { min: 60, grade: 'C' },
  { min: 55, grade: 'D+' },
  { min: 50, grade: 'D' },
  { min: 0, grade: 'F' },
];

// รับคะแนน คืน true/false — ต้องเป็นตัวเลข และอยู่ในช่วง 0-100 เท่านั้น
const isValidScore = (score) =>
  typeof score === 'number' && !Number.isNaN(score) && score >= 0 && score <= 100;

// แปลงคะแนนเป็นเกรด (เรียก isValidScore ตรงก่อนตัดเกรดเสมอ ตามกติกา)
const toGrade = (score) => {
  if (!isValidScore(score)) {
    throw new Error(`toGrade: คะแนนไม่ถูกต้อง (${score}) ต้องเป็นตัวเลข 0-100`);
  }
  const matchedRule = GRADE_RULES.find((rule) => score >= rule.min);
  return matchedRule.grade;
};

// แปลงคะแนนดิบของ workshop เป็นคะแนนเต็มตามน้ำหนักที่กำหนด: (raw ÷ full) × weight
const calculateWorkshopScore = (raw, full = 60, weight = 20) => (raw / full) * weight;

// รวมคะแนน 5 ก้อนเป็นคะแนนรวม
const calculateTotal = (workshop, attendance, project, midterm, final) =>
  workshop + attendance + project + midterm + final;

//ทดสอบด้วยข้อมูลนักศึกษา 3 คน

const students = [
  { name: 'มิ้นท์', workshop: 48, attendance: 9, project: 18, midterm: 14, final: 15 },
  { name: 'ปัน', workshop: 55, attendance: 10, project: 15, midterm: 10, final: 18 },
  { name: 'โฟกัส', workshop: 30, attendance: 6, project: 12, midterm: 9, final: 10 },
];

const studentResults = students.map((student) => {
  const workshopScore = calculateWorkshopScore(student.workshop);
  const total = calculateTotal(
    workshopScore,
    student.attendance,
    student.project,
    student.midterm,
    student.final
  );
  return {
    ชื่อ: student.name,
    คะแนนWorkshop: workshopScore,
    คะแนนรวม: total,
    เกรด: toGrade(total),
  };
});

console.table(studentResults); // ส่วนแสดงผลท้ายไฟล์ — ยกเว้นให้ใช้ console ได้


// ส่วนที่ 3: พิสูจน์ว่า default parameter ทำงานถูกต้อง

const scoreA = calculateWorkshopScore(48); // ไม่ใส่ full, weight -> ใช้ default 60, 20
const scoreB = calculateWorkshopScore(48, 60, 20); // ใส่ค่าตรงกับ default เป๊ะ
console.log('scoreA === scoreB:', scoreA === scoreB); // true เพราะค่าที่ใช้จริงเหมือนกัน

const scoreC = calculateWorkshopScore(48, undefined, 25);
console.log('scoreC:', scoreC);
// อธิบายผล scoreC:
// การส่ง `undefined` เข้าไปตรง ๆ ในตำแหน่ง full มีผลเหมือน "ไม่ได้ส่งอะไรมาเลย"
// เพราะ default parameter ของ JS จะทำงานก็ต่อเมื่อ argument ที่ได้รับคือ undefined
// เท่านั้น (ไม่ใช่ null หรือ 0 ซึ่งจะไม่ trigger default)
// ดังนั้น full จึงกลายเป็นค่า default คือ 60 ส่วน weight ถูกกำหนดเป็น 25 ตามที่ส่งมา
// -> scoreC = (48 ÷ 60) × 25 = 20
