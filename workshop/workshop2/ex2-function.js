const students = [
  { id: 'S001', name: 'มิ้นท์', major: 'CE', score: 78, contact: { email: 'mint@example.com', phone: '080-111-1111' } },
  { id: 'S002', name: 'ปัน', major: 'IT', score: 65, contact: { email: 'pun@example.com', phone: '080-222-2222' } },
  { id: 'S003', name: 'โฟกัส', major: 'CE', score: 42, contact: { email: 'focus@example.com', phone: '080-333-3333' } },
  { id: 'S004', name: 'พลอย', major: 'IT', score: 91, contact: { email: 'ploy@example.com', phone: '080-444-4444' } },
  { id: 'S005', name: 'ต้นน้ำ', major: 'CE', score: 55, contact: { email: 'tonnam@example.com', phone: '080-555-5555' } },
  { id: 'S006', name: 'ฟ้าใส', major: 'IT', score: 33, contact: { email: 'fasai@example.com', phone: '080-666-6666' } },
];

//ส่วนที่ 2: ฟังก์ชันค้นหา 

// คืนนักศึกษาที่ id ตรงกัน หรือ undefined ถ้าไม่พบ
const findById = (studentList, id) => studentList.find((student) => student.id === id);

// คืน array ของนักศึกษาในสาขาที่ระบุ (อาจเป็น array ว่างถ้าไม่มีใครเลย)
const findByMajor = (studentList, major) =>
  studentList.filter((student) => student.major === major);

// คืน true ถ้ามีนักศึกษาอย่างน้อย 1 คนที่คะแนนต่ำกว่า 50
const hasFailingStudent = (studentList) => studentList.some((student) => student.score < 50);

// คืนอีเมลของนักศึกษาตาม id หรือข้อความแจ้งเตือนถ้าไม่พบคนหรือไม่มีข้อมูลติดต่อ
const getEmail = (studentList, id) =>
  findById(studentList, id)?.contact?.email ?? 'ไม่พบข้อมูลติดต่อ';


// ส่วนที่ 3: ทดสอบ


console.log('หา id ที่ไม่มีจริง:', findById(students, '9999')); // undefined แต่ไม่ error
console.log('อีเมลของ id ที่ไม่มีจริง:', getEmail(students, '9999')); // "ไม่พบข้อมูลติดต่อ"

// เพิ่มนักศึกษาใหม่ 1 คนที่ไม่มี contact เลย โดยไม่แตะ array เดิม (ใช้ spread สร้าง array ใหม่)
const newStudent = { id: 'S007', name: 'เอิร์ธ', major: 'CE', score: 60 };
const studentsWithNewOne = [...students, newStudent];

console.log('อีเมลของคนที่ไม่มี contact:', getEmail(studentsWithNewOne, 'S007')); // "ไม่พบข้อมูลติดต่อ"
console.log('array เดิมยังยาว 6 คนเท่าเดิม:', students.length === 6); // true — พิสูจน์ว่าไม่ได้แก้ของเดิม