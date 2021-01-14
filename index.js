// slecting the screen part
let screen=document.getElementById("screen")


// selecting the buttons
let btn=document.querySelectorAll("button")


// the inner text of button get stored in screeVal
let screenVal="";

for(items of btn){
    
    // hit function will react on each click of the button
    const hit=(e)=>{
        const buttonText=e.target.innerText;
        console.log(buttonText)
        if(buttonText=="\xD7"){
            screenVal+="*";
            screen.innerText+=buttonText;
        }
        else if(buttonText=="\xF7"){
            screenVal+="/";
            screen.innerText+=buttonText;
        }
        else if(buttonText=="%"){
           screenVal+="*1/100*"
           screen.innerText+=buttonText
        }
      
    else if(buttonText=="C"){
        screenVal="";
        screen.innerText="";

    }

    // for deleting one by one
    else if(buttonText=="\u21D0"){
        console.log(screenVal)
        screenVal=screenVal.slice(0,screenVal.length-1);
        screen.innerText=screenVal

    }
    else if (buttonText=="="){
        screen.innerText=eval(screenVal)
        }

        else {
        screenVal+=buttonText;
        screen.innerText+=buttonText
        
        }       
}

items.addEventListener("click",hit);
}