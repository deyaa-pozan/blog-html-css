// Timer
setTimeout(ask_user, 3000)

// prompt to user for ask if he want change color
function ask_user() {
  var con = confirm("Do you want to change the background color of the website?")
  if (con) {
    choose_color()
  }
}

// choose color 
function changeBackground(color) {

  if (color == "red" || color == "blue" || color == "white" || color == "green" || color == null) {

    document.body.style.background = color;

  } else {

    alert("Please enter the following colors only ( red , blue , white , green)")

    choose_color()

  }

}

// if color not available
function choose_color() {

  var prom = prompt("What color do you want? ( red , blue , white , green)")

  changeBackground(prom)

}