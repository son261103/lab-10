function addProduct() {
    // Lấy giá trị từ các ô nhập liệu
    var productName = document.getElementById("productName").value.trim();
    var productDescription = document.getElementById("productDescription").value.trim();
    var productCategory = document.getElementById("productCategory").value;
    var productPrice = document.getElementById("productPrice").value.trim();
    var productQuantity = document.getElementById("productQuantity").value.trim();
    var paymentCharges = document.getElementById("paymentCharges").checked;

    // Kiểm tra điều kiện
    if (productName === "") {
        alert("Hộp Item title không được để trống");
        return;
    }

    if (productDescription === "") {
        alert("Hộp Item description không được để trống");
        return;
    }

    if (productCategory === "default") {
        alert("Item Category phải chọn một loại");
        return;
    }

    if (isNaN(productPrice) || parseFloat(productPrice) <= 0) {
        alert("Giá tiền phải là số và lớn hơn 0");
        return;
    }

    if (!Number.isInteger(parseInt(productQuantity)) || parseInt(productQuantity) <= 0 || parseInt(productQuantity) > 100) {
        alert("Hộp Quantity phải là số nguyên, không lớn hơn 100");
        return;
    }

    if (!paymentCharges) {
        alert("Bạn phải đồng ý với điều khoản thanh toán");
        return;
    }

    // Nếu tất cả điều kiện đều thỏa mãn, hiển thị trang kết quả
    var resultMessage = "Thông tin bạn đã chọn:\n" +
                        "Item Title: " + productName + "\n" +
                        "Item Description: " + productDescription + "\n" +
                        "Item Category: " + productCategory + "\n" +
                        "Giá Tiền: $" + productPrice + "\n" +
                        "Quantity: " + productQuantity;
    alert(resultMessage);
}
