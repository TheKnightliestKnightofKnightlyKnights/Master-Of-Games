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

function selectMap(){
  var imageLoader = document.getElementById('theFile');
    imageLoader.addEventListener('change', handleImage, false);
   var canvas = document.getElementById('canvas');
   var ctx = canvas.getContext('2d');


function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img,0,0);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
    }
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

function diceRoll20(){
  var profi = parseFloat(document.getElementById("prof").value);
  var attrBonus = parseFloat(document.getElementById("attriBonus").value);
  var textBox=document.getElementById("textArea");
  var base= Math.floor(Math.random()*20)+1;
  var final = base+profi+attrBonus;
  var text = "Base Roll: "+base+" Final Result: "+final;
  textBox.value= textBox.value + text +"\n";
}

function diceRoll(){
  var attrBonus = parseFloat(document.getElementById("attriBonus").value);
  var numDice = parseFloat(document.getElementById("diceN").value);
  var numSides = parseFloat(document.getElementById("diceS").value);
  var finalDice = 0;
  for(i=0;i<numDice;i++)
  {
    finalDice+=Math.floor(Math.random()*numSides)+1;
  }
  var final = finalDice+attrBonus;
  var textBox=document.getElementById("textArea");
  var text = ""+numDice+" d"+numSides+" = "+final;
  textBox.value= textBox.value + text +"\n";
}

function performClick(elemId) {
   var elem = document.getElementById(elemId);
   if(elem && document.createEvent) {
      var evt = document.createEvent("MouseEvents");
      evt.initEvent("click", true, false);
      elem.dispatchEvent(evt);
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
};