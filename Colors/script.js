var index = 0;

function changeColor() { 
  var colors = ["Yellow", "Red", "Pink", "Blue", "Orange", "Violet", "Green"];
  
  document.getElementsByTagName("body")[0].style.background = colors[index++];
  
  if(index > colors.length -1)
    index = 0;
  }
  
  document.getElementById("btn");
  addEventListener("click", changeColor);