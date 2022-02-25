var firstNum;
var secondNum;
var selectValue;

function handleClick() {
    firstNum=parseInt(document.getElementById("firstNum").value);
    secondNum=parseInt(document.getElementById("secondNum").value);
    var result;

if(selectValue = "add") {
	result = parseInt(firstNum + secondNum);
} else if(selectValue = "subtract") {
	result = parseInt(firstNum - secondNum);
} else if(selectValue = "multiply") {
	result = parseInt(firstNum * secondNum);
} else {
	result = parseInt(firstNum/secondNum);
}

var output=document.getElementById("result");
output.value=result;
}

function setValue() {
    selectValue=document.getElementById("opList").value;
}

function init() {
    var button=document.getElementById("button");
    button.onclick=handleClick;
}

window.onload = init;