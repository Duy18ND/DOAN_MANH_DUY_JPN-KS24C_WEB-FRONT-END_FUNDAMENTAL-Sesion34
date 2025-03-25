let btnSubmitElement = document.querySelector("#btnSubmit");

let list = JSON.parse(sessionStorage.getItem("userList")) || [];
let count = sessionStorage.getItem("count") ? Number(sessionStorage.getItem("count")) : 1;

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
        let newUser = {
            id: count,
            email: emailElement,
            password: passwordElement,
        };

        list.push(newUser);
        sessionStorage.setItem("userList", JSON.stringify(list));

        alert("Đăng ký thành công!");

        count++;
        sessionStorage.setItem("count", count);

        let container1 = document.getElementById("container1");
        container1.style.display = "none";
        let container2 = document.getElementById("container2");
        container2.style.display = "flex";
    }
};

// Xử lý đăng nhập
let btnLoginElement = document.querySelector("#btnLogin");

btnLoginElement.onclick = function () {
    let emailElement = document.getElementById("loginEmail").value.trim();
    let passwordElement = document.getElementById("loginPassword").value.trim();

    let userList = JSON.parse(sessionStorage.getItem("userList"));

    let foundUser = userList.find(user => user.email === emailElement && user.password === passwordElement);

    if (foundUser) {
        alert("Đăng nhập thành công!");
        console.log("User:", foundUser);
    } else {
        alert("Email hoặc mật khẩu không đúng!");
    }
};
