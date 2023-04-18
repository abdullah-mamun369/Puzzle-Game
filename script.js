const up = document.getElementById("up")
const down = document.getElementById("down")
const right = document.getElementById("right")
const left = document.getElementById("left")
const keyboard = document.getElementById("keyboard")
const imageBoard = document.getElementById("imgBoard");
const whiteImage = document.getElementById("img-9")

// let imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
let imgOrder = ["3", "9", "1", "7", "6", "4", "8", "5", "2"]



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
    imageBoard.append(div)

}

resetBtn.addEventListener("click", () => {

    imageBoard.innerHTML = "";

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
    imageBoard.append(div)

    console.log(imgOrder);
})



// function moveImage(direction) {
//     let indexOfWhiteImage = imgOrder.indexOf("9");
//     if (direction === "up") {
//         if (indexOfWhiteImage >= 3 && indexOfWhiteImage < 9) {
//             [imgOrder[indexOfWhiteImage], imgOrder[indexOfWhiteImage - 3]] = [imgOrder[indexOfWhiteImage - 3], imgOrder[indexOfWhiteImage]]
//             console.log(imgOrder);
//         }
//     }
//     if (direction === "right") {
//         if (indexOfWhiteImage >= 0 && indexOfWhiteImage < 8) {
//             [imgOrder[indexOfWhiteImage], imgOrder[indexOfWhiteImage + 1]] = [imgOrder[indexOfWhiteImage + 1], imgOrder[indexOfWhiteImage]]
//             console.log(imgOrder);
//         }
//     }
//     if (direction === "down") {
//         if (indexOfWhiteImage >= 0 && indexOfWhiteImage < 6) {
//             [imgOrder[indexOfWhiteImage], imgOrder[indexOfWhiteImage + 3]] = [imgOrder[indexOfWhiteImage + 3], imgOrder[indexOfWhiteImage]]
//             console.log(imgOrder);
//         }
//     }
//     if (direction === "left") {
//         if (indexOfWhiteImage > 0 && indexOfWhiteImage < 9) {
//             [imgOrder[indexOfWhiteImage], imgOrder[indexOfWhiteImage - 1]] = [imgOrder[indexOfWhiteImage - 1], imgOrder[indexOfWhiteImage]]
//             console.log(imgOrder);
//         }
//     }
// }


function moveImage(direction) {
    let indexOfWhiteImage = imgOrder.indexOf("9");
    if (direction === "up") {
        if (indexOfWhiteImage >= 3 && indexOfWhiteImage < 9) {

            [imgOrder[indexOfWhiteImage], imgOrder[indexOfWhiteImage - 3]] = [imgOrder[indexOfWhiteImage - 3], imgOrder[indexOfWhiteImage]]
            console.log(imgOrder);

            let whiteImage = document.getElementById(`img-${imgOrder[indexOfWhiteImage]}`)
            let replacedImage = document.getElementById(`img-${imgOrder[indexOfWhiteImage - 3]}`)


            whiteImage.setAttribute("class", "border")
            whiteImage.setAttribute("id", `img-${imgOrder[indexOfWhiteImage - 3]}`)
            whiteImage.setAttribute("src", `assets/${imgOrder[indexOfWhiteImage - 3]}.png`)



            replacedImage.setAttribute("class", "border")
            replacedImage.setAttribute("id", `img-${imgOrder[indexOfWhiteImage]}`)
            replacedImage.setAttribute("src", `assets/${imgOrder[indexOfWhiteImage]}.png`)

            console.log(whiteImage);
            console.log(replacedImage);


        }
    }
    if (direction === "right") {
        if (indexOfWhiteImage >= 0 && indexOfWhiteImage < 8) {

            [imgOrder[indexOfWhiteImage], imgOrder[indexOfWhiteImage + 1]] = [imgOrder[indexOfWhiteImage + 1], imgOrder[indexOfWhiteImage]]
            console.log(imgOrder);

            let whiteImage = document.getElementById(`img-${imgOrder[indexOfWhiteImage]}`)
            let replacedImage = document.getElementById(`img-${imgOrder[indexOfWhiteImage + 1]}`)


            whiteImage.setAttribute("class", "border")
            whiteImage.setAttribute("id", `img-${imgOrder[indexOfWhiteImage + 1]}`)
            whiteImage.setAttribute("src", `assets/${imgOrder[indexOfWhiteImage + 1]}.png`)



            replacedImage.setAttribute("class", "border")
            replacedImage.setAttribute("id", `img-${imgOrder[indexOfWhiteImage]}`)
            replacedImage.setAttribute("src", `assets/${imgOrder[indexOfWhiteImage]}.png`)





        }
    }
    if (direction === "down") {
        if (indexOfWhiteImage >= 0 && indexOfWhiteImage < 6) {
            [imgOrder[indexOfWhiteImage], imgOrder[indexOfWhiteImage + 3]] = [imgOrder[indexOfWhiteImage + 3], imgOrder[indexOfWhiteImage]]
            console.log(imgOrder);

            let whiteImage = document.getElementById(`img-${imgOrder[indexOfWhiteImage]}`)
            let replacedImage = document.getElementById(`img-${imgOrder[indexOfWhiteImage + 3]}`)


            whiteImage.setAttribute("class", "border")
            whiteImage.setAttribute("id", `img-${imgOrder[indexOfWhiteImage + 3]}`)
            whiteImage.setAttribute("src", `assets/${imgOrder[indexOfWhiteImage + 3]}.png`)



            replacedImage.setAttribute("class", "border")
            replacedImage.setAttribute("id", `img-${imgOrder[indexOfWhiteImage]}`)
            replacedImage.setAttribute("src", `assets/${imgOrder[indexOfWhiteImage]}.png`)



        }
    }
    if (direction === "left") {
        if (indexOfWhiteImage > 0 && indexOfWhiteImage < 9) {
            [imgOrder[indexOfWhiteImage], imgOrder[indexOfWhiteImage - 1]] = [imgOrder[indexOfWhiteImage - 1], imgOrder[indexOfWhiteImage]]

            let whiteImage = document.getElementById(`img-${imgOrder[indexOfWhiteImage]}`)
            let replacedImage = document.getElementById(`img-${imgOrder[indexOfWhiteImage - 1]}`)


            whiteImage.setAttribute("class", "border")
            whiteImage.setAttribute("id", `img-${imgOrder[indexOfWhiteImage - 1]}`)
            whiteImage.setAttribute("src", `assets/${imgOrder[indexOfWhiteImage - 1]}.png`)



            replacedImage.setAttribute("class", "border")
            replacedImage.setAttribute("id", `img-${imgOrder[indexOfWhiteImage]}`)
            replacedImage.setAttribute("src", `assets/${imgOrder[indexOfWhiteImage]}.png`)



            console.log(imgOrder);
        }
    }
}

// listen for arrow key events
document.addEventListener("keydown", function (event) {
    // console.log(event);
    if (event.code === "ArrowUp") {
        moveImage("up");
    }
    if (event.code === "ArrowRight") {
        moveImage("right");
    }
    if (event.code === "ArrowDown") {
        moveImage("down");
    }
    if (event.code === "ArrowLeft") {
        moveImage("left");
    }
});



















































// const up = document.getElementById("up")
// const down = document.getElementById("down")
// const right = document.getElementById("right")
// const left = document.getElementById("left")
// const start = document.getElementById("start")
// const keyboard = document.getElementById("keyboard")

// // let imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
// let imgOrder = ["3", "9", "1", "7", "11", "6", "4", "8", "2", "10", "5", "0"]


// const resetBtn = document.getElementById("reset");


// function shuffleImg(img) {
//     for (let i = 0; i < img.length; i++) {
//         const j = Math.floor(Math.random() * img.length);
//         [img[i], img[j]] = [img[j], img[i]];
//     }
// }

// window.onload = () => {

//     let div = document.createElement("div");
//     div.setAttribute("id", "imgContainer")
//     div.setAttribute("class", "grid grid-cols-3 ")
//     for (let i = 0; i < imgOrder.length; i++) {
//         // img insert
//         let img = document.createElement("img");
//         img.setAttribute("class", "border")
//         img.setAttribute("id", `img-${imgOrder[i].toString()}`)
//         img.setAttribute("src", `assets/${imgOrder[i].toString()}.png`)

//         div.append(img)

//     }
//     document.getElementById("imgBoard").append(div)

// }

// resetBtn.addEventListener("click", () => {
//     shuffleImg(imgOrder);

//     let div = document.createElement("div");
//     div.setAttribute("id", "imgContainer")
//     div.setAttribute("class", "grid grid-cols-3 ")

//     for (let i = 0; i < imgOrder.length; i++) {


//         // img insert
//         let img = document.createElement("img");
//         img.setAttribute("class", "border")
//         img.setAttribute("id", `img-${imgOrder[i].toString()}`)
//         img.setAttribute("src", `assets/${imgOrder[i].toString()}.png`)

//         div.append(img)

//     }
//     document.getElementById("imgBoard").append(div)

//     document.getElementById("reset").setAttribute("disabled", "disabled")

//     console.log(imgOrder);

//     const image = document.getElementById("img-1")
//     console.log(image);

//     start.removeAttribute("class", "hidden")
//     start.setAttribute("class", "text-xl text-white hover:bg-red-600 px-5 py-1 border hover:border-red-500 rounded-lg transition duration-300 ease-in-out mb[-20px]")

// })

// document.getElementById("clear").addEventListener("click", () => {
//     const imageContaimer = document.getElementById("imgContainer")
//     resetBtn.removeAttribute("disabled")
//     imageContaimer.remove();

//     start.setAttribute("class", "hidden")
//     keyboard.setAttribute("class", "hidden")

// })



// start.addEventListener("click", () => {
//     start.setAttribute("class", "hidden")
//     keyboard.removeAttribute("class", "hidden")




// })




































































































