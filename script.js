const notescontainer = document.querySelector(".note-container");
const createBtn = document.querySelector(".btn");

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";  // Fix here (className, not ClassName)
    inputBox.setAttribute("contenteditable", "true");

    img.src = "sdddg.jpg";  // Fix here (path in quotes)
    
    inputBox.appendChild(img);  // Fix here (appendChild, not appendchild)
    notescontainer.appendChild(inputBox);  // Fix here (appendChild, not appendchild)
});
