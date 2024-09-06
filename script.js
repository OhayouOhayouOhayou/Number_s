function countDuplicates(digits) {
    var numbers = []; // เก็บเลขทั้งหมดที่ป้อนเข้ามา
    var duplicateNumbers = []; // เก็บเลขที่ซ้ำกัน
    var uniqueNumbers = []; // เก็บเลขที่ไม่ซ้ำกัน

// วนลูปเพื่อดึงข้อมูลจาก textboxes ในเลขชุดแต่ละกลุ่ม
for (var i = 1; i <= 10; i++) {
    var textareaValue = document.getElementById("txtnumber" + i).value.trim();
    // แยกตัวเลขออกมาและเพิ่มลงในอาร์เรย์ numbers
    var nums = textareaValue.split(/\s+/);
    for (var j = 0; j < nums.length; j++) {
        var num = parseInt(nums[j]);
        
        var numLength = num.toString().length;
        if (nums[j][0] === '0') {
            numLength = digits;
        }
        if (!isNaN(num) && numLength === digits) { // ตรวจสอบว่าเป็นตัวเลขและมีจำนวนหลักตามที่กำหนด
            numbers.push(num);
        }
    }
}


 // ตรวจสอบว่าตัวเลขไม่ซ้ำกันหรือไม่
for (var k = 0; k < numbers.length; k++) {
    var currentNumber = numbers[k];
    if (numbers.indexOf(currentNumber) !== numbers.lastIndexOf(currentNumber)) {
        if (duplicateNumbers.indexOf(currentNumber) === -1) {
            duplicateNumbers.push(currentNumber);
        }
    } else {
        if (currentNumber !== 0 && uniqueNumbers.indexOf(currentNumber) === -1) {
            uniqueNumbers.push(currentNumber);
        }
    }
}


// แสดงผลลัพธ์ใน div ที่มี id เป็น result

var resultDiv = document.getElementById("result");
resultDiv.innerHTML = "<h2>สรุปผลการชุมนุมเลข</h2><br><strong>ชน "+ digits +" :</strong> " + formatNumbers(duplicateNumbers, digits) + "<br>" +
                      "<strong>ไม่ชน :</strong> " + formatNumbers(uniqueNumbers, digits) + (uniqueNumbers.includes(0) ? ", 000000" : "");



}

// ฟังก์ชันสำหรับเติมเลข 0 ข้างหน้าจนครบจำนวนหลัก
function padNumber(number, digits) {
    return number.toString().padStart(digits, '0');
}

// ฟังก์ชันสำหรับรวมตัวเลขและเติมเลข 0 ข้างหน้าจนครบจำนวนหลัก
function formatNumbers(numbersArray, digits) {
    var formattedNumbers = numbersArray.map(function(number) {
        return padNumber(number, digits);
    });
    return formattedNumbers.join(", ");
}