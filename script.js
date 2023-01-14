const bill=document.querySelector("#bill");
const no=document.querySelector('#no');
const custom=document.querySelector('#customtip');
const tipAmount=document.getElementById('tipAmount');
const billAmount=document.getElementById('billAmount');
bill.addEventListener("input",billInput);
no.addEventListener("input",noInput);
custom.addEventListener("input",customInput);

tipAmount.innerHTML="₹"+(0.00).toFixed(2);
billAmount.innerHTML="₹"+(0.00).toFixed(2);

let billValue=0.00;
let noValue=0;
let customvalue=0;

bill.value="0.00";
no.value="0";
function billInput(){
    billValue=parseFloat(bill.value);
    console.log(billValue);
        if (noValue||(noValue!=0)){
           billAmount.innerHTML="₹"+(billValue*(1.15)/noValue).toFixed(2); 
           tipAmount.innerHTML="₹"+(billValue*(0.15)/noValue).toFixed(2); 
        }
        else{
            tipAmount.innerHTML="₹"+(0.00).toFixed(2);
            billAmount.innerHTML="₹"+(0.00).toFixed(2);
}
}
function customInput(){
    customvalue=parseFloat(custom.value)
    console.log(customvalue);
    tip(customvalue);
  

}
error();
function noInput(){
    noValue=parseFloat(no.value);
    console.log(noValue);
    billAmount.innerHTML="₹"+(billValue*(1.15)/noValue).toFixed(2);
    tipAmount.innerHTML="₹"+(billValue*(0.15)/noValue).toFixed(2);
    error();
    if(isNaN(noValue)){
        tipAmount.innerHTML="₹"+(0.00).toFixed(2);
        billAmount.innerHTML="₹"+(0.00).toFixed(2);
}
    
}
function error(){
    if ((noValue===0)||(isNaN(noValue))) {
    document.getElementById('error').style.display="flex";
    no.style="border: 2px solid tomato;";}
    else{
        console.log("no error");
    document.getElementById('error').style="display: none"
    no.style="border: none;";
    }}

// function noerror(){
//     if(noValue!=0) {
//     console.log("no error");
//     document.getElementById('error').style="display: none"
//     no.style="border: none;";
// }}

let billcalc,tipcalc,id,elements;
function tip(e){
    billcalc=(billValue)*(1 + e/100);
    tipcalc=(billValue*e)/100;
    billAmount.innerHTML="₹"+(billcalc/noValue).toFixed(2);
    tipAmount.innerHTML="₹"+(tipcalc/noValue).toFixed(2);
    let id="tip"+e;
    elements = document.querySelectorAll('.tipselect');

     elements.forEach((element) => {
  element.classList.remove('active');
});
    document.getElementById(id).classList.add('active');
    
    // document.getElementById("tip15").classList.remove('active');
    

}
function reset(){
    bill.value="0.00";
no.value="0";
    tipAmount.innerHTML="₹"+(0.00).toFixed(2);
    billAmount.innerHTML="₹"+(0.00).toFixed(2);
    elements = document.querySelectorAll('.tipselect');

    elements.forEach((element) => {
 element.classList.remove('active');
});
   document.getElementById("tip15").classList.add('active');
   
   var getValue= document.getElementById("customtip");
      if (getValue.value !="") {
          getValue.value = "";
      }
 }
