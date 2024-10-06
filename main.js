
let array = []
function todo_button(){
    let inputElement1 = document.querySelector('.input_name')
    const inputValue1 = inputElement1.value
    let inputElement2 = document.querySelector('.input_date')
    const inputValue2 = inputElement2.value
    let todo_jsElement = document.querySelector('.todo_js')

    array.push({'name': inputValue1, 'date': inputValue2})
    let pumpkin = ''
    for(i = 0; i < array.length; i++){
        pumpkin += `<div>${array[i].name}</div>
        <div>${array[i].date}</div>
        <div><button>Delete</button></div>`
    }
    todo_jsElement.innerHTML = pumpkin
}