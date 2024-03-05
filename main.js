// output elements
const output_year=document.querySelector(".output-year");
const output_month=document.querySelector(".output-month");
const output_day=document.querySelector(".output-day");
const submit_btn=document.querySelector(".submit-btn");
const err=document.querySelectorAll(".err");
//input elements
let isValid=false;
const input_year=document.querySelector("#year");
const input_month=document.querySelector("#month");
const input_day=document.querySelector("#day");

//error elements
const error_day=document.querySelector(".error-day");
const error_month=document.querySelector(".error-month");
const error_year= document.querySelector(".error-year");


// submit button click
submit_btn.addEventListener('click',Calculate);
// input day event listener

input_day.addEventListener("input",(e)=>{
    if(+input_day.value>31){
       error_day.textContent=("Must be a valid date");
       err[0].style.color="hsl(0, 100%, 67%)";
       input_day.style.border="2px solid hsl(0, 100%, 67%)";
       isValid=false;
       return;
    }
    else{
        isValid=true;
        err[0].style.color="hsl(0, 0%, 8%)";
        input_day.style.border="2px solid hsl(259, 100%, 65%)"; 
        error_day.textContent=("");
    }
    if(+input_day.value===0){
       error_day.textContent=("Date is required");
       err[0].style.color="hsl(0, 100%, 67%)";
       output_day.textContent="--"
       input_day.style.border="2px solid hsl(0, 100%, 67%)";
       isValid=false;
       return;
    }
    else{
        isValid=true;
        err[0].style.color="hsl(0, 0%, 8%)";
        input_day.style.border="2px solid hsl(259, 100%, 65%)"; 
        error_day.textContent=("");
    }
    if(+input_day.value<=-1){
        error_day.textContent=("Invalid Date");
        output_day.textContent="--"
        err[0].style.color="hsl(0, 100%, 67%)";
        input_day.style.border="2px solid hsl(0, 100%, 67%)"; 
        isValid=false;
        return;
     }
     else{
         isValid=true;
         err[0].style.color="hsl(0, 0%, 8%)";
         input_day.style.border="2px solid hsl(259, 100%, 65%)";  
         error_day.textContent=("");
     }

});

// input month event listener.

input_month.addEventListener("input",(e)=>{
    if(+input_month.value>12){
       error_month.textContent=("Must be a valid month");
       err[1].style.color="hsl(0, 100%, 67%)";
       input_month.style.border="2px solid hsl(0, 100%, 67%)";
       isValid=false;
       return;
    }
    else{
        isValid=true;
        err[1].style.color="hsl(0, 0%, 8%)";
        input_month.style.border="2px solid hsl(259, 100%, 65%)"; 
        error_month.textContent=("");
    }
    if(+input_month.value===0){
       error_month.textContent=("Month is required");
       err[1].style.color="hsl(0, 100%, 67%)";
       output_month.textContent="--"
       input_month.style.border="2px solid hsl(0, 100%, 67%)";
       isValid=false;
       return;
    }
    else{
        isValid=true;
        err[1].style.color="hsl(0, 0%, 8%)";
        input_month.style.border="2px solid hsl(259, 100%, 65%)"; 
        error_month.textContent=("");
    }
    if(+input_month.value<=-1){
        error_month.textContent=("Invalid month");
        err[1].style.color="hsl(0, 100%, 67%)";
        output_month.textContent="--"
        input_month.style.border="2px solid hsl(0, 100%, 67%)"; 
        isValid=false;
        return;
     }
     else{
         isValid=true;
         err[1].style.color="hsl(0, 0%, 8%)";
         input_month.style.border="2px solid hsl(259, 100%, 65%)";  
         error_month.textContent=("");
     }

});


// input year event listener.

input_year.addEventListener("input",(e)=>{
    if(+input_year.value>2024){
       error_year.textContent=("Must be in the past");
       err[2].style.color="hsl(0, 100%, 67%)";
       input_year.style.border="2px solid hsl(0, 100%, 67%)";
       isValid=false;
       output_year.textContent="--"
       return;
    }
    else{
        isValid=true;
        err[2].style.color="hsl(0, 0%, 8%)";
        input_year.style.border="2px solid hsl(259, 100%, 65%)"; 
        error_year.textContent=("");
    }
    if(+input_year.value===0||+input_year.value<=-1){
        error_year.textContent=("Invalid year");
        output_year.textContent="--"
        err[2].style.color="hsl(0, 100%, 67%)";
        input_year.style.border="2px solid hsl(0, 100%, 67%)"; 
        isValid=false;
        return;
     }
     else{
         isValid=true;
         err[2].style.color="hsl(0, 0%, 8%)";
         input_year.style.border="2px solid hsl(259, 100%, 65%)";  
         error_year.textContent=("");
     }

});

function Calculate(){
    if(isValid){
       let birthday=`${input_year.value}/${input_month.value}/${input_day.value}`;
      
       let birthdayObj=new Date(birthday);
       let ageDiff=Date.now()-birthdayObj;
       let agedate= new Date(ageDiff);
       
      
       var days = Math.floor(ageDiff / (1000 * 60 * 60 * 24));
       // Calculate years, months, and remaining days
       var years = Math.floor(days / 365);
       var months = Math.floor((days % 365) / 30);
       var remainingDays = days % 30;

      
       output_day.textContent=remainingDays;
       output_month.textContent=months;
       output_year.textContent=years;
    }
    else{
        alert("error")
    }
}