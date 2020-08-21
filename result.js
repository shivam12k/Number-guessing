let name = sessionStorage.getItem("name");
let num = sessionStorage.getItem("num");
let result = document.querySelector('.result');
console.log(name);
console.log(num)
let reset = () =>{
    location.href="index.html";
}
setTimeout(()=>{
   result.innerHTML=`hey ${name}  
   your number is ${num}`;
},1000)