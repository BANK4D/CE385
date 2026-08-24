// ex6-login.js
// แบบฝึกหัด: ระบบตรวจสอบสิทธิ์ โดยใช้ &&, ||, ===

// ข้อมูลผู้ใช้จำลอง (เก็บใน object)
const registeredUser = {
  username: "student01",
  password: "1234abcd",
  role: "student",
  isActive: true,
};

// ฟังก์ชันตรวจสอบการ login
function login(username, password) {
  // ใช้ === เปรียบเทียบค่าแบบเข้มงวด (strict equality) ทั้ง username และ password
  const isUsernameCorrect = username === registeredUser.username;
  const isPasswordCorrect = password === registeredUser.password;

  // ใช้ && (AND) : ต้องถูกต้อง "ทุกเงื่อนไข" ถึงจะ login ผ่าน
  if (isUsernameCorrect && isPasswordCorrect && registeredUser.isActive) {
    return "เข้าสู่ระบบสำเร็จ ✅";
  }

  // ใช้ || (OR) : ถ้าเงื่อนไขใดเงื่อนไขหนึ่งผิด ให้บอกสาเหตุ
  if (!isUsernameCorrect || !isPasswordCorrect) {
    return "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง ❌";
  }

  if (!registeredUser.isActive) {
    return "บัญชีนี้ถูกระงับการใช้งาน ❌";
  }

  return "ไม่สามารถเข้าสู่ระบบได้ ❌";
}

// ทดสอบ login หลายกรณี
console.log(login("student01", "1234abcd")); // ถูกทั้งคู่ -> สำเร็จ
console.log(login("student01", "wrongpass")); // รหัสผ่านผิด
console.log(login("wronguser", "1234abcd")); // username ผิด

// ฟังก์ชันตรวจสอบสิทธิ์การเข้าถึงหน้า admin
function canAccessAdminPage(role, isActive) {
  // ต้องเป็น role "admin" (===) และบัญชีต้อง active (&&) เท่านั้น
  const hasAccess = role === "admin" && isActive === true;
  return hasAccess;
}

console.log(`admin ที่ active เข้าหน้า admin ได้ไหม: ${canAccessAdminPage("admin", true)}`);
console.log(`student เข้าหน้า admin ได้ไหม: ${canAccessAdminPage("student", true)}`);
console.log(`admin ที่ถูกระงับเข้าหน้า admin ได้ไหม: ${canAccessAdminPage("admin", false)}`);

// ตัวอย่างการใช้ || เพื่อกำหนดค่า default (ถ้าค่าที่ได้ไม่มี/ว่างเปล่า)
function getDisplayRole(role) {
  // ถ้า role เป็นค่าว่างหรือ falsy จะใช้ "guest" แทน
  return role || "guest";
}

console.log(`role: ${getDisplayRole("")}`);
console.log(`role: ${getDisplayRole("student")}`);