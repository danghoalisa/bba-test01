# Nội dung buổi học lession 04
## JavaScript:
### # Array trong JavaScript
## 1. Array là gì?
**Array (Mảng)** là kiểu dữ liệu dùng để lưu trữ một danh sách có thứ tự
các giá trị.
let monHoc = ["Toán", "Lý", "Hoá", "Anh", "Tin"];
### → 1 biến duy nhất chứa toàn bộ danh sách, dễ quản lý, dễ duyệt qua.
## 2. Cách khai báo Array
### Cách 1: Array Literal (phổ biến nhất)
let traiCay = ["Táo", "Cam", "Xoài"];
let diemSo = [8, 9, 7.5, 10];
let hocSinh = [];
### Cách 2: Dùng new Array()
let traiCay = new Array("Táo", "Cam", "Xoài");

### → Hợp lệ, nhưng trong thực tế nên giữ các phần tử cùng kiểu để dễ xử lý.

## 3. Truy xuất dữ liệu trong Array
let monHoc = ["Toán", "Lý", "Hoá", "Anh", "Tin"];
console.log(monHoc[0]);
console.log(monHoc[2]);
console.log(monHoc[4]);
console.log(monHoc[5]); // undefined
### Lấy phần tử cuối
let cuoi = monHoc[monHoc.length - 1];
### Đếm số phần tử
console.log(monHoc.length);
## 4. Thêm và xoá phần tử
### Thêm cuối
monHoc.push("Hoá");
### Xoá cuối
monHoc.pop();
### Thêm đầu
monHoc.unshift("Anh");
### Xoá đầu
monHoc.shift();
## 5. Kết hợp Array với vòng lặp
### Vòng lặp for
let diemSo = [8, 6, 9, 7, 10];

for (let i = 0; i < diemSo.length; i++) {
  console.log("Học sinh " + (i + 1) + ": " + diemSo[i]);
}
### Vòng lặp for...of
let traiCay = ["Táo", "Cam", "Xoài"];

for (let qua of traiCay) {
  console.log(qua);
}
### forEach()
let traiCay = ["Táo", "Cam", "Xoài"];

traiCay.forEach(function(qua, viTri) {
  console.log(viTri + ": " + qua);
});

## 6. Ví dụ thực tế

### Tính điểm trung bình
let diemSo = [8, 6, 9, 7, 10, 5, 8];
let tong = 0;
for (let i = 0; i < diemSo.length; i++) {
  tong += diemSo[i];
}
let diemTB = tong / diemSo.length;
console.log(diemTB);

### Lọc học sinh giỏi
let diemSo = [8, 6, 9, 7, 10, 5, 8];
let hocSinhGioi = [];
for (let i = 0; i < diemSo.length; i++) {
  if (diemSo[i] >= 8) {
    hocSinhGioi.push(diemSo[i]);
  }
}
console.log(hocSinhGioi);
## 7. Tổng kết nhanh

  Thao tác      Cú pháp                          Ví dụ
  ------------- -------------------------------- ---------------------
  Khai báo      `[]`                             `let arr = [1,2,3]`
  Truy xuất     `arr[index]`                     `arr[0]`
  Đếm phần tử   `.length`                        `arr.length`
  Thêm cuối     `.push()`                        `arr.push(4)`
  Xoá cuối      `.pop()`                         `arr.pop()`
  Duyệt         `for`, `for...of`, `forEach()`    xem mục 5

