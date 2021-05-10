//document also object
//console.log(document);


//const title = document.getElementById("title");

//querySelector는 노드의 첫번째 자식을 반환
//const title = document.querySelector(".title"); //find class 
const title = document.querySelector("#title"); //find id 
title.innerHTML = "HI! From JS";
title.style.color = 'red';
document.title = "I own you now";

console.dir(title);

/**
 * DOM : Document Object Module
 * js는 html에 있는 모든 요소를 가져오고 그리고 객체로 변환한다
 *
 * 내 패이지에서 자바스크립틀 선택한 거는 객체가 된다.
 */