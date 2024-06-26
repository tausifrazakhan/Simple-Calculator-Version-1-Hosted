let currentDisplay = "";
let displayValue = document.querySelector(".display");
let cancelBtn=document.getElementById("cancel-button");
let assignBtn=document.getElementById("assign-button");
displayValue.value = currentDisplay;

let buttons = document.querySelectorAll(".btn");


let btns = Array.from(buttons);
btns.forEach(btn => {
  btn.addEventListener("click", () => {
    displayValue.value=displayValue.value+btn.innerText;
   })

});

cancelBtn.addEventListener("click",()=>{
  displayValue.value="";
})

assignBtn.addEventListener("click",()=>{
  let result=eval(displayValue.value);
  displayValue.value=result;  
  displayValue.value
})
