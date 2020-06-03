
const key=document.querySelectorAll('button')
const display=document.getElementById('display')
const history=document.getElementById('history')

let number1=0;
let number2=0;
let ans=0;
let sign;
let signFlag=false;
let evalflag=true;
var element;
let reFlag=true;

key.forEach((key) => {
  key.addEventListener("click",function (e) {
    element=e.target;
    id=element.id;
    if(id=="key"){
      if(reFlag==false){
        display.innerHTML="";
        reFlag=true;
      }
    addinput(element);
    signFlag=true;
  }else if(id=="operation"&& signFlag==true){
    addhistory(element);
    sign=element.value;
    evalflag=true;
    number1=Number(display.innerHTML);
    display.innerHTML="";
    signFlag=false;
    evalflag=true;
  }else if(id=="eval" && evalflag==true){
    number2=Number(display.innerHTML)
    history.innerHTML+=number2;
    evaluate(number1,number2);
    evalflag=false;
    reFlag=false;
  }else if(id=="eval" && evalflag==false){
    evaluate(number1,number2);
    reFlag=false;
  }
  else if(id=="clear"){
    clear();
  }else if(id=="backspace"){
    str=display.innerHTML;
    display.innerHTML=str.slice(0,-1);
  }
  })
});


function addinput(element) {
  display.innerHTML+=element.value;
}
function addhistory(element) {
  history.innerHTML=display.innerHTML+element.value;
}
function clear() {
    display.innerHTML="";
    history.innerHTML="";
}

function evaluate(num1,num2) {
  if(sign=="+"){
  ans=num1+num2;
}else if(sign=="-"){
  ans=num1-num2;
}else if(sign=="*"){
  ans=num1*num2
}else if(sign=="%"){
  ans=(num1/num2)*100;
}
else{
  ans=num1/num2;
}
  display.innerHTML=ans;
}
