var regx = /xin chào/;
var str ="chào mừng bạn đến với";
if(regx.test(str)){
    console.log(str,"có chứ chào mừng bạn");
}
else{
    console.log(str,"không có chứa chào mừng bạn")
}

regx = /n+/;
if(regx.test("hello")){
    console.log("khôn chưa ký tự n");
}
else{
    console.log("có chứa ký tự n");
}