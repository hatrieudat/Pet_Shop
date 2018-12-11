// JavaScript Document
function User(user_name, ten, sdt, gioi_tinh, ngaysinh) {
	this.user_name = user_name;
    this.ten = ten;
    this.sdt = sdt;
    this.gioi_tinh = gioi_tinh;
    this.ngaysinh = ngaysinh;
}

function popup_themsp() {
    document.getElementsByClassName('popup-themsp')[0].style.display = 'block';
}

user = new Array();

user[0] = new User("teoem123","Nguyễn Văn Tèo", "0778093114","Nam", "09/01/1999");
user[1] = new User("kemnghia007","Phan Quốc Nghĩa", "0778093115","Nam", "10/02/1999");
user[2] = new User("duyham2","Đỗ Duy Hàm", "0778093116","Nam", "11/03/1999");
user[3] = new User("ngoc","Trần Thế Ngọc", "0778093117","Nữ", "12/04/1999");
user[4] = new User("anhsang1","Trương Ngọc Ánh", "0778093118","Nữ", "13/05/1999");
user[5] = new User("vubao9","Phạm Vũ Bảo", "0778093119","Nam", "14/06/1999");
user[6] = new User("baotran03","Hà Bảo Trân", "0778093120","Nữ", "15/07/1999");
user[7] = new User("nguyenhue","Nguyễn Quang Trung", "0778093121","Nam", "16/08/1999");
user[8] = new User("chienthang10","Lê Quốc Thắng", "0778093122","Nam", "17/09/1999");
user[9] = new User("giabao1999","Nguyễn Trương Gia Bảo", "0778093123","Nam", "18/10/1999");
user[10] = new User("quochuong33","Nguyễn Quốc Hương", "0778093124","Nam", "19/11/1999");

function load_quan_ly_user() {
    for (var i = 0; i < user.length; i++) {
        document.getElementById('table-user').innerHTML += '\
                    <tr>\
                        <td>' + (i + 1) + '</td>\
						<td>' + user[i].user_name + '</td>\
                        <td>' + user[i].ten + '</td>\
						<td>' + user[i].gioi_tinh + '</td>\
						<td>' + user[i].ngaysinh + '</td>\
                        <td>' + user[i].sdt + '</td>\
                        <td>\
                            <button class="xoa_sp">Xóa</button><br>\
                            <button class="sua_sp">Sửa</button>\
                        </td>\
                    </tr>';
    }
}

function xoa_sp_i(e, i) {
    e.addEventListener('click', function(e) {
        if (confirm('Xác nhận xoá')) {
            document.querySelectorAll('tbody tr')[i].style.display = 'none';
        }
    });
}

function them_mot_user() {
    var input = document.querySelectorAll('.popup-themsp__content .them-user');
    var tr = document.querySelectorAll('tbody tr');
    document.getElementById('table-user').innerHTML += '\
                <tr class="sua_thanh_cong">\
                    <td>' + (tr.length + 1) + '</td>\
                    <td>' + input[0].value + '</td>\
                    <td>' + input[1].value + '</td>\
                    <td>' + input[2].value + '</td>\
                    <td>' + input[3].value + '</td>\
                    <td>' + input[4].value + '</td>\
                    <td>' + input[5].value + '</td>\
                    <td>\
                        <button class="xoa_sp">Xóa</button><br>\
                        <button class="sua_sp">Sửa</button>\
                    </td>\
                </tr>';

    document.getElementsByClassName('back')[0].click();
    document.documentElement.scrollTop = '10000';
}

function xoa_user() {
    var xoa_sp = document.getElementsByClassName('xoa_sp');
    var sua_sp = document.getElementsByClassName('sua_sp');
    for (var i = 0; i < xoa_sp.length; i++) {
        xoa_user_i(xoa_sp[i], i);
        them_thong_tin_sua_user(sua_sp[i], i);
    }
};

function them_thong_tin_sua_user(e, i) {
    var sua_user = document.getElementsByClassName('sua-user');
    var thong_tin = document.querySelectorAll('tbody tr td');
    e.addEventListener('click', function() {
        document.getElementsByClassName('popup-themsp')[1].style.display = 'block';
        sua_user[0].value = thong_tin[i * 8 + 0].innerHTML;
        sua_user[1].value = thong_tin[i * 8 + 1].innerHTML;
        sua_user[2].value = thong_tin[i * 8 + 2].innerHTML;
        sua_user[3].value = thong_tin[i * 8 + 3].innerHTML;
        sua_user[4].value = thong_tin[i * 8 + 4].innerHTML;
        sua_user[5].value = thong_tin[i * 8 + 5].innerHTML;
    });
}

function sua_thong_tin_user() {
    var thong_tin = document.querySelectorAll('tbody tr td');
    var hang = document.querySelectorAll('tbody tr');
    var input = document.querySelectorAll('.popup-themsp__content .sua-user');
    var i = input[0].value - 1;
    thong_tin[(i) * 8 + 1].innerHTML = input[1].value;
    thong_tin[(i) * 8 + 2].innerHTML = input[2].value;
    thong_tin[(i) * 8 + 3].innerHTML = input[3].value;
    thong_tin[(i) * 8 + 4].innerHTML = input[4].value;
    thong_tin[(i) * 8 + 5].innerHTML = input[5].value;
    thong_tin[(i) * 8 + 6].innerHTML = input[6].value;
    document.getElementsByClassName('back')[0].click();
    hang[i].className = "sua_thanh_cong";
    setTimeout(() => hang[i].className = "", 2000);
}
// Xoá sp thứ i
function xoa_user_i(e, i) {
    e.addEventListener('click', function(e) {
        if (confirm('Xác nhận xoá')) {
            document.querySelectorAll('tbody tr')[i].style.display = 'none';
        }
    });
}
