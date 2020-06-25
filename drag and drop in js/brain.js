// alert("Bingo")
const imgBox = document.querySelector(".imgBox");
const WhiteBox = document.querySelectorAll(".whitebox");


imgBox.addEventListener("dragstart",(e) => {
    // imgBox.classList.add("shadow")
    setTimeout(() => {
        e.target.classList.add("hide");
    }, 0);
})
imgBox.addEventListener("dragend",(e) => {
    console.log("Dragend has been triggered");
    e.target.classList.remove("hide");
})

WhiteBox.forEach(item => {
    item.addEventListener('dragover' ,(e) => {
        e.preventDefault();
        
    });
    item.addEventListener('dragenter' ,() => {
        item.classList.add("enter")

    });
    item.addEventListener('dragleave' ,() => {
        item.classList.remove("enter")

    });
    item.addEventListener('drop' ,(e) => {
        e.target.appendChild(imgBox)
        item.classList.remove("enter")
    });
})