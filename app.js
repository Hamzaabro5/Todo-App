const input = document.querySelector(`#input-bar`)
const ol = document.querySelector(`.ol`)
const arr = []

function renderTodo() {
    
    ol.innerHTML = ``
    
   for (let i = 0; i < arr.length; i++) {
    ol.innerHTML += `<ol>${arr[i]}
    <button type="button" class="btn btn-danger text-align-center" onclick="deleteTodo(${i})">Delete</button>
    <button type="button" class="btn btn-success" onclick = "editTodo(${i})">Edit</button>
    </ol>`
    
   }
}

function addTask() {
    
    arr.push(input.value)
    console.log(arr);
    renderTodo()
    input.value = ``
}

function deleteTodo(index) {
    arr.splice(index, 1)
    renderTodo()
}

function editTodo(index) {
    const updatevalue = prompt(`Enter Your Updated Value?`)
    arr.splice(index, 1, updatevalue)
    renderTodo()
}