// detecting button press
// 找出一共有多少个按键
var numberofButtons = document.querySelectorAll(".drum").length;

// 一个for loop重复这个行为
for (var i = 0; i < numberofButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      var buttoninnerhtml = this.innerHTML;
      makeSound(buttoninnerhtml);
buttonAnimation(buttoninnerhtml);
  });
}
// detecting keyborad press
document.addEventListener("keydown", function() {
  makeSound(event.key);
  buttonAnimation(event.key);

});

function makeSound(key) {
  // switch statement

  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "k":
      var kickbass = new Audio('sounds/kick-bass.mp3');
      kickbass.play();
      break;
    case "l":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    default:
}
  }
  function buttonAnimation(currentKey){
  var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}
