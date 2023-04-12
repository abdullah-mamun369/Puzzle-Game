
const rows = 3;
const cols = 4;

// let imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
let imgOrder = ["3", "9", "1", "7", "11", "6", "4", "8", "2", "10", "5", "12"]

window.onload = () => {
    for (let i = 0; i < imgOrder.length; i++) {

        // img insert
        let img = document.createElement("img");
        img.id = "img" + "-" + imgOrder[i].toString();
        img.src = "assets/" + imgOrder[i].toString() + ".png"

        // Drag
        img.addEventListener("dragStart", dragStart)
        img.addEventListener("dragOver", dragOver)
        img.addEventListener("dragEnter", dragEnter)
        img.addEventListener("dragLeave", dragLeave)
        img.addEventListener("dropDrop", dropDrop)
        img.addEventListener("dragEnd", dragEnd)

        document.getElementById("imgBoard").append(img)
    }
}