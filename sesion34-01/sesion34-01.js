let btnSubmitElement = document.querySelector("#btnSubmit");

let list = [];
let count = 1;

btnSubmitElement.onclick = function () {
    let emailElement = document.querySelector("#email").value.trim();
    let passwordElement = document.querySelector("#password").value.trim();
    let confirmPasswordElement = document.querySelector("#confirmPassword").value.trim();

    if (emailElement.length === 0 || !emailElement.includes("@") || !emailElement.includes(".")) {
        return alert("Gmail của bạn không hợp lệ, vui lòng nhập lại");
    } else if (passwordElement === "") {
        return alert("Mật khẩu của bạn đang trống!");
    } else if (passwordElement !== confirmPasswordElement) {
        return alert("Xác nhận mật khẩu lần 2 không đúng!");
    } else {
        // Tạo object user
        let newStorage = {
            id: count,
            email: emailElement,
            password: passwordElement,
        };

        list.push(newStorage);

        sessionStorage.setItem("userList", JSON.stringify(list));

        alert("Đăng ký thành công!");

        count++;
    }
};
