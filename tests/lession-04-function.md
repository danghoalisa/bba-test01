# Nội dung buổi học lession 04
## JavaScript:
### # Function trong JavaScript
## 1. Function là gì?
**Function (Hàm)** là một khối lệnh được đặt tên và có thể gọi lại nhiều
lần mà không cần viết lại code.
function chaoMung() {
  console.log("===========================");
  console.log("Xin chào! Chào mừng bạn đến với HocTest.com");
  console.log("===========================");
}

chaoMung();
chaoMung();
chaoMung();
## 2. Cách khai báo Function

Cú pháp cơ bản:
function tenHam() {
// các dòng lệnh bên trong
}
function — từ khoá bắt buộc
tenHam — tên do bạn đặt
{} — thân hàm, chứa code sẽ thực thi
### Quy tắc đặt tên hàm
Nên dùng camelCase:
-   tinhTong
-   layDuLieu
-   hienThiSanPham
Tên hàm nên diễn tả hành động.
## 3. Gọi hàm — Function thực thi

Khai báo ≠ Thực thi
// Khai báo — chỉ "ghi công thức", chưa có gì xảy ra
function demNguocPhongTen() {
console.log("3...");
console.log("2...");
console.log("1...");
console.log("🚀 Phóng!");
}
// Gọi hàm — code bên trong MỚI chạy
demNguocPhongTen();

Kết quả:
3...
2...
1...

## 4. Function với tham số
// tham số ↓
function chao(ten) {
console.log("Xin chào " + ten + "!");
}
chao("Lan"); // "Xin chào Lan!"
chao("Minh"); // "Xin chào Minh!"
chao("Hoa"); // "Xin chào Hoa!"
### Parameter vs Argument
// parameter (tham số) — biến giữ chỗ khi khai báo
function chao(ten) {
console.log("Xin chào " + ten + "!");
}
// argument (đối số) — giá trị thật khi gọi
chao("Lan");

Parameter (tham số): Tên biến đặt trong () khi khai báo → ten
Argument (đối số): Giá trị truyền vào () khi gọi → "Lan"
### Nhiều tham số
function tinhTong(a, b) {
  console.log(a + b);
}

tinhTong(3, 5);
tinhTong(10, 20);
## 5. Function có giá trị trả về: return

Ngoài việc làm gì đó (in ra console), hàm còn có thể trả về kết quả để dùng tiếp.
Không có return — chỉ "làm"

function inTong(a, b) {
console.log(a + b); // in ra, nhưng không trả về
}
let ketQua = inTong(3, 5); // in 8
console.log(ketQua); // undefined — vì hàm không return

Có return — "làm" xong "trả kết quả"

function tinhTong(a, b) {
return a + b; // trả kết quả về cho nơi gọi
}
let ketQua = tinhTong(3, 5);
console.log(ketQua); // 8

// Dùng trực tiếp trong biểu thức
console.log(tinhTong(10, 20) * 2); // 60

Cách nhớ: return giống như giao hàng — hàm xử lý xong thì gửi kết quả về cho người gọi.

return dừng hàm ngay lập tức

function kiemTraTuoi(tuoi) {
if (tuoi < 0) {
return "Tuổi không hợp lệ"; // dừng hàm tại đây
}
return "Tuổi của bạn là " + tuoi;
}
console.log(kiemTraTuoi(-5)); // "Tuổi không hợp lệ"
console.log(kiemTraTuoi(20)); // "Tuổi của bạn là 20"

## 6. Ví dụ thực tế

### Tính diện tích hình chữ nhật
### Kiểm tra đỗ / trượt
## 7. Tổng kết nhanh

  Khái niệm     Cú pháp                 Ý nghĩa
  ------------- ----------------------- --------------
  Khai báo      `function tenHam(){...}`   Tạo hàm, chưa chạy
  Gọi hàm       `tenHam()`                 Chạy code bên trong
  Tham số       `function f(a,b){...}`     "Nguyên liệu" truyền vào
  Trả kết quả   `return giaTriTraVe`        Gửi kết quả về nơi gọi