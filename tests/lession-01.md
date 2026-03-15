# Nội dung buổi học lession 01
## 1. Playwright là gì?
#### Cross browser
#### Cross platform
### Ưu điểm của Playwright : 
#### auto waiting, auto-retry assertion giúp giảm flaky tests (lúc pass lúc fail)
#### Report đầy đủ thông tin: pass/fail theo từng đoạn trình duyệt, chi tiết ở từng thời điểm
#### Code gen
### 2. Git và Github
#### Cấu hình git:
● Config username (tên người dùng):
○ git config --global user.name “<tên bạn>”
● Config email (địa chỉ email):
○ git config --global user.email “<email của bạn>”
● Config branch default (nhánh mặc định):
○ git config --global init.defaultBranch main
### Kết nối với GitHub 
#### Kết nối Github: SSH Key 
Lệnh tạo SSH Keys:

ssh-keygen -t rsa -b 4096 -C
"your_email@example.com"
### Kết nối SSH: thêm vào GitHub
● Lấy nội dung ssh key: cat
~/.ssh/id_rsa.pub
● Lấy nội dung ssh key: cat
~/.ssh/id_rsa.pub
● Truy cập:
https://github.com/settings/ss
h/new để thêm ssh key
### 3. Cài đặt Playwright
#### Tạo thư muc
#### Mở thư mục bằng VS code
#### Mở terminal lên
#### Chạy lệnh:
#### *npm init playwright@latest*
#### Liên tục gõ "enter" cho tới khi hiển thị "Happy hacking"
### e. Đưa code lên github
#### Khởi tạo repo local
git init

Thêm file vào staging
git add .
Commit file

git commit -m ”<message>”

#### Tạo repo
#### ○ Truy cập:
#### https://github.com/new
#### ○ Điền tên repository
#### ○ Chọn “Public”

Tạo repo GitHub và liên kết tới repo local
git remote add origin <url>

Push code
git push origin main




