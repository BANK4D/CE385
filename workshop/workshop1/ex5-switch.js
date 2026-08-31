// ส่วนที่ 1: ฟังก์ชันหาราคาอาหารด้วย switch
function getMenuPrice(menu) {
    switch (menu) {
        // เมนูที่มีราคา 50 บาท ใช้ fall-through รวมกัน
        // เมื่อไม่ใส่ break โปรแกรมจะไหลไปทำ case ถัดไปจนถึง return
        case "ข้าวผัด":
        case "ข้าวมันไก่":
        case "ข้าวหมูแดง":
            return 50;

        case "ผัดไทย":
            return 60;

        case "ต้มยำกุ้ง":
            return 120;

        // ถ้าไม่ตรงกับเมนูที่มี จะใช้ราคา 0 บาท
        default:
            return 0;
    }
}


// ส่วนที่ 2: ฟังก์ชันหาตัวคูณขนาดอาหาร
function getSizeMultiplier(size) {
    switch (size) {
        case "ธรรมดา":
            return 1;

        case "พิเศษ":
            return 1.5;

        case "จัมโบ้":
            return 2;

        default:
            return 1;
    }
}


// ส่วนที่ 3: รายการอาหารที่ลูกค้าสั่ง
const orders = [
    { menu: "ผัดไทย", size: "พิเศษ", qty: 2 },
    { menu: "ข้าวผัด", size: "ธรรมดา", qty: 1 },
    { menu: "ต้มยำกุ้ง", size: "จัมโบ้", qty: 1 },
    { menu: "ข้าวมันไก่", size: "พิเศษ", qty: 2 },
    { menu: "พิซซ่า", size: "ธรรมดา", qty: 1 }
];


// คำนวณราคารวมของออร์เดอร์ทั้งหมด
let total = 0;

for (const order of orders) {
    const menuPrice = getMenuPrice(order.menu);
    const sizeMultiplier = getSizeMultiplier(order.size);

    // สูตรราคาแต่ละรายการ = ราคาเมนู × ตัวคูณขนาด × จำนวน
    const itemTotal = menuPrice * sizeMultiplier * order.qty;

    total += itemTotal;

    console.log(
        `${order.menu} (${order.size}) x ${order.qty} = ${itemTotal} บาท`
    );
}


// แสดงราคารวมทั้งหมด
console.log(`ราคารวมทั้งหมด = ${total} บาท`);