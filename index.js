var button = document.querySelector('.formButton');
var input = document.querySelector('.emailInput');
var message = document.querySelector('.warning-message');
var body = document.querySelector('body');
var error = document.querySelector('.icon-error');
var form = document.querySelector('form');

body.addEventListener('click', function(){
    input.style.border = "1px solid hsl(0, 36%, 70%)";
    message.style.opacity = 0;
    error.style.opacity = 0;
})

button.addEventListener('mouseover', function(){
    button.style.backgroundImage = "linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 74%, 74%))";
})

button.addEventListener('mouseout', function(){
    button.style.backgroundImage = "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))";
})

form.addEventListener('submit', function(event){
    event.preventDefault();
    event.stopPropagation();
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(input.value == '' || regex.test(input.value) == false){
        input.style.border = "3px solid hsl(0, 93%, 68%)";
        message.style.opacity = 1;
        error.style.opacity = 1; 
    }else{
        console.log('correct');
    }
    
})

input.addEventListener('click', function(event){
    event.stopPropagation();
    input.style.border = "2px solid hsl(0, 36%, 70%)";
    message.style.opacity = 0;
    error.style.opacity = 0;
})

