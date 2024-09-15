function input1(val){
   document.getElementById("input").value += val
}
function solve(){
   let x = document.getElementById("input").value
   let y = eval(x)
   document.getElementById('input').value = y

   //  return y
    
}
// console.log(solve)
function clearScreen(){
   document.getElementById("input").value = '' 
}
function delNum(){
   let deletNum = document.getElementById("input").value
   let deletNums = deletNum.slice(0 , -1);
   document.getElementById('input').value = deletNums
   // console.log(deletNums)
}
// console.log(delNum)
