// JavaScript Document
function User(user_name, ten, sdt, gioi_tinh, ngaysinh) {
	this.user_name = user_name;
    this.ten = ten;
    this.sdt = sdt;
    this.gioi_tinh = gioi_tinh;
    this.ngaysinh = ngaysinh;
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
                            <button class="xoa_user">Xóa</button><br>\
                            <button class="sua_user">Sửa</button>\
                        </td>\
                    </tr>';
    }
}

function xoa_user() {
    var xoa = document.getElementsByClassName('xoa_user');
    var sua = document.getElementsByClassName('sua_user');
    for (var i = 0; i < xoa.length; i++) {
        xoa_user_i(xoa[i], i);
        them_thong_tin_sua_user(sua[i], i);
    }
};

function them_thong_tin_sua_user(e, i) {
    var sua_user = document.getElementsByClassName('sua-user');
    var thong_tin = document.querySelectorAll('tbody tr td');
	var popup_themuser = document.getElementsByClassName('popup-themuser');
    e.addEventListener('click', function(e) {
        popup_themuser[0].style.display = 'block';
        sua_user[0].value = thong_tin[i * 7 + 0].innerHTML;
        sua_user[1].value = thong_tin[i * 7 + 1].innerHTML;
        sua_user[2].value = thong_tin[i * 7 + 2].innerHTML;
        sua_user[3].value = thong_tin[i * 7 + 3].innerHTML;
        sua_user[4].value = thong_tin[i * 7 + 4].innerHTML;
        sua_user[5].value = thong_tin[i * 7 + 5].innerHTML;
    });
}

function sua_thong_tin_user() {
    var thong_tin = document.querySelectorAll('tbody tr td');
    var input = document.querySelectorAll('.popup-themuser__content .sua-user');
    var i = input[0].value - 1;
    thong_tin[(i) * 7 + 1].innerHTML = input[1].value;
    thong_tin[(i) * 7 + 2].innerHTML = input[2].value;
    thong_tin[(i) * 7 + 3].innerHTML = input[3].value;
    thong_tin[(i) * 7 + 4].innerHTML = input[4].value;
    thong_tin[(i) * 7 + 5].innerHTML = input[5].value;
    document.getElementsByClassName('back')[0].click();
}

function xoa_user_i(e, i) {
    e.addEventListener('click', function(e) {
        if (confirm('Xác nhận xoá')) {
			document.querySelectorAll('tbody')[i+1].style.display = "none";
        }
    });
}

function close_popup_themuser() {
    document.getElementsByClassName('popup-themuser')[0].style.display = 'none';
}
