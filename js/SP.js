function san_pham(masp, tensp, gia, hinh,madv,matl) {
    this.masp = masp;
    this.tensp = tensp;
    this.gia = gia;
    this.hinh = hinh;
	this.madv=madv;
	this.matl=matl;
}
var sp = new Array();

sp[0] = new san_pham("SP0", "Royal spnin - Mini Dermacomfort","192.000đ", "images/sanpham/cho/food/food4.jpg","dog","food");
sp[1] = new san_pham("SP1", "Thức ăn cao cấp NutriSource thịt gà, đậu Hà Lan ","25.000đ", "images/sanpham/cho/food/food5.jpg","dog","food");
sp[2] = new san_pham("SP2", "Thức ăn cao cấp NutriSource thịt gà tươi","25.000đ", "images/sanpham/cho/food/food6.jpg","dog","food");
sp[3] = new san_pham("SP3", "Thịt Meat Jerky Pedigree vị bò xông khói","35.000đ", "images/sanpham/cho/food/food8.jpg","dog","food");
sp[4] = new san_pham("SP4", "Royal spnin - Chihuahua Adult","112.000đ", "images/sanpham/cho/food/food3.jpg","dog","food");
sp[5] = new san_pham("SP5", "Royal spnin - Maxi Adult ","138.000đ", "images/sanpham/cho/food/food6.jpg","dog","food");
sp[6] = new san_pham("SP6", "Royal spnin - Mini Adult","147.000đ", "images/sanpham/cho/food/food7.jpg","dog","food");
sp[7] = new san_pham("SP7", "Sữa bột Esbilac cho chó con","489.000đ", "images/sanpham/cho/food/food13.jpg","dog","food");
sp[8] = new san_pham("SP8", "Viên gặm dẻo Daily Best For Dogs","274.000đ", "images/sanpham/cho/food/food11.jpg","dog","food");
sp[9] = new san_pham("SP9", "Thức ăn khô Royal spnin Mini Puppy","999.000đ", "images/sanpham/cho/food/food1.jpg","dog","food");
sp[10] = new san_pham("SP10", "Pate Smartheart lon vị gà tây cho chó","35.000đ", "images/sanpham/cho/food/food10.jpg","dog","food");
sp[11] = new san_pham("SP11", "Smartheart - Pate vị bò cho chó lớn","18.000đ", "images/sanpham/cho/food/food9.jpg","dog","food");
sp[12] = new san_pham("SP12", "Viên gặm dẻo Daily Best For Dogs","200.000đ", "images/sanpham/cho/food/food12.jpg","dog","food");

sp[13] = new san_pham("SP13", "SY - Áo cho thú cưng các hình size S","155.000đ", "images/sanpham/cho/ao/aocho6.jpg","dog","stuff");
sp[14] = new san_pham("SP14", "Áo bí ngô ","320.000đ", "images/sanpham/cho/ao/aocho3.jpg","dog","stuff");
sp[15] = new san_pham("SP15", "Áo nỉ ngắn tay zigzag","180.000đ", "images/sanpham/cho/ao/aocho7.jpg","dog","stuff");
sp[16] = new san_pham("SP16", "Áo nỉ có tay Gaspard","240.000đ", "images/sanpham/cho/ao/aocho8.jpg","dog","stuff");
sp[17] = new san_pham("SP17", "Áo dear bear","130.000đ", "images/sanpham/cho/ao/aocho4.jpg","dog","stuff");
sp[18] = new san_pham("SP18", "Petstar - áo phao SN lót lông ","177.000đ", "images/sanpham/cho/ao/aocho2.jpg","dog","stuff");
sp[19] = new san_pham("SP19", "LHK - Áo con ếch","82.000đ", "images/sanpham/cho/ao/aocho5.jpg","dog","stuff");
sp[20] = new san_pham("SP20", "Petstar - áo phao","285.000đ", "images/sanpham/cho/ao/aocho1.jpg","dog","stuff");
sp[21] = new san_pham("SP21", "SY - Áo cotton sát nách","100.000đ","images/sanpham/cho/ao/aocho9.jpg","dog","stuff");
sp[22] = new san_pham("SP22", "Petstar - Mũ cho Pet","130.000đ", "images/sanpham/cho/ao/aocho10.jpg","dog","stuff");

sp[23] = new san_pham("SP23", "SS - Vòng cổ kỷ luật","120.000đ", "images/sanpham/cho/vongco/vong1.jpg","dog","stuff");
sp[24] = new san_pham("SP24", "Vòng cổ Ferplast Ergoflex ","312.000đ", "images/sanpham/cho/vongco/vong2.jpg","dog","stuff");
sp[25] = new san_pham("SP25", "Dây dắt Ferplast Ergofluo","575.000đ", "images/sanpham/cho/vongco/vong3.jpg","dog","stuff");
sp[26] = new san_pham("SP26", "Yếm Ferplast Ergofluo ","599.000đ", "images/sanpham/cho/vongco/vong4.jpg","dog","stuff");
sp[27] = new san_pham("SP27", "Vòng cổ da Ferplast Natural","332.000đ", "images/sanpham/cho/vongco/vong5.jpg","dog","stuff");
sp[28] = new san_pham("SP28", "LHK - Dây dắt dù dấu chân","33.000đ","images/sanpham/cho/vongco/vong6.jpg","dog","stuff");
sp[29] = new san_pham("SP29", "Dây dắt tự động Flexi New Comfort","382.000đ", "images/sanpham/cho/vongco/vong7.jpg","dog","stuff");
sp[30] = new san_pham("SP30", "Khớp da(rọ mõm)","54.000đ", "images/sanpham/cho/vongco/vong8.jpg","dog","stuff");
sp[31] = new san_pham("SP31", "Myp - Rọ mõm mỏ vịt silicon","80.000đ", "images/sanpham/cho/vongco/vong9.jpg","dog","stuff");

sp[32] = new san_pham("SP32", "Ferplast - Thùng đựng thức ăn FEEDY","380.000đ", "images/sanpham/cho/vatdung/vat2.jpg","dog","stuff");
sp[33] = new san_pham("SP33", "PF - Bát dấu chân hình xương đáy chống trượt","76.000đ", "images/sanpham/cho/vatdung/vat3.jpg","dog","stuff");
sp[34] = new san_pham("SP34", "PF - Bát đôi hình xương ","526.000đ", "images/sanpham/cho/vatdung/vat8.jpg","dog","stuff");
sp[35] = new san_pham("SP35", "Bát ăn sứ cho chó mèo ","75.000đ", "images/sanpham/cho/vatdung/vat5.jpg","dog","stuff");
sp[36] = new san_pham("SP36", "Ferplast - Bình cấp nước, thức ăn Azimut","197.000đ", "images/sanpham/cho/vatdung/vat6.jpg","dog","stuff");
sp[37] = new san_pham("SP37", "Chén lạnh AFP Chill out","220.000đ", "images/sanpham/cho/vatdung/vat7.jpg","dog","stuff");
sp[38] = new san_pham("SP38", "Bộ ăn uống tự động","529.000đ", "images/sanpham/cho/vatdung/vat4.jpg","dog","stuff");
sp[39] = new san_pham("SP39", "Lược Furminator ","803.000đ", "images/sanpham/cho/vatdung/vat1.jpg","dog","stuff");

sp[40] = new san_pham("SP40", "8in1 - Sữa tắm kiểm soát rụng lông Perfect Coat","229.000đ", "images/sanpham/cho/suatam/suatam1.jpg","dog","stuff");
sp[41] = new san_pham("SP41", "Davis - Sữa tắm ngứa do nhiễm nấm Miconazole","410.000đ", "images/sanpham/cho/suatam/suatam2.jpg","dog","stuff");
sp[42] = new san_pham("SP42", "Davis - Sữa tắm mụn mủ nhờnDemodex ","300.000đ", "images/sanpham/cho/suatam/suatam3.jpg","dog","stuff");
sp[43] = new san_pham("SP43", "Xịt khử mùi diệt khuẩn Natural clean","200.000đ", "images/sanpham/cho/suatam/suatam4.jpg","dog","stuff");
sp[44] = new san_pham("SP44", "YU - Tắm Khô Mẫu Đơn","170.000đ", "images/sanpham/cho/suatam/suatam5.jpg","dog","stuff");
sp[45] = new san_pham("SP45", "Bio - Sữa tắm Biospre ","81.000đ", "images/sanpham/cho/suatam/suatam6.jpg","dog","stuff");
sp[46] = new san_pham("SP46", "Sữa tắm 8in1 Perfect Coat yến mạch","229.000đ", "images/sanpham/cho/suatam/suatam7.jpg","dog","stuff");
sp[47] = new san_pham("SP47", "Sữa tắm Furminator","324.000đ", "images/sanpham/cho/suatam/suatam8.jpg","dog","stuff");
sp[48] = new san_pham("SP48", "Xịt vệ sinh khử mùi môi trường Simbae Country Grove","184.000đ", "images/sanpham/cho/suatam/suatam9.jpg","dog","stuff");

sp[49] = new san_pham("SP49", "Pet-Đồ chơi bóng tròn","28.000đ", "images/sanpham/cho/dochoi/do5.jpg","dog","stuff");
sp[50] = new san_pham("SP50", "Afp - Đồ chơi mèo hình chuột catZILLA","126.000đ", "images/sanpham/cho/dochoi/do3.jpg","dog","stuff");
sp[51] = new san_pham("SP51", "Đĩa bay vải Petstar hình dấu chân","30.000đ", "images/sanpham/cho/dochoi/do8.jpg","dog","stuff");
sp[52] = new san_pham("SP52", "Kong - Núm vú puppy ","211.000đ", "images/sanpham/cho/dochoi/do7.jpg","dog","stuff");
sp[53] = new san_pham("SP53", "AFP - Xương/bánh thưởng Treat Krazy Crunch ","322.000đ", "images/sanpham/cho/dochoi/do6.jpg","dog","stuff");
sp[54] = new san_pham("SP54", "Đồ chơi AFP xí ngầu","156.000đ", "images/sanpham/cho/dochoi/do4.jpg","dog","stuff");
sp[55] = new san_pham("SP55", "Lật đật cao su ","48.000đ", "images/sanpham/cho/dochoi/do2.jpg","dog","stuff");
sp[56] = new san_pham("SP56", "Pet-Đồ chơi cử tạ","27.000đ", "images/sanpham/cho/dochoi/do1.jpg","dog","stuff");

sp[57] = new san_pham("SP57", "SY - Nệm vòm cao cấp nhiều màu","510.000đ", "images/sanpham/cho/giuong/giuong5.jpg","dog","bed");
sp[58] = new san_pham("SP58", "LHK - Nệm hình chân chó","309.000đ", "images/sanpham/cho/giuong/giuong1.jpg","dog","bed");
sp[59] = new san_pham("SP59", "Petstar - Nệm chữ nhật","150.000đ", "images/sanpham/cho/giuong/giuong4.jpg","dog","bed");
sp[60] = new san_pham("SP60", "Petstar - Thảm nằm","140.000đ", "images/sanpham/cho/giuong/giuong3.jpg","dog","bed");
sp[61] = new san_pham("SP61", "Ferplast - Vali ATLAS PROFESSIONAL","509.000đ", "images/sanpham/cho/giuong/giuong7.jpg","dog","bed");
sp[62] = new san_pham("SP62", "Lồng bánh xe","824.000đ", "images/sanpham/cho/giuong/giuong6.jpg","dog","bed");
sp[63] = new san_pham("SP63", " Nệm nằm Petdream","172.000đ", "images/sanpham/cho/giuong/giuong2.jpg","dog","bed");

sp[64] = new san_pham("SP64", "Thức ăn cho mèo cat's Eye ","166.000đ", "images/sanpham/meo/food/foodcat1.jpg","cat","food");
sp[65] = new san_pham("SP65", "Thức ăn cao cấp NutriSource thịt vịt","25.000đ", "images/sanpham/meo/food/foodcat5.jpg","cat","food");
sp[66] = new san_pham("SP66", "Thức ăn cao cấp NutriSource cá hồi và gan ","25.000đ", "images/sanpham/meo/food/foodcat6.jpg","cat","food");
sp[67] = new san_pham("SP67", "Viên dinh dưỡng Hairball for cats ","160.000đ", "images/sanpham/meo/food/foodcat3.jpg","cat","food");
sp[68] = new san_pham("SP68", "Me-O - Thức ăn Meo kitten","105.000đ", "images/sanpham/meo/food/foodcat2.jpg","cat","food");
sp[69] = new san_pham("SP69", "Thức ăn cho mèo Home cat ","203.000đ", "images/sanpham/meo/food/foodcat4.jpg","cat","food");
sp[70] = new san_pham("SP70", "Me-O - Creamy Treats Bonito Flavor","45.000đ", "images/sanpham/meo/food/foodcat8.jpg","cat","food");
sp[71] = new san_pham("SP71", "Royal spnin - Intense Beauty","32.000đ", "images/sanpham/meo/food/foodcat7.JPG","cat","food");
sp[72] = new san_pham("SP72", "Pate Royal spnin - Recovery ","55.000đ", "images/sanpham/meo/food/foodcat9.jpg","cat","food");


sp[73] = new san_pham("SP73", "SY - Áo cho thú cưng các hình size S","155.000đ", "images/sanpham/meo/ao/ao6.jpg","cat","stuff");
sp[74] = new san_pham("SP74", "Áo nỉ có tay Gaspard","240.000đ", "images/sanpham/meo/ao/ao5.jpg","cat","stuff");
sp[75] = new san_pham("SP75", "Áo dear bear","130.000đ", "images/sanpham/meo/ao/ao1.jpg","cat","stuff");
sp[76] = new san_pham("SP76", "LHK - Áo con ếch","82.000đ", "images/sanpham/meo/ao/ao2.jpg","cat","stuff");
sp[77] = new san_pham("SP77", "SY - Áo cotton sát nách","100.000đ","images/sanpham/meo/ao/ao3.jpg","cat","stuff");
sp[78] = new san_pham("SP78", "Petstar - Mũ cho Pet","130.000đ", "images/sanpham/meo/ao/ao7.jpg","cat","stuff");

sp[79] = new san_pham("SP79", "SS - Vòng cổ kỷ luật","120.000đ", "images/sanpham/meo/vongco/vong1.jpg","cat","stuff");
sp[80] = new san_pham("SP80", "Vòng cổ Ferplast Ergoflex ","312.000đ", "images/sanpham/meo/vongco/vong2.jpg","cat","stuff");
sp[81] = new san_pham("SP81", "Dây dắt Ferplast Ergofluo","575.000đ", "images/sanpham/meo/vongco/vong3.jpg","cat","stuff");
sp[82] = new san_pham("SP82", "Yếm Ferplast Ergofluo ","599.000đ", "images/sanpham/meo/vongco/vong4.jpg","cat","stuff");
sp[83] = new san_pham("SP83", "Vòng cổ da Ferplast Natural","332.000đ", "images/sanpham/meo/vongco/vong5.jpg","cat","stuff");
sp[84] = new san_pham("SP84", "LHK - Dây dắt dù dấu chân","33.000đ", "images/sanpham/meo/vongco/vong6.jpg","cat","stuff");
sp[85] = new san_pham("SP85", "Dây dắt tự động Flexi New Comfort","382.000đ", "images/sanpham/meo/vongco/vong7.jpg","cat","stuff");

sp[86] = new san_pham("SP86", "Ferplast - Thùng đựng thức ăn FEEDY","380.000đ", "images/sanpham/meo/vatdung/vat2.jpg","cat","stuff");
sp[87] = new san_pham("SP87", "PF - Bát dấu chân hình xương đáy chống trượt","76.000đ", "images/sanpham/meo/vatdung/vat3.jpg","cat","stuff");
sp[88] = new san_pham("SP88", "PF - Bát đôi hình xương ","526.000đ", "images/sanpham/meo/vatdung/vat8.jpg","cat","stuff");
sp[89] = new san_pham("SP89", "Bát ăn sứ cho chó mèo ","75.000đ", "images/sanpham/meo/vatdung/vat5.jpg","cat","stuff");
sp[90] = new san_pham("SP90", "Ferplast - Bình cấp nước, thức ăn Azimut","197.000đ", "images/sanpham/meo/vatdung/vat6.jpg","cat","stuff");
sp[91] = new san_pham("SP91", "Chén lạnh AFP Chill out","220.000đ", "images/sanpham/meo/vatdung/vat7.jpg","cat","stuff");
sp[92] = new san_pham("SP92", "Bộ ăn uống tự động","529.000đ", "images/sanpham/meo/vatdung/vat4.jpg","cat","stuff");
sp[93] = new san_pham("SP93", "Lược Furminator ","803.000đ", "images/sanpham/meo/vatdung/vat1.jpg","cat","stuff");


sp[94] = new san_pham("SP94", "8in1 - Sữa tắm kiểm soát rụng lông Perfect Coat","229.000đ", "images/sanpham/meo/suatam/suatam1.jpg","cat","stuff");
sp[95] = new san_pham("SP95", "Davis - Sữa tắm ngứa do nhiễm nấm Miconazole","410.000đ", "images/sanpham/meo/suatam/suatam2.jpg","cat","stuff");
sp[96] = new san_pham("SP96", "Davis - Sữa tắm mụn mủ nhờnDemodex ","300.000đ", "images/sanpham/meo/suatam/suatam3.jpg","cat","stuff");
sp[97] = new san_pham("SP97", "Xịt khử mùi diệt khuẩn Natural clean","200.000đ", "images/sanpham/meo/suatam/suatam4.jpg","cat","stuff");
sp[98] = new san_pham("SP98", "YU - Tắm Khô Mẫu Đơn","170.000đ", "images/sanpham/meo/suatam/suatam5.jpg","cat","stuff");
sp[99] = new san_pham("SP99", "Bio - Sữa tắm Biospre ","81.000đ", "images/sanpham/meo/suatam/suatam6.jpg","cat","stuff");
sp[100] = new san_pham("SP100", "Sữa tắm 8in1 Perfect Coat yến mạch","229.000đ", "images/sanpham/meo/suatam/suatam7.jpg","cat","stuff");
sp[101] = new san_pham("SP101", "Sữa tắm Furminator","324.000đ", "images/sanpham/meo/suatam/suatam8.jpg","cat","stuff");
sp[102] = new san_pham("SP102", "Xịt vệ sinh khử mùi môi trường Simbae Country Grove","184.000đ", "images/sanpham/meo/suatam/suatam9.jpg","cat","stuff");
sp[103] = new san_pham("SP103", "Dầu gội và xả cho mèo lông dài","200.000đ", "images/sanpham/meo/suatam/suatam10.jpg","cat","stuff");

sp[104]= new san_pham("SP104","Cây mèo leo AFP Nature Cozy 45x45x66cm ","899.000đ","images/sanpham/meo/dochoi/domeo1.jpg","cat","stuff");
sp[105]= new san_pham("SP105","Afp - Cây mèo leo Roller CLASSIC COMFORT ","785.000đ","images/sanpham/meo/dochoi/domeo7.jpg","cat","stuff");
sp[106]= new san_pham("SP106","Pet-Đồ chơi bóng tròn ","28.000đ" ,"images/sanpham/meo/dochoi/domeo6.jpg","cat","stuff");
sp[107]= new san_pham("SP107","Afp - Đồ chơi mèo hình chuột catZILLA ","126.000đ" ,"images/sanpham/meo/dochoi/domeo2.jpg","cat","stuff");
sp[108]= new san_pham("SP108","AFP - Đồ chơi cho mèo Coco'nut WILD & NATURE ","68.000đ","images/sanpham/meo/dochoi/domeo5.jpg","cat","stuff");
sp[109]= new san_pham("SP109","Chuột cỏ mèo Green Rush ","102.000đ","images/sanpham/meo/dochoi/domeo4.jpg","cat","stuff");
sp[110]= new san_pham("SP110","Thảm cói trụ chuột ","95.000đ","images/sanpham/meo/dochoi/domeo3.jpg","cat","stuff");

sp[111] = new san_pham("SP111", "SY - Nệm vòm cao cấp nhiều màu","510.000đ", "images/sanpham/meo/giuong/giuong5.jpg","cat","bed");
sp[112] = new san_pham("SP112", "LHK - Nệm hình chân chó","309.000đ", "images/sanpham/meo/giuong/giuong1.jpg","cat","bed");
sp[113] = new san_pham("SP113", "Petstar - Nệm chữ nhật","150.000đ", "images/sanpham/meo/giuong/giuong4.jpg","cat","bed");
sp[114] = new san_pham("SP114", "Petstar - Thảm nằm","140.000đ", "images/sanpham/meo/giuong/giuong3.jpg","cat","bed");
sp[115] = new san_pham("SP115", "Ferplast - Vali ATLAS PROFESSIONAL","509.000đ", "images/sanpham/meo/giuong/giuong7.jpg","cat","bed");
sp[116] = new san_pham("SP116", "Lồng bánh xe","824.000đ", "images/sanpham/meo/giuong/giuong6.jpg","cat","bed");
sp[117] = new san_pham("SP117", "Nệm nằm Petdream","172.000đ", "images/sanpham/meo/giuong/giuong2.jpg","cat","bed");



sp[118]=new san_pham("SP118","Thức ăn cho sp","300.000đ","images/sanpham/dongvatkhac/chim/chim2.jpg","bird","food");
sp[119]=new san_pham("SP119","Thức ăn cho họa mi","15.000","images/sanpham/dongvatkhac/chim/chim1.jpg","bird","food");
sp[120]=new san_pham("SP120","Bình thủy tinh đựng thức ăn cho chim","20.000đ","images/sanpham/dongvatkhac/chim/chim4.jpg","bird","stuff");
sp[121]=new san_pham("SP121","Bình sứ đựng thứ ăn chim","30.000đ","images/sanpham/dongvatkhac/chim/chim3.jpg","bird","stuff");
sp[122]=new san_pham("SP122","Lồng chim gỗ","200.000đ","images/sanpham/dongvatkhac/chim/chim5.jpg","bird","bed");
sp[123]=new san_pham("SP123","Lồng chim sắt","400.000đ","images/sanpham/dongvatkhac/chim/chim6.jpg","bird","bed");
sp[124]=new san_pham("SP124","Lồng chim nuôi đôi","600.000đ","images/sanpham/dongvatkhac/chim/chim7.jpg","bird","bed");


sp[125]=new san_pham("SP125","Thức ăn hamster","40.000đ","images/sanpham/dongvatkhac/hamster/hamster1.jpg","hamster","food");
sp[126]=new san_pham("SP126","Thức ăn hamster loại viên","60.000đ","images/sanpham/dongvatkhac/hamster/hamster2.jpg","hamster","food");
sp[127]=new san_pham("SP127","Vụn gỗ lót chuồng hamster","20.000đ","images/sanpham/dongvatkhac/hamster/hamster3.jpg","hamster","stuff");
sp[128]=new san_pham("SP128","Bánh xe chạy","70.000đ","images/sanpham/dongvatkhac/hamster/hamster5.jpg","hamster","stuff");
sp[129]=new san_pham("SP129","Cây sp leo","90.000đ","images/sanpham/dongvatkhac/hamster/hamster4.jpg","hamster","stuff");
sp[130]=new san_pham("SP130","Lồng hamster","800.000đ","images/sanpham/dongvatkhac/hamster/hamster6.jpg","hamster","bed");
sp[131]=new san_pham("SP131","Lồng hamster loại nhỏ","500.000đ","images/sanpham/dongvatkhac/hamster/hamster7.jpg","hamster","bed");


sp[132]=new san_pham("SP132","Thức ăn cho cá","40.000đ","images/sanpham/dongvatkhac/ca/ca5.jpg","fish","food");
sp[133]=new san_pham("SP133","Núi giả","20.000đ","images/sanpham/dongvatkhac/ca/ca3.jpg","fish","stuff");
sp[134]=new san_pham("SP134","Bộ lọc nước","950.000đ","images/sanpham/dongvatkhac/ca/ca6.jpg","fish","stuff");
sp[135]=new san_pham("SP135","Bể cá mini","30.000đ","images/sanpham/dongvatkhac/ca/ca2.jpg","fish","bed");
sp[136]=new san_pham("SP136","Bể cá tròn","100.000đ","images/sanpham/dongvatkhac/ca/ca1.jpg","fish","bed");
sp[137]=new san_pham("SP137","Bể cá chữ nhật","500.000đ","images/sanpham/dongvatkhac/ca/ca4.jpg","fish","bed");

var spmoi = new Array();

spmoi[0] = new san_pham("NewSP0","Áo cho thú cưng size S", "155.000đ", "images/sanpham/3013_74216cb16b0b8755de1a.jpg", "dog","stuff");
spmoi[1] = new san_pham("NewSP1","Nệm vòm cao cấp", "510.000đ", "images/sanpham/3009_f194b965bddf518108ce.jpg", "dog","bed");
spmoi[2] = new san_pham("NewSP2","Thức ăn RoyalCanin nhỏ", "59.000đ", "images/sanpham/2134_RoyalCanin-MiniAdultLight195g.png", "dog","food");
spmoi[3] = new san_pham("NewSP3","Balo di chuyển phi hành gia (nhựa)", "520.000đ", "images/sanpham/2577_tui-pet-phi-hanh-gia-pet-city2.jpg", "dog","stuff");
spmoi[4] = new san_pham("NewSP4","Lược cho mèo lông dài", "652.000đ","images/sanpham/999_furminatorchomeolongdaipetcity.jpg", "cat","stuff");
spmoi[5] = new san_pham("NewSP5","Thức ăn cho mèo túi", "166.000đ","images/sanpham/2362_Cats_Eye_petcity.jpg", "cat","food");
spmoi[6] = new san_pham("NewSP6","Cây mèo leo", "880.000đ","images/sanpham/2953_caymeoleoafpnaturecozypetcity1.jpg", "cat","stuff");
spmoi[7] = new san_pham("NewSP7","Nhà vệ sinh mèo", "750.000đ","images/sanpham/250_3410_makar_toilet_cat_pink_petcity.jpg", "cat","stuff");

var spsale = new Array();

spsale[0] = new san_pham("SaleSP0",	"Nhà đầu mèo", "338.000đ", "images/sanpham/120_2271_20431239_341674479620345_7843554253853490907_n.jpg", "cat","bed");
spsale[1] = new san_pham("SaleSP1",	"Túi xách nylon vòm", "200.000đ", "images/sanpham/120_260_pet_supplies_new_pet_cat_backpack_pet_font_b_handbag_b_font_font_b_dog_b.jpg", "dog","stuff");
spsale[2] = new san_pham("SaleSP2",	"Máy sấy lông - CP160", "920.000đ", "images/sanpham/1399_0_m__y_s___y_chuy__n_d___ng_d__nh_cho_ch___m__o.jpg", "dog","stuff");
spsale[3] = new san_pham("SaleSP3",	"Thức ăn RoyalCanin lớn", "977.000đ", "images/sanpham/2143_Royalcanin-MaxiAdult10kg.jpg", "dog","food");
spsale[4] = new san_pham("SaleSP4",	"Áo kimino", "90.000đ", "images/sanpham/3271_kimononopetcity4.jpg", "dog","stuff");
spsale[5] = new san_pham("SaleSP5",	"Bát đôi hình xương M", "421.000đ", "images/sanpham/3748_146725445258.png", "dog","stuff");
spsale[6] = new san_pham("SaleSP6",	"Balo di chuyển phi hành gia (nhựa trong)", "560.000đ", "images/sanpham/3757_8727323850-1832263803.jpg", "dog","stuff");
spsale[7] = new san_pham("SaleSP7",	"Sữa tắm hoa mẫu đơn 400ml", "308.000đ", "images/sanpham/3512_Untitl111ed.png", "dog","stuff");


function create_product() {
    var list_spmoi = document.getElementById('spmoi');
    var list_spgiamgia = document.getElementById('spgiamgia');
    for (var i = 0; i < 8; i++) {
        list_spmoi.innerHTML += '<div class="sanpham">\
                                    <a href="SanPham.html?masp='+spmoi[i].masp+'" class="p-img"><img src="'+ spmoi[i].hinh +'"/></a>\
                                    <a href="SanPham.html?masp='+spmoi[i].masp+'" class="p-name">'+ spmoi[i].tensp +'</a>\
                                    <p class="gia">'+ spmoi[i].gia +'</p>\
                                    <p><button class="shop-item-button" value="'+spmoi[i].masp+'">Thêm vào giỏ</button></p>\
                                </div>';
        list_spgiamgia.innerHTML += '<div class="sanpham">\
                                        <a href="SanPham.html?masp='+spsale[i].masp+'" class="p-img"><img src="'+ spsale[i].hinh +'"/></a>\
                                        <a href="SanPham.html?masp='+spsale[i].masp+'" class="p-name">'+ spsale[i].tensp +'</a>\
										<span class="giacu">1.000.000đ</span>\
                                        <p class="gia">'+ spsale[i].gia +'</p>\
                                        <p><button class="shop-item-button" value="'+spsale[i].masp+'">Thêm vào giỏ</button></p>\
                                    </div>';
    }
}

function getURL_dog(){
    var soluong = 0, sotrang = 1;
    var thongtin = window.location.href;
    var menu = thongtin.split('?menu=')[1].split('&page=')[0];
    var page = thongtin.split('?menu=')[1].split('&page=')[1];
    var title = document.getElementsByClassName('title')[0];
    var sanpham = document.getElementById('sp');
    var pagebreak = document.getElementsByClassName('sotrang')[0];
    if(menu == 0){
        for (var i = (page-1)*8; i < sp.length && soluong < 8; i++) {
            if(sp[i].madv == "dog"){
            soluong++;
            sanpham.innerHTML += '<div class="sanpham">\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-img"><img src="'+ sp[i].hinh +'"/></a>\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-name">'+ sp[i].tensp +'</a>\
                                        <p class="gia">'+ sp[i].gia +'</p>\
                                        <p><button class="shop-item-button" value="'+sp[i].masp+'">Thêm vào giỏ</button></p>\
                                    </div>';
            }
        }

        var count = 0;
        for (var i = 0; i < sp.length; i++) {
            if(sp[i].madv == "dog"){
            count++;
            }
        }
        sotrang = Math.ceil(count / 8);
        for (var i = 1; i <= sotrang; i++) {
            pagebreak.innerHTML +=
                '<div class="so"><a href="cho.html?menu=0&page='+i+'">'+i+'</a></div>';
        }
	}
	else if(menu == 1){
        title.innerHTML = 'Thức ăn cho chó';
        for (var i = (page-1)*8; i < sp.length && soluong < 8; i++) {
            if(sp[i].madv == "dog" && sp[i].matl == "food"){
            soluong++;
            sanpham.innerHTML += '<div class="sanpham">\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-img"><img src="'+ sp[i].hinh +'"/></a>\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-name">'+ sp[i].tensp +'</a>\
                                        <p class="gia">'+ sp[i].gia +'</p>\
                                        <p><button class="shop-item-button" value="'+sp[i].masp+'">Thêm vào giỏ</button></p>\
                                    </div>';
            }
        }

        var count = 0;
        for (var i = 0; i < sp.length; i++) {
            if(sp[i].madv == "dog" && sp[i].matl == "food"){
            count++;
            }
        }
        sotrang = Math.ceil(count / 8);
        for (var i = 1; i <= sotrang; i++) {
            pagebreak.innerHTML +=
                '<div class="so"><a href="cho.html?menu=1&page='+i+'">'+i+'</a></div>';
        }
    }
    else if(menu == 2){
        title.innerHTML = 'Vật dụng cho chó';
        for (var i = (page-1)*8 + 13; i < sp.length && soluong < 8; i++) {
            if(sp[i].madv == "dog" && sp[i].matl == "stuff"){
            soluong++;
            sanpham.innerHTML += '<div class="sanpham">\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-img"><img src="'+ sp[i].hinh +'"/></a>\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-name">'+ sp[i].tensp +'</a>\
                                        <p class="gia">'+ sp[i].gia +'</p>\
                                        <p><button class="shop-item-button" value="'+sp[i].masp+'">Thêm vào giỏ</button></p>\
                                    </div>';
            }
        }

        var count = 0;
        for (var i = 0; i < sp.length; i++) {
            if(sp[i].madv == "dog" && sp[i].matl == "stuff"){
            count++;
            }
        }
        sotrang = Math.ceil(count / 8);
        for (var i = 1; i <= sotrang; i++) {
            pagebreak.innerHTML +=
                '<div class="so"><a href="cho.html?menu=2&page='+i+'">'+i+'</a></div>';
        }
    }
    else if(menu == 3){
        title.innerHTML = 'Chuồng, giường cho chó';
        for (var i = (page-1)*8 + 57; i < sp.length && soluong < 8; i++) {
            if(sp[i].madv == "dog" && sp[i].matl == "bed"){
            soluong++;
            sanpham.innerHTML += '<div class="sanpham">\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-img"><img src="'+ sp[i].hinh +'"/></a>\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-name">'+ sp[i].tensp +'</a>\
                                        <p class="gia">'+ sp[i].gia +'</p>\
                                        <p><button class="shop-item-button" value="'+sp[i].masp+'">Thêm vào giỏ</button></p>\
                                    </div>';
            }
        }

        var count = 0;
        for (var i = 0; i < sp.length; i++) {
            if(sp[i].madv == "dog" && sp[i].matl == "bed"){
            count++;
            }
        }
        sotrang = Math.ceil(count / 8);
        for (var i = 1; i <= sotrang; i++) {
            pagebreak.innerHTML +=
                '<div class="so"><a href="cho.html?menu=3&page='+i+'">'+i+'</a></div>';
        }
    }
}

function getURL_cat(){
    var soluong = 0, sotrang = 1;
    var thongtin = window.location.href;
    var menu = thongtin.split('?menu=')[1].split('&page=')[0];
    var page = thongtin.split('?menu=')[1].split('&page=')[1];
    var title = document.getElementsByClassName('title')[0];
    var sanpham = document.getElementById('sp');
    var pagebreak = document.getElementsByClassName('sotrang')[0];
    if(menu == 0){
        for (var i = (page-1)*8 + 64; i < sp.length && soluong < 8; i++) {
            if(sp[i].madv == "cat"){
            soluong++;
            sanpham.innerHTML += '<div class="sanpham">\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-img"><img src="'+ sp[i].hinh +'"/></a>\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-name">'+ sp[i].tensp +'</a>\
                                        <p class="gia">'+ sp[i].gia +'</p>\
                                        <p><button class="shop-item-button" value="'+sp[i].masp+'">Thêm vào giỏ</button></p>\
                                    </div>';
            }
        }

        var count = 0;
        for (var i = 0; i < sp.length; i++) {
            if(sp[i].madv == "cat"){
            count++;
            }
        }
        sotrang = Math.ceil(count / 8);
        for (var i = 1; i <= sotrang; i++) {
            pagebreak.innerHTML +=
                '<div class="so"><a href="meo.html?menu=0&page='+i+'">'+i+'</a></div>';
        }
    }
    else if(menu == 1){
        title.innerHTML = 'Thức ăn cho mèo';
        for (var i = (page-1)*8 + 64; i < sp.length && soluong < 8; i++) {
            if(sp[i].madv == "cat" && sp[i].matl == "food"){
            soluong++;
            sanpham.innerHTML += '<div class="sanpham">\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-img"><img src="'+ sp[i].hinh +'"/></a>\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-name">'+ sp[i].tensp +'</a>\
                                        <p class="gia">'+ sp[i].gia +'</p>\
                                        <p><button class="shop-item-button" value="'+sp[i].masp+'">Thêm vào giỏ</button></p>\
                                    </div>';
            }
        }

        var count = 0;
        for (var i = 0; i < sp.length; i++) {
            if(sp[i].madv == "cat" && sp[i].matl == "food"){
            count++;
            }
        }
        sotrang = Math.ceil(count / 8);
        for (var i = 1; i <= sotrang; i++) {
            pagebreak.innerHTML +=
                '<div class="so"><a href="meo.html?menu=1&page='+i+'">'+i+'</a></div>';
        }
    }
    else if(menu == 2){
        title.innerHTML = 'Vật dụng cho mèo';
        for (var i = (page-1)*8 + 73; i < sp.length && soluong < 8; i++) {
            if(sp[i].madv == "cat" && sp[i].matl == "stuff"){
            soluong++;
            sanpham.innerHTML += '<div class="sanpham">\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-img"><img src="'+ sp[i].hinh +'"/></a>\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-name">'+ sp[i].tensp +'</a>\
                                        <p class="gia">'+ sp[i].gia +'</p>\
                                        <p><button class="shop-item-button" value="'+sp[i].masp+'">Thêm vào giỏ</button></p>\
                                    </div>';
            }
        }

        var count = 0;
        for (var i = 0; i < sp.length; i++) {
            if(sp[i].madv == "cat" && sp[i].matl == "stuff"){
            count++;
            }
        }
        sotrang = Math.ceil(count / 8);
        for (var i = 1; i <= sotrang; i++) {
            pagebreak.innerHTML +=
                '<div class="so"><a href="meo.html?menu=2&page='+i+'">'+i+'</a></div>';
        }
    }
    else if(menu == 3){
        title.innerHTML = 'Chuồng, giường cho mèo';
        for (var i = (page-1)*8 + 111; i < sp.length && soluong < 8; i++) {
            if(sp[i].madv == "cat" && sp[i].matl == "bed"){
            soluong++;
            sanpham.innerHTML += '<div class="sanpham">\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-img"><img src="'+ sp[i].hinh +'"/></a>\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-name">'+ sp[i].tensp +'</a>\
                                        <p class="gia">'+ sp[i].gia +'</p>\
                                        <p><button class="shop-item-button" value="'+sp[i].masp+'">Thêm vào giỏ</button></p>\
                                    </div>';
            }
        }

        var count = 0;
        for (var i = 0; i < sp.length; i++) {
            if(sp[i].madv == "cat" && sp[i].matl == "bed"){
            count++;
            }
        }
        sotrang = Math.ceil(count / 8);
        for (var i = 1; i <= sotrang; i++) {
            pagebreak.innerHTML +=
                '<div class="so"><a href="meo.html?menu=3&page='+i+'">'+i+'</a></div>';
        }
    }
}

function getURL_bird(){
    var soluong = 0, sotrang = 1;
    var thongtin = window.location.href;
    var menu = thongtin.split('?menu=')[1].split('&page=')[0];
    var page = thongtin.split('?menu=')[1].split('&page=')[1];
    var title = document.getElementsByClassName('title')[0];
    var sanpham = document.getElementById('sp');
    var pagebreak = document.getElementsByClassName('sotrang')[0];
    if(menu == 0){
        for (var i = (page-1)*8 + 118; i < sp.length && soluong < 8; i++) {
            if(sp[i].madv == "bird"){
            soluong++;
            sanpham.innerHTML += '<div class="sanpham">\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-img"><img src="'+ sp[i].hinh +'"/></a>\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-name">'+ sp[i].tensp +'</a>\
                                        <p class="gia">'+ sp[i].gia +'</p>\
                                        <p><button class="shop-item-button" value="'+sp[i].masp+'">Thêm vào giỏ</button></p>\
                                    </div>';
            }
        }

        var count = 0;
        for (var i = 0; i < sp.length; i++) {
            if(sp[i].madv == "bird"){
            count++;
            }
        }
        sotrang = Math.ceil(count / 8);
        for (var i = 1; i <= sotrang; i++) {
            pagebreak.innerHTML +=
                '<div class="so"><a href="chim.html?menu=0&page='+i+'">'+i+'</a></div>';
        }
    }
    else if(menu == 1){
        title.innerHTML = 'Thức ăn cho chim';
        for (var i = (page-1)*8 + 118; i < sp.length && soluong < 8; i++) {
            if(sp[i].madv == "bird" && sp[i].matl == "food"){
            soluong++;
            sanpham.innerHTML += '<div class="sanpham">\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-img"><img src="'+ sp[i].hinh +'"/></a>\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-name">'+ sp[i].tensp +'</a>\
                                        <p class="gia">'+ sp[i].gia +'</p>\
                                        <p><button class="shop-item-button" value="'+sp[i].masp+'">Thêm vào giỏ</button></p>\
                                    </div>';
            }
        }

        var count = 0;
        for (var i = 0; i < sp.length; i++) {
            if(sp[i].madv == "bird" && sp[i].matl == "food"){
            count++;
            }
        }
        sotrang = Math.ceil(count / 8);
        for (var i = 1; i <= sotrang; i++) {
            pagebreak.innerHTML +=
                '<div class="so"><a href="chim.html?menu=1&page='+i+'">'+i+'</a></div>';
        }
    }
    else if(menu == 2){
        title.innerHTML = 'Vật dụng cho chim';
        for (var i = (page-1)*8 + 118; i < sp.length && soluong < 8; i++) {
            if(sp[i].madv == "bird" && sp[i].matl == "stuff"){
            soluong++;
            sanpham.innerHTML += '<div class="sanpham">\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-img"><img src="'+ sp[i].hinh +'"/></a>\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-name">'+ sp[i].tensp +'</a>\
                                        <p class="gia">'+ sp[i].gia +'</p>\
                                        <p><button class="shop-item-button" value="'+sp[i].masp+'">Thêm vào giỏ</button></p>\
                                    </div>';
            }
        }

        var count = 0;
        for (var i = 0; i < sp.length; i++) {
            if(sp[i].madv == "bird" && sp[i].matl == "stuff"){
            count++;
            }
        }
        sotrang = Math.ceil(count / 8);
        for (var i = 1; i <= sotrang; i++) {
            pagebreak.innerHTML +=
                '<div class="so"><a href="chim.html?menu=2&page='+i+'">'+i+'</a></div>';
        }
    }
    else if(menu == 3){
        title.innerHTML = 'Lồng và phụ kiện cho chim';
        for (var i = (page-1)*8 + 118; i < sp.length && soluong < 8; i++) {
            if(sp[i].madv == "bird" && sp[i].matl == "bed"){
            soluong++;
            sanpham.innerHTML += '<div class="sanpham">\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-img"><img src="'+ sp[i].hinh +'"/></a>\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-name">'+ sp[i].tensp +'</a>\
                                        <p class="gia">'+ sp[i].gia +'</p>\
                                        <p><button class="shop-item-button" value="'+sp[i].masp+'">Thêm vào giỏ</button></p>\
                                    </div>';
            }
        }

        var count = 0;
        for (var i = 0; i < sp.length; i++) {
            if(sp[i].madv == "bird" && sp[i].matl == "bed"){
            count++;
            }
        }
        sotrang = Math.ceil(count / 8);
        for (var i = 1; i <= sotrang; i++) {
            pagebreak.innerHTML +=
                '<div class="so"><a href="chim.html?menu=3&page='+i+'">'+i+'</a></div>';
        }
    }
}

function getURL_fish(){
    var soluong = 0, sotrang = 1;
    var thongtin = window.location.href;
    var menu = thongtin.split('?menu=')[1].split('&page=')[0];
    var page = thongtin.split('?menu=')[1].split('&page=')[1];
    var title = document.getElementsByClassName('title')[0];
    var sanpham = document.getElementById('sp');
    var pagebreak = document.getElementsByClassName('sotrang')[0];
    if(menu == 0){
        for (var i = (page-1)*8 + 132; i < sp.length && soluong < 8; i++) {
            if(sp[i].madv == "fish"){
            soluong++;
            sanpham.innerHTML += '<div class="sanpham">\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-img"><img src="'+ sp[i].hinh +'"/></a>\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-name">'+ sp[i].tensp +'</a>\
                                        <p class="gia">'+ sp[i].gia +'</p>\
                                        <p><button class="shop-item-button" value="'+sp[i].masp+'">Thêm vào giỏ</button></p>\
                                    </div>';
            }
        }

        var count = 0;
        for (var i = 0; i < sp.length; i++) {
            if(sp[i].madv == "fish"){
            count++;
            }
        }
        sotrang = Math.ceil(count / 8);
        for (var i = 1; i <= sotrang; i++) {
            pagebreak.innerHTML +=
                '<div class="so"><a href="fish.html?menu=0&page='+i+'">'+i+'</a></div>';
        }
    }
    else if(menu == 1){
        title.innerHTML = 'Thức ăn cho cá';
        for (var i = (page-1)*8 + 132; i < sp.length && soluong < 8; i++) {
            if(sp[i].madv == "fish" && sp[i].matl == "food"){
            soluong++;
            sanpham.innerHTML += '<div class="sanpham">\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-img"><img src="'+ sp[i].hinh +'"/></a>\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-name">'+ sp[i].tensp +'</a>\
                                        <p class="gia">'+ sp[i].gia +'</p>\
                                        <p><button class="shop-item-button" value="'+sp[i].masp+'">Thêm vào giỏ</button></p>\
                                    </div>';
            }
        }

        var count = 0;
        for (var i = 0; i < sp.length; i++) {
            if(sp[i].madv == "fish" && sp[i].matl == "food"){
            count++;
            }
        }
        sotrang = Math.ceil(count / 8);
        for (var i = 1; i <= sotrang; i++) {
            pagebreak.innerHTML +=
                '<div class="so"><a href="ca.html?menu=1&page='+i+'">'+i+'</a></div>';
        }
    }
    else if(menu == 2){
        title.innerHTML = 'Vật dụng cho cá';
        for (var i = (page-1)*8 + 132; i < sp.length && soluong < 8; i++) {
            if(sp[i].madv == "fish" && sp[i].matl == "stuff"){
            soluong++;
            sanpham.innerHTML += '<div class="sanpham">\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-img"><img src="'+ sp[i].hinh +'"/></a>\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-name">'+ sp[i].tensp +'</a>\
                                        <p class="gia">'+ sp[i].gia +'</p>\
                                        <p><button class="shop-item-button" value="'+sp[i].masp+'">Thêm vào giỏ</button></p>\
                                    </div>';
            }
        }

        var count = 0;
        for (var i = 0; i < sp.length; i++) {
            if(sp[i].madv == "fish" && sp[i].matl == "stuff"){
            count++;
            }
        }
        sotrang = Math.ceil(count / 8);
        for (var i = 1; i <= sotrang; i++) {
            pagebreak.innerHTML +=
                '<div class="so"><a href="ca.html?menu=2&page='+i+'">'+i+'</a></div>';
        }
    }
    else if(menu == 3){
        title.innerHTML = 'Bể cá và phụ kiện';
        for (var i = (page-1)*8 + 132; i < sp.length && soluong < 8; i++) {
            if(sp[i].madv == "fish" && sp[i].matl == "bed"){
            soluong++;
            sanpham.innerHTML += '<div class="sanpham">\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-img"><img src="'+ sp[i].hinh +'"/></a>\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-name">'+ sp[i].tensp +'</a>\
                                        <p class="gia">'+ sp[i].gia +'</p>\
                                        <p><button class="shop-item-button" value="'+sp[i].masp+'">Thêm vào giỏ</button></p>\
                                    </div>';
            }
        }

        var count = 0;
        for (var i = 0; i < sp.length; i++) {
            if(sp[i].madv == "fish" && sp[i].matl == "bed"){
            count++;
            }
        }
        sotrang = Math.ceil(count / 8);
        for (var i = 1; i <= sotrang; i++) {
            pagebreak.innerHTML +=
                '<div class="so"><a href="ca.html?menu=3&page='+i+'">'+i+'</a></div>';
        }
    }
}

function getURL_hamster(){
    var soluong = 0, sotrang = 1;
    var thongtin = window.location.href;
    var menu = thongtin.split('?menu=')[1].split('&page=')[0];
    var page = thongtin.split('?menu=')[1].split('&page=')[1];
    var title = document.getElementsByClassName('title')[0];
    var sanpham = document.getElementById('sp');
    var pagebreak = document.getElementsByClassName('sotrang')[0];
    if(menu == 0){
        for (var i = (page-1)*8 + 125; i < sp.length && soluong < 8; i++) {
            if(sp[i].madv == "hamster"){
            soluong++;
            sanpham.innerHTML += '<div class="sanpham">\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-img"><img src="'+ sp[i].hinh +'"/></a>\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-name">'+ sp[i].tensp +'</a>\
                                        <p class="gia">'+ sp[i].gia +'</p>\
                                        <p><button class="shop-item-button" value="'+sp[i].masp+'">Thêm vào giỏ</button></p>\
                                    </div>';
            }
        }

        var count = 0;
        for (var i = 0; i < sp.length; i++) {
            if(sp[i].madv == "hamster"){
            count++;
            }
        }
        sotrang = Math.ceil(count / 8);
        for (var i = 1; i <= sotrang; i++) {
            pagebreak.innerHTML +=
                '<div class="so"><a href="hamster.html?menu=0&page='+i+'">'+i+'</a></div>';
        }
    }
    else if(menu == 1){
        title.innerHTML = 'Thức ăn cho hamster';
        for (var i = (page-1)*8 + 125; i < sp.length && soluong < 8; i++) {
            if(sp[i].madv == "hamster" && sp[i].matl == "food"){
            soluong++;
            sanpham.innerHTML += '<div class="sanpham">\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-img"><img src="'+ sp[i].hinh +'"/></a>\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-name">'+ sp[i].tensp +'</a>\
                                        <p class="gia">'+ sp[i].gia +'</p>\
                                        <p><button class="shop-item-button" value="'+sp[i].masp+'">Thêm vào giỏ</button></p>\
                                    </div>';
            }
        }

        var count = 0;
        for (var i = 0; i < sp.length; i++) {
            if(sp[i].madv == "hamster" && sp[i].matl == "food"){
            count++;
            }
        }
        sotrang = Math.ceil(count / 8);
        for (var i = 1; i <= sotrang; i++) {
            pagebreak.innerHTML +=
                '<div class="so"><a href="hamster.html?menu=1&page='+i+'">'+i+'</a></div>';
        }
    }
    else if(menu == 2){
        title.innerHTML = 'Vật dụng cho hamster';
        for (var i = (page-1)*8 + 125; i < sp.length && soluong < 8; i++) {
            if(sp[i].madv == "hamster" && sp[i].matl == "stuff"){
            soluong++;
            sanpham.innerHTML += '<div class="sanpham">\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-img"><img src="'+ sp[i].hinh +'"/></a>\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-name">'+ sp[i].tensp +'</a>\
                                        <p class="gia">'+ sp[i].gia +'</p>\
                                        <p><button class="shop-item-button" value="'+sp[i].masp+'">Thêm vào giỏ</button></p>\
                                    </div>';
            }
        }

        var count = 0;
        for (var i = 0; i < sp.length; i++) {
            if(sp[i].madv == "hamster" && sp[i].matl == "stuff"){
            count++;
            }
        }
        sotrang = Math.ceil(count / 8);
        for (var i = 1; i <= sotrang; i++) {
            pagebreak.innerHTML +=
                '<div class="so"><a href="hamster.html?menu=2&page='+i+'">'+i+'</a></div>';
        }
    }
    else if(menu == 3){
        title.innerHTML = 'Chuồng và phụ kiện cho hamster';
        for (var i = (page-1)*8 + 125; i < sp.length && soluong < 8; i++) {
            if(sp[i].madv == "hamster" && sp[i].matl == "bed"){
            soluong++;
            sanpham.innerHTML += '<div class="sanpham">\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-img"><img src="'+ sp[i].hinh +'"/></a>\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-name">'+ sp[i].tensp +'</a>\
                                        <p class="gia">'+ sp[i].gia +'</p>\
                                        <p><button class="shop-item-button" value="'+sp[i].masp+'">Thêm vào giỏ</button></p>\
                                    </div>';
            }
        }

        var count = 0;
        for (var i = 0; i < sp.length; i++) {
            if(sp[i].madv == "hamster" && sp[i].matl == "food"){
            count++;
            }
        }
        sotrang = Math.ceil(count / 8);
        for (var i = 1; i <= sotrang; i++) {
            pagebreak.innerHTML +=
                '<div class="so"><a href="hamster.html?menu=3&page='+i+'">'+i+'</a></div>';
        }
    }
}

function getURL_dvkhac(){
    var sanpham1 = document.getElementById('spchim');
    var sanpham2 = document.getElementById('spca');
    var sanpham3 = document.getElementById('sphamster');
    for (var soluong = 0, i = Math.floor(Math.random()*sp.length); i < sp.length && soluong < 4; i++) {
        if(sp[i].madv == "bird"){
        soluong++;
        sanpham1.innerHTML += '<div class="sanpham">\
                                    <a href="SanPham.html?masp='+sp[i].masp+'" class="p-img"><img src="'+ sp[i].hinh +'"/></a>\
                                    <a href="SanPham.html?masp='+sp[i].masp+'" class="p-name">'+ sp[i].tensp +'</a>\
                                    <p class="gia">'+ sp[i].gia +'</p>\
                                    <p><button class="shop-item-button value="'+sp[i].masp+'"">Thêm vào giỏ</button></p>\
                                </div>';
        }
    }
    
    for (var soluong = 0, i = Math.floor(Math.random()*sp.length); i < sp.length && soluong < 4; i++) {
        if(sp[i].madv == "fish"){
        soluong++;
        sanpham2.innerHTML += '<div class="sanpham">\
                                    <a href="SanPham.html?masp='+sp[i].masp+'" class="p-img"><img src="'+ sp[i].hinh +'"/></a>\
                                    <a href="SanPham.html?masp='+sp[i].masp+'" class="p-name">'+ sp[i].tensp +'</a>\
                                    <p class="gia">'+ sp[i].gia +'</p>\
                                    <p><button class="shop-item-button" value="'+sp[i].masp+'">Thêm vào giỏ</button></p>\
                                </div>';
        }
    }
    
    for (var soluong = 0, i = Math.floor(Math.random()*sp.length); i < sp.length && soluong < 4; i++) {
        if(sp[i].madv == "hamster"){
        soluong++;
        sanpham3.innerHTML += '<div class="sanpham">\
                                    <a href="SanPham.html?masp='+sp[i].masp+'" class="p-img"><img src="'+ sp[i].hinh +'"/></a>\
                                    <a href="SanPham.html?masp='+sp[i].masp+'" class="p-name">'+ sp[i].tensp +'</a>\
                                    <p class="gia">'+ sp[i].gia +'</p>\
                                    <p><button class="shop-item-button" value="'+sp[i].masp+'">Thêm vào giỏ</button></p>\
                                </div>';
        }
    }
}

function getInform(){
    var thongtin = window.location.href;
    var ma = thongtin.split('?masp=')[1];
    var sanpham = document.getElementById('chitietsp');
    for (var i = 0; i < sp.length; i++) {
        if(sp[i].masp == ma){
            sanpham.innerHTML = '<div class="hinhanh">\
                                    <img src="'+sp[i].hinh+'">\
                                </div>\
                                <div class="overview">\
                                    <h1 id="tensp">' +sp[i].tensp+ '</h1>\
                                    <p id="masp">Mã SP: ' +sp[i].masp+ '</p>\
                                    <p class="gia">' +sp[i].gia+ '<p>\
                                    <a href="#" class="shop-item-button">Đặt mua ngay</a>\
                                    <div class="thongtin">\
                                        Màu sắc và kiểu dáng đẹp<br>\
                                        Mang đến cho thú cưng cảm giác thoải mái<br>\
                                        Phù hợp cho thú cưng nhà bạn<br>\
                                        '+sp[i].tensp+' thường là sự lựa chọn hoàn hảo<br>\
                                    </div>\
                                </div>\
                                <div class="clear"></div>';
        }
	}
	for (var i = 0; i < sp.length; i++) {
        if(spmoi[i].masp == ma){
            sanpham.innerHTML = '<div class="hinhanh">\
                                    <img src="' +spmoi[i].hinh+ '">\
                                </div>\
                                <div class="overview">\
                                    <h1 id="tensp">' +spmoi[i].tensp+ '</h1>\
                                    <p id="masp">Mã SP: ' +spmoi[i].masp+ '</p>\
                                    <p class="gia">' +spmoi[i].gia+ '<p>\
                                    <a href="#" class="shop-item-button">Đặt mua ngay</a>\
                                    <div class="thongtin">\
                                        Màu sắc và kiểu dáng đẹp<br>\
                                        Mang đến cho thú cưng cảm giác thoải mái<br>\
                                        Phù hợp cho thú cưng nhà bạn<br>\
                                        '+spmoi[i].tensp+' thường là sự lựa chọn hoàn hảo<br>\
                                    </div>\
                                </div>\
                                <div class="clear"></div>';
        }
		if(spsale[i].masp == ma){
            sanpham.innerHTML = '<div class="hinhanh">\
                                    <img src="' +spsale[i].hinh+ '">\
                                </div>\
                                <div class="overview">\
                                    <h1 id="tensp">' +spsale[i].tensp+ '</h1>\
                                    <p id="masp">Mã SP: ' +spsale[i].masp+ '</p>\
                                    <p class="gia">' +spsale[i].gia+ '<span class="giacu">2.000.000đ</span><p>\
                                    <a href="#" class="shop-item-button">Đặt mua ngay</a>\
                                    <div class="thongtin">\
                                        Màu sắc và kiểu dáng đẹp<br>\
                                        Mang đến cho thú cưng cảm giác thoải mái<br>\
                                        Phù hợp cho thú cưng nhà bạn<br>\
                                        '+spsale[i].tensp+' thường là sự lựa chọn hoàn hảo<br>\
                                    </div>\
                                </div>\
                                <div class="clear"></div>';
        }
	}
}

function xoa_dau(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}

//Xóa khoảng trắng dư thừa
function xoa_space(str) {
    str = str.replace(/  +/g, ' ');
    return str;
}

function timkiem(){
	var txttimkiem = document.getElementById("searchcontent");
	if(txttimkiem.value == ""){
		alert("Vui lòng nhập từ khóa để tìm kiếm");
	}
	else{
		txttimkiem.value = xoa_space(xoa_dau(txttimkiem.value));
		window.location.assign("timkiem.html?key="+txttimkiem.value);
	}
    return false;
}

function loadtimkiem()
{
    var key = window.location.href.split('?key=')[1].toLowerCase();
    key = key.replace(/%20/g, " "); //Đổi %20 trên thanh địa chỉ thành kí tự khoảng trắng
    var result = document.getElementById('ketqua');
    var count = 0;
    for(var i = 0; i < sp.length; i++)
    {
        if(xoa_dau(sp[i].masp.toLowerCase()).indexOf(key) != -1 || 
           xoa_dau(sp[i].tensp.toLowerCase()).indexOf(key) != -1 || 
           xoa_dau(sp[i].madv.toLowerCase()).indexOf(key) != -1 || 
           xoa_dau(sp[i].matl.toLowerCase()).indexOf(key) != -1)
        {
            count++;
            result.innerHTML += '<div class="sanpham">\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-img"><img src="'+ sp[i].hinh +'"/></a>\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-name">'+ sp[i].tensp +'</a>\
                                        <p class="gia">'+ sp[i].gia +'</p>\
                                        <p><button class="shop-item-button" value="'+sp[i].masp+'">Thêm vào giỏ</button></p>\
                                    </div>';
        }
    }
    if(count == 0)
        result.innerHTML = '<h1 style="text-align: center">KHÔNG CÓ KẾT QUẢ TÌM KIẾM</h1>';
}

/*window.addEventListener('load',Click_them_vao_gio);

function Click_them_vao_gio() {
	var add = document.getElementsByClassName('shop-item-button');
	for(var i=0; i < add.length; i++) {
		var productID = add[i];
		add[i].addEventListener('click',function() {
			saveProduct(productID);
		});
	}
}

function saveProduct(productID) {
	var Ma_sp;
	var Hinh_sp;
	var Ten_sp;
	var SoLuong_sp;
	var Gia_sp;
	var DongVat_sp;
	var TheLoai_sp;
	for(var i=0; i < sp.length; i++) {
		if(sp[i].id == productID) {
			Ma_sp = sp[i].id;
			Ten_sp = sp[i].tensp;
			Hinh_sp = sp[i].hinh;
			Gia_sp = sp[i].gia;
			SoLuong_sp = 1;
			break;
		}
	}
	var Gio_SP = {
		Ma : Ma_sp,
		Ten : Ten_sp,
		Hinh : Hinh_sp,
		Gia : Gia_sp,
		SoLuong : SoLuong_sp,
	};
	localStorage.setItem('Box_',JSON.stringify(Gio_SP));
}

function timkiem () {
	var text = document.getElementById('searchcontent');
	var sanpham = document.getElementById('spmoi');
	document.getElementsByClassName('title').innerHTML = 'Tìm kiếm';
	for(var i=0; i < sp.length; i++) {
		var temp = sp[i].tensp;
		if(temp.indexOf(text) != -1) {
			sanpham.innerHTML += '<div class="sanpham">\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-img"><img src="'+ sp[i].hinh +'"/></a>\
                                        <a href="SanPham.html?masp='+sp[i].masp+'" class="p-name">'+ sp[i].tensp +'</a>\
                                        <p class="gia">'+ sp[i].gia +'</p>\
                                        <p><button class="shop-item-button" value="'+sp[i].masp+'">Thêm vào giỏ</button></p>\
                                    </div>';
		}
		else {
			sanpham.innerHTML = "Ko tìm thấy!!!!";
		}
	}
}*/