var sum = 0;

function f(val){
  sum += val;
  document.getElementById("total").value = sum;
}
function reset(){
  sum = 0;
  document.getElementById("total").value = sum;
}
