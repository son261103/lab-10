function addProduct() {
    // Lấy giá trị từ các ô nhập liệu
    var productName = document.getElementById("productName").value;
    var productPrice = document.getElementById("productPrice").value;

    // Tạo một phần tử mới để hiển thị thông tin sản phẩm
    var productItem = document.createElement("div");
    productItem.innerHTML = "<strong>" + productName + "</strong>: $" + productPrice;

    // Thêm phần tử vào danh sách sản phẩm
    document.getElementById("productList").appendChild(productItem);

    // Xóa nội dung của ô nhập liệu sau khi thêm sản phẩm
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
}
