// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

//highlight current page on nav
  const nav = document.getElementById("myTopnav");
  const navButtons = nav.getElementsByClassName("navButton");

  for (let i = 0; i < navButtons.length; i++) {
      navButtons[i].addEventListener("click", function() {
          let current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
      })
  }