// กำหนดคะแนนที่ใช้ในการคำนวณ
const workshopRaw = 48;
const attendance = 9;
const project = 17;
const midterm = 15;
const final = 24;

// กำหนดคะแนนเต็มและค่าคงที่สำหรับการคำนวณ
const workshopFullScore = 60;
const workshopWeight = 20;
const totalScore = 100;
const targetScore = 80;

// สูตรแปลงคะแนน Workshop จากคะแนนเต็ม 60 ให้เป็นคะแนนเต็ม 20
// นำคะแนนที่ได้หารด้วยคะแนนเต็ม แล้วคูณด้วยคะแนนเต็มของสัดส่วน
const workshopScore = (workshopRaw / workshopFullScore) * workshopWeight;

// สูตรหาคะแนนรวม คือ นำคะแนนทุกส่วนมาบวกกัน
const sumScore = workshopScore + attendance + project + midterm + final;

// สูตรหาเปอร์เซ็นต์ คือ คะแนนรวม หารด้วยคะแนนเต็ม แล้วคูณ 100
const percentage = (sumScore / totalScore) * 100;

// สูตรหาคะแนนที่ขาดจากเป้าหมาย 80 คะแนน
const difference = targetScore - sumScore;

// แสดงผลด้วย Template Literal
console.log(`===== สรุปคะแนน CE385 =====
Workshop       : ${workshopScore.toFixed(2)} / 20
Attendance      : ${attendance} / 10
Project         : ${project} / 20
Midterm         : ${midterm} / 20
Final           : ${final} / 30
คะแนนรวม        : ${sumScore.toFixed(2)} / 100
เปอร์เซ็นต์      : ${percentage.toFixed(2)}%
เป้าหมาย 80 คะแนน : ${difference > 0
  ? `ขาดอีก ${difference.toFixed(2)} คะแนน`
  : `เกินเป้าหมาย ${Math.abs(difference).toFixed(2)} คะแนน`
}`);