

// let imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
let imgOrder = ["3", "9", "1", "7", "11", "6", "4", "8", "2", "10", "5"]

for (let i = 0; i < imgOrder.length; i++) {

    // img insert
    let img = document.createElement("img");
    img.setAttribute("class", "border")
    img.setAttribute("id", `img-${imgOrder[i].toString()}`)
    img.setAttribute("src", `assets/${imgOrder[i].toString()}.png`)

    document.getElementById("imgBoard").append(img)
    // Drag
}



window.onload = () => {
    // for (let i = 0; i < imgOrder.length; i++) {

    //     // img insert
    //     let img = document.createElement("img");
    //     // img.id = "img" + "-" + imgOrder[i].toString();
    //     // img.src = "assets/" + imgOrder[i].toString() + ".png"
    //     img.setAttribute("class", "border")
    //     img.setAttribute("id", `img-${imgOrder[i].toString()}`)
    //     img.setAttribute("src", `assets/${imgOrder[i].toString()}.png`)

    //     document.getElementById("imgBoard").append(img)
    //     // Drag
    //     document.getElementById("reset").addEventListener("click", () => {

    //     })

    // }
}