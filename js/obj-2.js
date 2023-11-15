//tạo đối tượng với {}

emp ={
    fullName : '',
    email : '',
    address : '',
    gender : true,

    //ĐỊNH NGHĨA CÁC PHƯƠNG THỨC
    addInfor:function(fullName,email,address,gender){
        this.fullName = fullName;
        this.email = email;
        this.address = address;
        this.gender = gender;
    },
    printInfor:function(){
        console.log("fullName:", emp.fullName);
        console.log("email:", emp.email);
        console.log("address:", emp.address);
        console.log("gender:", emp.gender);
    }

    //sử dụng đối tượng 
    

}
emp.addInfor("sơn phạm","sonphaman@gmail.com","hải dương",true);
emp.printInfor();

//mảng đối tượng 
var arr = [];
emp.addInfor("sơn phạm","sonphaman@gmail.com","hải dương",true);
arr.push(emp);
emp.addInfor("sơn phạm1","sonphaman@gmail.com4","hải dương",true);
arr.push(emp);
emp.addInfor("sơn phạm2","sonphaman@gmail.com3","hải dương",true);
arr.push(emp);

console.log(arr);
console.log(arr.length);

arr =[];
emp1 = Object.create(emp);
emp1.addInfor("sơn phạm","sonphaman@gmail.com","hải dương",true);
arr.push(em1);
emp2 = Object.create(emp);
emp2.addInfor("sơn phạm","sonphaman@gmail.com","hải dương",true);
arr.push(emp2);
console.log(arr);
console.log("=========mảng==========")
console.log(arr.length);
