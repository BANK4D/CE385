// 1) Function Declaration -ประกาศเเบบตั้งชื่อ
function add(a, b) {
    return a + b;
}   
// 2) Function Expression -เก็บฟังก์ชันไว้ในตัวแปร
const subtract = function(a, b) {
    return a - b;
}   
// 3) Arrow Function -ฟังก์ชันลูกศร รูปเเบบสั้น ใช้บ่อยที่สุดในโค้ดสมัยใหม่
const multiply = (a, b) => a * b;

console.log("add(10, 3)      =", add(10, 3));
console.log("subtract(10, 3) =", subtract(10, 3));
console.log("multiply(10, 3) =", multiply(10, 3));


function createStudent(name,year=1,isActive=true) {
    return {name, year, isActive}; // ชื่อ property ตรงกับชื่อตัวเเปร เขียนย่อได้
}
console.log(" ไม่ส่ง year =", createStudent("สมชาย"));
console.log(" ส่งครบ =", createStudent("สมหญิง", 3 , false)); 
console.log(" ส่ง underfined =", createStudent("มานี",undefined,false));  
console.log("ส่ง null =",createStudent("ปิติ",null,)," <-- ค่าเริ่มต้นไม่ทํางาน");
console.log("ส่ง 0 =",createStudent("ชูใจ",0,)," <-- 0 ก็ถือว่าส่งค่ามาเเเล้ว");

// --- Rest Parameter:รับพารามิเตอร์ท่เหลือทั้งหมดเป็น array
function sumAll(...numbers) {
    return numbers.reduce((total,n) => total+n,0); 
}

console.log("\nsumAll(10,20,30) =", sumAll(10,20,30));
console.log("sumAll() =", sumAll(), "<-- ค่าเริ่มต้น 0 ทําให้้ไม่ error");


//rest ต้องอยู่ท้ายสุดของพารามิเตอร์เสมอ
function formatScores(studentName, ...scores) {
    return `${studentName}: ${scores.join(", ")}`;
}console.log(formatScores("สมชาย", 78, 91, 45));



//รับคํา "ที่เหลือ" เป็น rest เเล้วส่งต่อเป็น argument
function greetAll(greeting, ...names) {
    return names.map(name => `${greeting} ${name}`).join("\n");
}
console.log("\n" + greetAll("สวัสดี", "สมชาย", "สมหญิง", "มานี"));

const students = [
  { id: "6501", name: "สมชาย",  score: 78, major: "CE" },
  { id: "6502", name: "สมหญิง", score: 91, major: "CE" },
  { id: "6503", name: "มานี",   score: 45, major: "IT" },
  { id: "6504", name: "ปิติ",   score: 66, major: "IT" },
];

console.log("จำนวนนักศึกษา   =", students.length);
console.log("คนแรก          =", students[0].name);
console.log("คนสุดท้าย at(-1) =", students.at(-1).name);
console.log("ที่ไม่มีอยู่ [99]  =", students[99], " <-- undefined ไม่ error");

// find — คืนตัวแรกที่ตรงเงื่อนไข หรือ undefined
console.log("\nfind id=6503   =", students.find((s) => s.id === "6503"));
console.log("find id=9999   =", students.find((s) => s.id === "9999"), " <-- ต้องเผื่อกรณีนี้เสมอ");

// findIndex — คืนตำแหน่ง หรือ -1
console.log("findIndex 6502 =", students.findIndex((s) => s.id === "6502"));
console.log("findIndex 9999 =", students.findIndex((s) => s.id === "9999"));

// some / every — คืน true/false
console.log("\nมีคนสอบตกไหม     =", students.some((s) => s.score < 50));
console.log("ผ่านหมดทุกคนไหม  =", students.every((s) => s.score >= 50));

const course = {
  code: "CE385",
  instructor: { name: "สนายุ", email: "sanayu.jin@dpu.ac.th" },
  schedule: { day: "จันทร์", room: "5-701" },
};

console.log("course.code             =", course.code);
console.log("course.instructor.email =", course.instructor.email);
console.log("course.assistant        =", course.assistant, " <-- undefined ยังไม่ error");

try {
  console.log(course.assistant.name);           // เข้าถึงต่อจาก undefined
} catch (error) {
  console.log("course.assistant.name   =", error.name + ": " + error.message);
}

// Optional chaining กันพัง
console.log("\ncourse.assistant?.name  =", course.assistant?.name, " <-- ไม่ error");
console.log('?. กับ ?? ใช้คู่กัน       =', course.assistant?.name ?? "ยังไม่มีผู้ช่วยสอน");

// ความต่างของ ?? กับ || — สำคัญมากเมื่อค่าที่ถูกต้องคือ 0 หรือ ""
const settings = { retryCount: 0, prefix: "" };
console.log("\nretryCount ?? 3 =", settings.retryCount ?? 3, " <-- ถูก: 0 เป็นค่าที่ตั้งใจ");
console.log("retryCount || 3 =", settings.retryCount || 3, " <-- ผิด: 0 เป็น falsy เลยถูกแทนที่");
console.log('prefix ?? "CE"  =', JSON.stringify(settings.prefix ?? "CE"));
console.log('prefix || "CE"  =', JSON.stringify(settings.prefix || "CE"), " <-- ผิดเช่นกัน");


//map 
const studentsForMap = [
  { id: "6501", name: "สมชาย",  score: 78 },
  { id: "6502", name: "สมหญิง", score: 91 },
  { id: "6503", name: "มานี",   score: 45 },
  { id: "6504", name: "ปิติ",   score: 66 },
];

function toGrade(score) {
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  return "F";
}

const scores = [78, 91, 45, 66];
const grades = scores.map((score) => toGrade(score));
console.log("scores  =", scores);
console.log("grades  =", grades);
console.log("ต้นฉบับ  =", scores, " <-- map ไม่แก้ต้นฉบับ");

//ใช้กับ array ของ object - รุปเแบบที่เจอบ่อยสุดในงาน backend
const summary = studentsForMap.map((student) => ({
  id: student.id,
  name: student.name,
  grade: toGrade(student.score)
}));
console.log("\nเแปลงเป็นรูปเแบบที่จะส่งออกทางAPI:");
console.log(summary);

//ข้อผิดพลาดที่พบบ่อย :ลืม return ให้ฟังก์ชันที่มีปีกกา
const forgot = scores.map(score => {toGrade(score);});
console.log("\nลืม return =", forgot, " <-- ได้ undefined ทั้งหมด");