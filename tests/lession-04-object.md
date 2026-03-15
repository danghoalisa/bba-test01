# Nội dung buổi học lession 04
## JavaScript:
### 1. Object:
#### Object là gì?
**Object** là kiểu dữ liệu trong JavaScript dùng để lưu trữ nhiều giá
trị dưới dạng **cặp key -- value**.
let sinhVien = {
  hoTen: "Nguyễn Văn A",
  tuoi: 20,
  lop: "WEB01"
};
## 2. Cách khai báo Object
### Cách 1: Object Literal (phổ biến nhất)
let xe = {
  hang: "Toyota",
  mau: "Trắng",
  namSanXuat: 2023
};
### Cách 2: Dùng new Object()
let xe = new Object();
xe.hang = "Toyota";
xe.mau = "Trắng";
xe.namSanXuat = 2023;
### Quy tắc đặt tên key
-   Key thường là **string**
-   Nếu key **không có dấu cách** → không cần dấu `" "`
-   Nếu key **có dấu cách** → phải đặt trong `" "`
let person = {
  "full name": "Nguyen Van A",
  age: 25
};
## 3. Truy xuất dữ liệu trong Object
### Dot notation
#### console.log(sinhVien.hoTen);
#### console.log(sinhVien.tuoi);
### Bracket notation
#### console.log(sinhVien["hoTen"]);
### Khi cần dùng bracket notation
let obj = { "full name": "Lan" };
#### console.log(obj["full name"]);
let keyName = "hoTen";
#### console.log(sinhVien[keyName]);
## 4. Gán giá trị cho Object
### Sửa giá trị
sinhVien.tuoi = 23;
### Thêm thuộc tính
sinhVien.email = "lan@gmail.com";
## 5. Thêm, sửa, xoá thuộc tính
### Thêm
let product = { ten: "Áo thun" };
product.gia = 150000;
product["mauSac"] = "Đen";
### Sửa
product.gia = 180000;
### Xoá
delete product.mauSac;
## 6. Object lồng nhau (Nested Object)
let sinhVien = {
  hoTen: "Minh",
  tuoi: 21,
  diaChi: {
    soNha: "12",
    duong: "Lê Lợi",
    thanhPho: "Hồ Chí Minh"
  }
};
### Truy xuất dữ liệu
#### console.log(sinhVien.diaChi.duong);
#### console.log(sinhVien["diaChi"]["soNha"]);
### Ví dụ dữ liệu từ API
let user = {
  id: 1,
  name: "Leanne Graham",
  address: {
    street: "Kulas Light",
    city: "Gwenborough",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  },
  company: {
    name: "Romaguera-Crona"
  }
};
#### console.log(user.address.city);
#### console.log(user.address.geo.lat);
#### console.log(user.company.name);
## 7. Tổng kết nhanh

  Thao tác     Cú pháp                 Ví dụ
  ------------ ----------------------- ---------------------
  Khai báo     `{}`                    `let obj = { a:1 }`
  Truy xuất    `.key` hoặc `["key"]`   `obj.a`
  Thêm / sửa   `obj.key = value`       `obj.b = 2`
  Xoá          `delete obj.key`        `delete obj.a`
  Lồng nhau     value là Object         `obj.x.y.z`

