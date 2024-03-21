const input = document.querySelector(`#input-bar`)
const list = document.querySelector(`.li`)


function addTask() {
    if (input.value == ``) {
        alert(`Please Enter Your Task `)
    } else {
       list.innerHTML = input.value
       input.value = ``
    }
}