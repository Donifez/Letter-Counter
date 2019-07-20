// function counting() {
//     var count = "ffff";
//     var countArray = count.split('');
   
//     for (var i = 0; i < countArray.length; i++) {
//       var counted = 0;
//       for (var j = 0; j < countArray.length; j++) {
//         if (countArray[i] === countArray[j]) {
//           counted++;
//         }
//         else{
//            counted; 
//         }
//       }

//     } 
//     alert(count);
// }

//   document.addEventListener('keypress', event => {
//     if (event.keyCode === 13) {
//       document.querySelector('.list').innerHTML = '';
//       counting();
//     }
//   });
  
// function countChars(str) {
//     var chars="";
//     var chars = str.split("").filter(function(value, index, array) {
//         return array.indexOf(value) === index;
//     }).sort();
//     var countChar = {};
    
//     chars.map(ch => countChar[ch] = 0); 
    
//     str.split("").map(ch => countChar[ch] += 1);
//     countChar=JSON.stringify(chars);
//     return countChar;
// }

// console.log(countChars("adadada"));




// function counting(){
// let str="hello";
// let strArray=str.split("").reduce("");
// for (let i = 0; i < strArray.length; i++) {
//   var count=0;
//   for (let j = 0; j < strArray.length; j++) {
//     if (strArray[i]===strArray[j]){
//       count++; 
//     }
// }
// document.write (strArray[i]+ '===' +count+"<br>");

// }
// // }
// counting();
function getCounts(){
 var str="";
 str=document.getElementById("input").value;
var histogram={};
for(let i=0;i<str.length;i++){
  var ch=str[i];
if(!histogram[ch]){
  histogram[ch]=0;
  
}
  histogram[ch]++;
}
var show= (JSON.stringify(histogram ,null," occurences"+""+ "\t")).toUpperCase().replace("{","").replace("}","");
document.getElementById("text").innerHTML=show;

}
document.getElementById("input").addEventListener('keyup', getCounts);