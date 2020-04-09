var foo=0;
var value=0;//making it global variable
function addseven(){
  var foo=document.getElementById('thisseven').innerHTML;
  while(value<100){
  value++;
  document.getElementById('thisseven').innerHTML=value;     
}
}
function subseven(){
  var foo=document.getElementById('thisseven').innerHTML;
  value--;
  document.getElementById('thisseven').innerHTML=value;
}