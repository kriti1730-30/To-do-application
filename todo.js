const inputbox=document.getElementById("input-box")
const listcontainer= document.getElementById("list-container")

function addtask() {
    if (inputbox.value ==''){
        alert("You must write something")

    }else{
        let li=document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";


        li.appendChild(span);
    }
    inputbox.value = "";
    SaveData();
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        SaveData();
    }else if(e.target.tagName =="SPAN"){
        e.target.parentElement.remove();
        SaveData();
    }
}, false);

function SaveData(){
    localStorage.setItem("data", listcontainer.innerHTML)
    console.log("data");
}

function showtask(){
    listcontainer.innerHTML= localStorage.getItem("data");
}
showtask();