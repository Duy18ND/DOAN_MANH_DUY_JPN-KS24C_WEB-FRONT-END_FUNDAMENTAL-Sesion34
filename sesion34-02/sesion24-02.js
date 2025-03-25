const courses = [
    {
        id: 1,
        content: 'Learn Javascript Session 01',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Anh Bách',
    },
    {
        id: 2,
        content: 'Learn Javascript Session 2',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Lâm th',
    },
    {
        id: 3,
        content: 'Learn CSS Session 1',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Hiếu Ci Ớt Ớt',
    },
];

let count = courses.length > 0 ? courses[courses.length - 1].id + 1 : 1;
let containerContentElement = document.getElementById("containerContent");
let btnSubmitElement = document.getElementById("btnSubmit");

function displayCourses() {
    containerContentElement.innerHTML = "";
    courses.forEach((course, index) => {
        let html = `
        <div class="containerList">
            <p>${course.id}</p>
            <p>${course.content}</p>
            <p>${course.dueDate}</p>
            <p>${course.status}</p>
            <p>${course.assignedTo}</p>
            <button class="btnModify" onclick="editCourse(${index})">Sửa</button>
            <button class="btnErase" onclick="deleteCourse(${index})">Xóa</button>
        </div>
        `;
        containerContentElement.innerHTML += html;
    });
}

displayCourses();

btnSubmitElement.onclick = function () {
    let contentElement = document.getElementById("Content");
    let dateElement = document.getElementById("date");
    let selectInputElement = document.getElementById("selectInput");
    let userNameElement = document.getElementById("userName");

    if (contentElement.value.trim() === "") {
        return alert("Vui lòng nhập content");
    }
    if (dateElement.value.trim() === "") {
        return alert("Vui lòng nhập ngày");
    }
    if (selectInputElement.value === "Choose status") {
        return alert("Vui lòng chọn trạng thái");
    }
    if (userNameElement.value.trim() === "") {
        return alert("Vui lòng nhập tên người được giao");
    }

    let newCourse = {
        id: count++,
        content: contentElement.value,
        dueDate: dateElement.value,
        status: selectInputElement.value,
        assignedTo: userNameElement.value,
    };

    courses.push(newCourse);
    displayCourses();

    contentElement.value = "";
    dateElement.value = "";
    selectInputElement.value = "Choose status";
    userNameElement.value = "";
};

function editCourse(index) {
    let course = courses[index];

    let newContent = prompt("Nhập nội dung mới:", course.content);
    let newDueDate = prompt("Nhập ngày mới:", course.dueDate);
    let newStatus = prompt("Nhập trạng thái mới (Pending / Resolved):", course.status);
    let newAssignedTo = prompt("Nhập người được giao mới:", course.assignedTo);

    if (newContent) course.content = newContent;
    if (newDueDate) course.dueDate = newDueDate;
    if (newStatus) course.status = newStatus;
    if (newAssignedTo) course.assignedTo = newAssignedTo;

    displayCourses();
}

function deleteCourse(index) {
    let confirmDelete = confirm("Bạn có chắc chắn muốn xóa khóa học này?");
    if (confirmDelete) {
        courses.splice(index, 1);
        displayCourses();
    }
}
