//làm việc với đối tượng trong javascript
//cách 1
var emp = new Object();
// định nghĩa thuộc tính

emp.fullName = '';
emp.email = '';
emp.address = '';
emp.gender = true;

//định nghĩa các phương thức
emp.add = function(fullName,email,address,gender){
    emp.fullName = fullName;
    emp.email = email;
    emp.address = address;
    emp.gender = gender;
}

emp.printInfor = function(){
    console.log("fullName:", emp.fullName);
    console.log("email:", emp.email);
    console.log("address:", emp.address);
    console.log("gender:", emp.gender);
}

//gán giá trị cho thuộc tính
//gọi thực hiện phương thức

emp.add("sơn phạm","sonphaman@gmail.com","hải dương",true);
emp,printInfor();

//mảng đối tượng 
var arr = [
    emp.add("sơn phạm","sonphaman@gmail.com","hải dương",true),
    emp.add("xuan","sonphaman@gmail.com.vn","hải phòng",true),
]

for (let i = 0 ; i< arr.length;i++){
    const element = arr[i];
}