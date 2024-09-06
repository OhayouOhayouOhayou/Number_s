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
            if (!isNaN(num) && num.toString().length === digits) { // ตรวจสอบว่าเป็นตัวเลขและมีจำนวนหลักตามที่กำหนด
                numbers.push(num);
            }
        }
    }

    // ตรวจสอบว่าตัวเลขซ้ำกันหรือไม่
    for (var k = 0; k < numbers.length; k++) {
        var currentNumber = numbers[k];
        if (numbers.indexOf(currentNumber) !== numbers.lastIndexOf(currentNumber)) {
            if (duplicateNumbers.indexOf(currentNumber) === -1) {
                duplicateNumbers.push(currentNumber);
            }
        } else {
            if (uniqueNumbers.indexOf(currentNumber) === -1) {
                uniqueNumbers.push(currentNumber);
            }
        }
    }

    // แสดงผลลัพธ์ใน div ที่มี id เป็น result
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h2>สรุปผลการชุมนุมเลข</h2><br><strong>ชน "+ digits +" :</strong> " + duplicateNumbers.join(", ") + "<br>" +
                        "<strong>ไม่ชน :</strong> " + uniqueNumbers.join(", ");
}