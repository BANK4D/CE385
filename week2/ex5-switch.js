// ex5-switch.js
// แบบฝึกหัด: ระบบสั่งอาหาร โดยใช้ switch, break, default

// ฟังก์ชันคำนวณราคาอาหารจากเมนูที่เลือก
function getMenuPrice(menuCode) {
  let price;
  let menuName;

  switch (menuCode) {
    case "A1":
      menuName = "ข้าวผัดกุ้ง";
      price = 60;
      break; // break ป้องกันไม่ให้ไหลไปทำ case ถัดไป (fall-through)
    case "A2":
      menuName = "ผัดไทย";
      price = 55;
      break;
    case "A3":
      menuName = "ต้มยำกุ้ง";
      price = 80;
      break;
    case "A4":
      menuName = "ส้มตำ";
      price = 45;
      break;
    default:
      // default ทำงานเมื่อไม่ตรงกับ case ใดเลย
      menuName = "ไม่พบเมนูนี้";
      price = 0;
      break;
  }

  return { menuName, price };
}

// จำลองออเดอร์ของลูกค้า
const orders = ["A1", "A3", "A2", "B9"];
let total = 0;

for (const code of orders) {
  const result = getMenuPrice(code);
  console.log(`รหัส ${code}: ${result.menuName} ราคา ${result.price} บาท`);
  total = total + result.price;
}

console.log(`ยอดรวมทั้งหมด: ${total} บาท`);

// ตัวอย่าง switch แบบ group case (หลาย case ทำงานร่วมกันโดยไม่มี break คั่น)
function getMealType(menuCode) {
  let mealType;

  switch (menuCode) {
    case "A1":
    case "A2":
      mealType = "อาหารจานเดียว";
      break;
    case "A3":
    case "A4":
      mealType = "อาหารทานเล่น/ยำ";
      break;
    default:
      mealType = "ไม่ระบุประเภท";
      break;
  }

  return mealType;
}

console.log(`A1 เป็นประเภท: ${getMealType("A1")}`);
console.log(`A4 เป็นประเภท: ${getMealType("A4")}`);