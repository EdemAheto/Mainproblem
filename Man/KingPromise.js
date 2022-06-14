const firstInput=document.getElementById('input1');
const secondInput=document.getElementById('input2');
const button = document.getElementById('button');
let imageSection = document.getElementById('image');
let Src = document.createElement('img');
imageSrc = './zcX5yEeMi.gif';
Src.appendChild(imageSrc)

//login
let signin = new Promise(function (resolve, reject) {
  if (firstInput === "" && secondInput === "") {
    setTimeout(() => reject("Unknow User"), 2000);
  } else {
    setTimeout(() => resolve("You are welcome to this world"), 2000);
  }
});

let  signup=new Promise(function(resolve, reject){
    setTimeout(()=>resolve('Hello'), 2000); 
});
signin.them(function(data){
    setTimeout(()=>{
        imageSrc.style.display = 'none'
    console.log('Hello');
}, 6000)

});
signin.them(function(data){
    setTimeout(()=>{
        imageSrc.style.display = 'block'
    console.log('How are you doing');
}, 6000)

});