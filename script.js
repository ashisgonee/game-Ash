let optionOne=document.querySelector(".option-one");
let optionTwo=document.querySelector(".option-two");
let buttons=document.querySelector(".buttons");
let optiononeScreen=document.querySelector(".option-one-screen");
let optiontwoScreen=document.querySelector(".option-two-screen");
let optiononeEnd=document.querySelector(".option-one-end")
let optiontwoEnd=document.querySelector(".option-two-end")
let getOut=document.querySelector(".get-out");
let wait=document.querySelector(".wait");

optionOne.onclick=function(){
  optiononeScreen.style.display="block";
  getOut.style.display="block";
};

optionTwo.onclick=function(){
  optiontwoScreen.style.display="block";
  wait.style.display="block";
};


getOut.onclick=function(){
  optiononeEnd.style.display="block";
};

wait.onclick=function(){
optiontwoEnd.style.display="block";
};
