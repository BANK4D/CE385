// ex4-grade.js
// แบบฝึกหัด: ตัดเกรดจากคะแนน โดยใช้ if / else if

// ฟังก์ชันตัดเกรดตามคะแนนเต็ม 100
function getGrade(score) {
  let grade;

  if (score >= 80) {
    grade = "A";
  } else if (score >= 75) {
    grade = "B+";
  } else if (score >= 70) {
    grade = "B";
  } else if (score >= 65) {
    grade = "C+";
  } else if (score >= 60) {
    grade = "C";
  } else if (score >= 55) {
    grade = "D+";
  } else if (score >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  return grade;
}

// ทดสอบตัดเกรดกับคะแนนหลาย ๆ ค่า
const testScores = [95, 82, 77, 68, 61, 53, 45];

for (const score of testScores) {
  const grade = getGrade(score);
  console.log(`คะแนน ${score} -> เกรด ${grade}`);
}

// ตัวอย่างการตรวจสอบคะแนนที่ไม่สมเหตุสมผล (นอกช่วง 0-100)
function checkScore(score) {
  if (score < 0 || score > 100) {
    console.log(`คะแนน ${score} ไม่ถูกต้อง (ต้องอยู่ระหว่าง 0-100)`);
  } else {
    console.log(`คะแนน ${score} ถูกต้อง ได้เกรด ${getGrade(score)}`);
  }
}

checkScore(120);
checkScore(-5);
checkScore(88);