const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));//JSON.stringify js object를 string으로 바꿔준다.
}

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode   ;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter((toDo,idx)=>{
        return toDo.id !== parseInt(li.id);
    });
    cleanToDos.map((toDo,idx)=>{toDo.id = idx+1;});
    toDos = cleanToDos;
    saveToDos();
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click",deleteToDo);
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
            paintToDo(toDo.text);
        });
    } 
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
    
}

init();