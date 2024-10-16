// document.addEventListener('DOMContentLoaded'
// var arr = ['first', 'Second', 'Third', 'fourth', 'fifth']

// console.log(arr/length)

// var text
// var textTwo
// var textThree
// var textFour
// var textFive

// for (let i = 0; <arr.length; i++) {
//     text += arr[i]
// }

// console.log(text)

// text = arr{0}
// textTwo = arr{1}
// textThree = arr{2}
// textFour = arr{3}
// textFive = arr{4}

// console.log(text)
// console.log(textTwo)
// console.log(textThree)
// console.log(textFour)
// console.log(textFive)

// EXAMPLE 1

document.addEventListener("DOMContentLoaded", function () {
  var arr = ["first", "second", "third", "fourth", "fifth"];

  var display = document.getElementById("display");

  var text = "";

  for (let i = 0; i < arr.length; i++) {
    text += arr[i] + "<br>";
  }

  display.innerHTML = text;
});

//  EXAMPLE 2 (FOR/IN JAVASCRIPTS)
document.addEventListener("DOMContentLoaded", function () {
  var display = document.getElementById("display");
  const person = { fanme: "john", iname: "Doe", age: 25 };

  let txt = "";

  for (let x in person) {
    console.log(person[x]);
    txt += person[x] + "";
  }

  display.innerHTML = txt;
});
