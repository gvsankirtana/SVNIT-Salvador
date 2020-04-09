var foo=0;
var value=0;//making it global variable
function addone(){
  var foo=document.getElementById('thisone').innerHTML;
  value++;
  document.getElementById('thisone').innerHTML=value; 
  if(value==101){
  subone(foo);
}    
}
function subone(){
  var foo=document.getElementById('thisone').innerHTML;
  value--;
  document.getElementById('thisone').innerHTML=value;
}