

// let imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
let imgOrder = ["3", "9", "1", "7", "11", "6", "4", "8", "2", "10", "5"]


const resetBtn = document.getElementById("reset");


function shuffleImg(img) {
    for (let i = 0; i < img.length; i++) {
        const j = Math.floor(Math.random() * img.length);
        [img[i], img[j]] = [img[j], img[i]];
    }
}

window.onload = () => {

    let div = document.createElement("div");
    div.setAttribute("id", "imgContainer")
    div.setAttribute("class", "grid grid-cols-3 ")
    for (let i = 0; i < imgOrder.length; i++) {
        // img insert
        let img = document.createElement("img");
        img.setAttribute("class", "border")
        img.setAttribute("id", `img-${imgOrder[i].toString()}`)
        img.setAttribute("src", `assets/${imgOrder[i].toString()}.png`)

        div.append(img)

    }
    document.getElementById("imgBoard").append(div)

}

resetBtn.addEventListener("click", () => {
    shuffleImg(imgOrder);

    let div = document.createElement("div");
    div.setAttribute("id", "imgContainer")
    div.setAttribute("class", "grid grid-cols-3 ")

    for (let i = 0; i < imgOrder.length; i++) {


        // img insert
        let img = document.createElement("img");
        img.setAttribute("class", "border")
        img.setAttribute("id", `img-${imgOrder[i].toString()}`)
        img.setAttribute("src", `assets/${imgOrder[i].toString()}.png`)

        div.append(img)

    }
    document.getElementById("imgBoard").append(div)

    document.getElementById("reset").setAttribute("disabled", "disabled")

    console.log(imgOrder);
})

document.getElementById("clear").addEventListener("click", () => {
    const imageContaimer = document.getElementById("imgContainer")
    resetBtn.removeAttribute("disabled")
    imageContaimer.remove();
})


















































