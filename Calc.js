function DoMath(){
    switch(operator){
        case "*":
            return numerator*denominator
        case "/":
            return numerator/denominator
        case "+":
             return numerator+denominator
         case "-":
            return numerator-denominator
        default:
            return "ERR";
    }
}

var click = document.querySelectorAll("button");
var screen = document.getElementById("screen");

var numerator = "";
var denominator = "";
var operator = "";

click.forEach( button => {
button.addEventListener("click", event => {

   let input = event.target.id


   if (!isNaN(input) || input === "."){
    denominator  += input
        screen.innerText += input;
   }

   else if(input === "/" || input === "*" || input === "-" || input === "+"){

     numberator = operator !== "" ? numerator = DoMath(): numberator = denominator;
    
        denominator = "";
        operator = input;
        screen.innerText = ""
    }

    else if(input === "equals"){
    

        solution = DoMath();
        denominator = solution;
        console.log(solution);
        screen.innerText = ""
        screen.innerText = denominator;
    }


   else if(input ==="ON/C"){
       console.log("clear")
        numberator = "";
        denominator = "";
        operator = "";
        screen.innerText = "";
   }

   })   
})