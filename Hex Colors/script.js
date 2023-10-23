var index = 0
var colors = ["Violet", "Blue", "Orange", "Green", "Yellow", "Pink"]

function changeColor() { 
  var bgColor = document.getElementsByTagName("body")[0].style.background = colors[index++];

    if (index > colors.length -1) 
      index = 0
}

document.getElementById("btn")
addEventListener("click", changeColor)