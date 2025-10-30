
let text = localStorage.getItem("text")
let img = localStorage.getItem("img")

let img2 = `<img src="${img}" class="w-100">`
document.getElementById("img_f").innerHTML = img2
document.getElementById("text2").innerHTML = text