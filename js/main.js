//create close and add


function addClose(){
    let lilist=document.getElementsByTagName("li");
    [...lilist].forEach(elem=> {
        let closeSpan=createClose();
        elem.appendChild(closeSpan)
    })
}
function createClose(){
    let elem=document.createElement("span");
    elem.classList.add("close");
    elem.innerText='x';
    return elem;
}


//Add items
let addBtn = document.querySelector(".addBtn");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

addBtn.addEventListener("click", function (e) {
    let newLi = document.createElement("li");
    newLi.innerText = input.value;
    newLi.onclick = e=>taskClick(e.target);
    let closeSpan = createClose();
    closeSpan.onclick = function(e){
        close(e.target)
    }
    newLi.appendChild(closeSpan);
    ul.appendChild(newLi);
})

//delete items

document.querySelectorAll(".close").forEach(elem =>{
    elem.addEventListener("click",function(e){
        close(elem)
    })
})

document.querySelectorAll("li").forEach(elem =>{
    elem.addEventListener("click",function(e){
        taskClick(elem)
    })
})

function close(elem){
    elem.parentElement.remove();
}

function taskClick(elem){
    elem.classList.toggle("checked")
}