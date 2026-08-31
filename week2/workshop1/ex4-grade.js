// ฟังก์ชันสำหรับแปลงคะแนนเป็นเกรด
function toGrade(score) {
    // ตรวจสอบคะแนนผิดช่วงก่อน เพื่อไม่ให้คะแนนติดลบหรือเกิน 100 ถูกจัดเกรด
    if (score < 0 || score > 100) {
        return "คะแนนไม่ถูกต้อง";
    }

    // ต้องตรวจจากคะแนนมากไปน้อย เพราะ if จะหยุดทันทีเมื่อเจอเงื่อนไขที่เป็นจริง
    // เช่น คะแนน 80 ต้องได้ A ก่อนที่จะไปตรวจเงื่อนไข B+ หรือเกรดที่ต่ำกว่า
    else if (score >= 80) {
        return "A";
    }
    else if (score >= 75) {
        return "B+";
    }
    else if (score >= 70) {
        return "B";
    }
    else if (score >= 65) {
        return "C+";
    }
    else if (score >= 60) {
        return "C";
    }
    else if (score >= 55) {
        return "D+";
    }
    else if (score >= 50) {
        return "D";
    }
    else {
        return "F";
    }
}

// คะแนนที่ใช้ทดสอบตามโจทย์
const scores = [95, 80, 79, 75, 70, 65, 60, 55, 50, 49, 0, -5, 120];

// ทดสอบทุกคะแนนด้วย for...of
for (const score of scores) {
    console.log(`คะแนน ${score} => เกรด ${toGrade(score)}`);
}