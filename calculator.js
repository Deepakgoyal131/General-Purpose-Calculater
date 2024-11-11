const screen = document.getElementById("screen");
const btns = document.querySelectorAll(".btn");
let screenValue = '';
btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        let buttonText = e.currentTarget.innerText;
        
        if(buttonText == 'X'){
            buttonText = '*';
            screenValue = buttonText;
            screen.value += screenValue;
        }

        else if(buttonText == 'C'){
            screenValue = '';  
            screen.value = screenValue;
        }

        else if(buttonText == '='){

            //eval function he javascript me jo value ko evalute krta he
            screenValue = screen.value;
            screen.value = eval(screenValue);
        
        }
        
        else {
            screen.value += buttonText;
        }

        console.log(buttonText);
    })
})

