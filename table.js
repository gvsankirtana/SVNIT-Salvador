var foo=0;
var value=((foo+1)/100)*365;//making it global variable
function addone(){
  var foo=document.getElementById('thisone').innerHTML;
  var i;
  for(i=0;value>=0;i++){
  document.getElementById('thisone').innerHTML=value;
  value++;
  }
}
function subone(){
  var foo=document.getElementById('thisone').innerHTML;
  var i;
  for(i=0;value>=0;i++){
  document.getElementById('thisone').innerHTML=value;
  value--;
  }
}