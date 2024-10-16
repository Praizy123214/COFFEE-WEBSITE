// document.addEventListener("DOMContentLoaded", ()=> {
//     var display = document.getElementById('display')

//     var txt = ""

//     for (var i = 0; i < 10; i++) {
//         txt += i + "<br />"
//     }

//     display.innerHTML = txt
// })

//   FOR OF LOOP
document.addEventListener("DOMContentLoaded", ()=> {

    const cars = ["BMW", "Volvo", "Mini"]

    let text = "";

    for (let x of cars) {
        text += x + ", ";
    }

    console.log(text)
})
