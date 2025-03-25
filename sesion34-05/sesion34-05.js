let products = JSON.parse(localStorage.getItem("products")) || [];
let count = 1;

function addList() {
    let usernameElement = document.getElementById("username").value.trim();
    let positionElement = document.getElementById("position").value.trim();
    let tableBody = document.getElementById("employeeTable");

    if (usernameElement === "" || positionElement === "") {
        return alert("Dữ liệu không được để trống!");
    }

    let newProduct = {
        id: ++count,
        name: usernameElement,
        position: positionElement,
    };

    products.push(newProduct);

    let row = `
        <tr>
            <td>${newProduct.id}</td>
            <td>${newProduct.name}</td>
            <td>${newProduct.position}</td>
        </tr>
    `;
    localStorage.setItem("products", JSON.stringify(products));
    tableBody.insertAdjacentHTML("beforeend", row);
    document.getElementById("username").value = "";
    document.getElementById("position").value = "";
}
