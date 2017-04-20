/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdown() {
    document.getElementById("bMDrop").classList.toggle("show");
}

function send(){
  var textBox=document.getElementbyId("textArea");
  var text = document.getElementById("tBox").value ;
  textBox.value= textBox.value + text;
}

    function handle(e){
        if(e.keyCode === 13){
            e.preventDefault(); // Ensure it is only this code that rusn

  var textBox=document.getElementById("textArea");
  var text = document.getElementById("tBox").value ;
  textBox.value= textBox.value + text +"\n";
  document.getElementById("tBox").value="";
        }
    }

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("bMDrop");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}