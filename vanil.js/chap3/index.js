
/**
 * document also object
 * DOM : Document Object Module
 * js는 html에 있는 모든 요소를 가져오고 그리고 객체로 변환한다
 *
 * 내 패이지에서 자바스크립틀 선택한 거는 객체가 된다.
 */


//console.log(document);
//const title = document.getElementById("title");

//querySelector는 노드의 첫번째 자식을 반환
//const title = document.querySelector(".title"); //find class 
const title = document.querySelector("#title"); //find id 
title.innerHTML = "HI! From JS";
title.style.color = 'red';
document.title = "I own you now";

console.dir(title);


/*
 * Events and event handlers
 * js는 이벤트에 반응하기 위해 만들어졌다
 * 이벤트: 웹사이트에서 발생하는 것
 */

function handleResize(event){
    console.log(event);

}

// window.addEventListener("resize",handleResize());// handelResize() 지금 바로 호출
//window.addEventListener("resize",handleResize); //handleResize 함수를 호출, 내가 필요한 시점에
function handleClick(){
    title.style.color =  "blue";
}
title.addEventListener("click",handleClick);