$(document).ready(function(){

$('#pButton').click(function Start(){
  $('body').addClass('oHotel');
  $('#pButton').hide();
  $('#subt').hide();
});
  
function Start(){
  var strength = 0;
  var intelligence = 0;
  var speed = 0;
  var health = 0;
  var fuel = 3;
  
  var role = prompt("There are 3 roles: Scavenger, assassin, or rebel. The scavenger is crafty, and has a good mix of all stats. The assassin is quick and powerful, but is quite frail. The rebel is strong and sturdy, but is quite slow, and not the smartest. So which shall you choose? Scavenger, assassin or rebel?").toLowerCase();
  if (role === "scavenger"){
    var strength = 5;
    var intelligence = 7;
    var speed = 7;
    var health = 5;
    alert("You've picked Scavenger!")
  }
  else if (role === "assassin"){
    var strength = 8;
    var intelligence = 6;
    var speed = 7;
    var health = 3;
    alert("You've picked Assassin!")
  }
  else if (role === "rebel"){
    var strength = 7;
    var intelligence = 4;
    var speed = 5;
    var health = 8;
    alert("You've picked Rebel!")
  }
  else{
    alert("That is not a valid role!");
    Start();
  }
}
  
  
});//closing bracket for document.ready. This goes at the very bottom of ALL your code!