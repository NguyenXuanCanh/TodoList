var dsTask = new DSTask();
var validation = new Validation();
// localStorage.clear();
getLocalStorage();

document.getElementById("addItem").addEventListener("click", function (event) {
    event.preventDefault();
    var task = new Task();
    var name = document.getElementById("newTask").value;
    task.setName(name);

    //start check
    var isValid = true;
    isValid = validation.kiemTraRong(name, "Thêm task thất bại (rỗng)") && validation.kiemTraTrung(name, dsTask.arr, "Thêm task thất bại, task bị trùng");
    if (isValid == true) {
        dsTask.add(task);
        alert("Thêm task thành công");
        document.getElementById("newTask").value = "";
    }
    //end check

    createTable(dsTask.arr);
    console.log(dsTask.arr);
    setLocalStorage();
});

function deleteThis(name) {
    dsTask.deleteInArr(name);
    alert("Xóa task thành công");
    createTable(dsTask.arr);
    setLocalStorage();
}

function checkThis(index) {
    dsTask.arr[index].status = "complete";
    alert("Chúc mừng, task đã hoàn thành");
    createTable(dsTask.arr);
    setLocalStorage();
}

function updateTask(index) {
    document.getElementById("newTask").value = dsTask.arr[index].name;
    document.getElementById("submitBtn").style.display = "block";
    document.getElementById("submitBtn").onclick = function () {
        var isValid = true;
        if (isValid = document.getElementById("newTask").value == dsTask.arr[index].name) {
            document.getElementById("submitBtn").style.display = "none";
            document.getElementById("newTask").value = "";
            alert("Sửa thành công");
            setLocalStorage();
            return;
        }
        isValid = validation.kiemTraRong(document.getElementById("newTask").value, "Sửa task thất bại (rỗng)") && validation.kiemTraTrung(document.getElementById("newTask").value, dsTask.arr, "Sửa task thất bại, task bị trùng");
        if (isValid == true) {
            dsTask.arr[index].name = document.getElementById("newTask").value;
            createTable(dsTask.arr);
            document.getElementById("submitBtn").style.display = "none";
            document.getElementById("newTask").value = "";
            alert("Sửa thành công");
            setLocalStorage();
        }
    }
}

function createTable(arr) {
    var contentTodo = "";
    var contentComplete = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].status == "todo") {
            contentTodo += `
            <li style="position:relative">
            ${arr[i].name}
            <div style="position:absolute; right:10px;">
            <button type="submit" class="btn btn-success" onclick="updateTask('${i}')">Sửa</button>
            <i class="far fa-trash-alt" onclick="deleteThis('${dsTask.arr[i].name}')"></i>
            <i class="far fa-check-circle" onclick="checkThis('${i}')"></i>
            </div>
            </li>
        `;
        }
        if (arr[i].status == "complete") {
            contentComplete += `
            <li style="position:relative;color:#00c69a;">
            ${arr[i].name}
            <div style="position:absolute; right:10px;color:#00c69a">
            <button type="submit" class="btn btn-success" onclick="updateTask('${i}')">Sửa</button>
            <i class="far fa-trash-alt" onclick="deleteThis('${dsTask.arr[i].name}')"></i>
            <i class="far fa-check-circle"></i>
            </div>
            </li>
        `;
        }
    }
    document.getElementById("todo").innerHTML = contentTodo;
    document.getElementById("completed").innerHTML = contentComplete;
}


// lưu xuống localStorage
// chuyển kiểu JSON sang String bằng cách     JSON.stringify(arr);
function setLocalStorage() {
    var arrString = JSON.stringify(dsTask.arr);
    localStorage.setItem("Task", arrString);
}

// // get from localStorage
// // chuyển kiểu String sang JSON bằng cách     JSON.parse(arr);
function getLocalStorage() {
    if (JSON.parse(localStorage.getItem("Task"))) {
        dsTask.arr = JSON.parse(localStorage.getItem("Task"));
        createTable(dsTask.arr);
    }
}