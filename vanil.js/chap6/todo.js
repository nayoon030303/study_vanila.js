const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));//JSON.stringify js object를 string으로 바꿔준다.
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    const newID = toDos.length+1;
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newID;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newID
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();//동작이 중단된다. 
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        //JSON : JavaScript Object Notation
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach((toDo)=>{
            console.log(toDo.text);
            paintToDo(toDo.text);
        });
    } 
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
    
}

init();