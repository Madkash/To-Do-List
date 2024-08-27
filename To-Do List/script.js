const myInput = document.getElementById("myBox");
const myList = document.getElementById("listContainer");

function addTask(){
    if(myInput.value == ""){
        window.alert("You must type something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = myInput.value;
        myList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    myInput.value  = "";
    saveData();
}

myList.addEventListener("click", function(e){
    if (e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", myList.innerHTML);
}
function showTask(){
    myList.innerHTML = localStorage.getItem("data");
}
showTask();