let leftBox = document.getElementById("left");
let rightBox = document.getElementById("right");
let lists = document.getElementsByClassName("list");

for(let list of lists){
    list.addEventListener("dragstart", (e)=>{
        let selected = e.target;

        rightBox.addEventListener("dragover", (e)=>{
            e.preventDefault();
        });
        rightBox.addEventListener("drop", (e)=>{
            rightBox.appendChild(selected);
            selected = null;
        })
        leftBox.addEventListener("dragover", (e)=>{
            e.preventDefault();
        });
        leftBox.addEventListener("drop", (e)=>{
            leftBox.appendChild(selected);
            selected = null;
        })
    })
}