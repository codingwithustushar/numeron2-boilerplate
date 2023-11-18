let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let mul = document.getElementById("mul")
let divide = document.getElementById("divide")
let modulus = document.getElementById("modulus")
// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let number1 = document.getElementById("number1")
let number2 = document.getElementById("number2")


let timer = document.getElementById("timer")

let n1;
let n2;

generateRandom()
function generateRandom(){
   n1 = Math.floor(Math.random()*100) 
   n2 = Math.floor(Math.random()*100) 
   if(n1<n2){
    let temp =n1;
    n1=n2;
    n2=temp
   }
   number1.innerText = n1
   number2.innerText = n2

}

// Iteration 3: Creating variables required to make the game functional
let number3 = document.getElementById("number3")
let n3;
// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
var symbol = ['plus','minus','mul','divide','modulus']
// console.log(symbol.length)
var sign;
// Iteration 5: Creating a randomise function to make the game functional
RandomOperations()
function RandomOperations(){
     sign = symbol[Math.floor(Math.random()*symbol.length)]
     if(sign == 'plus'){
        n3 = n1+n2
     }
     if(sign == 'minus'){
        n3 = n1-n2
     }
     if(sign == 'mul'){
        n3 = n1*n2
     }
     if(sign == 'divide'){
        n3 = n1/n2
     }
     if(sign == 'modulus'){
        n3 = n1%n2     
     }
     number3.innerText =parseInt(n3)
}
// Iteration 6: Making the Operators (button) functional
var score =0;
plus.onclick = ()=>{
    if(n1+n2 !=n3){
        location.href = 'gameover.html'
    }
    else{
        generateRandom()
        RandomOperations()
        score++;
        resetTimer(timerID)
    }
    
}
minus.onclick = ()=>{
    if(n1-n2 !=n3){
        location.href = 'gameover.html'
    }
    else{
        generateRandom()
        RandomOperations()
        score++;
        resetTimer(timerID)
    }
}
mul.onclick = ()=>{
    if(n1*n2 !=n3){
        location.href = 'gameover.html'
    }
    else{
        generateRandom()
        RandomOperations()
        score++;
        resetTimer(timerID)
    }
}
divide.onclick = ()=>{
    if(n1/n2 !=n3){
        location.href = 'gameover.html'
    }
    else{
        generateRandom()
        RandomOperations()
        score++;
        resetTimer(timerID)
    }

}
modulus.onclick = ()=>{
    if(n1%n2 !=n3){
        location.href = 'gameover.html'
    }
    else{
        generateRandom()
        RandomOperations()
        score++;
        resetTimer(timerID)
    }

}

// Iteration 7: Making Timer functional
startTimer()
var timerID;
function startTimer(){
    var time = 20
    timer.innerText = time
    timerID = setInterval(() => {
        time--
        localStorage.setItem("score",score)
        if(time==0){
            location.href = 'gameover.html'
        }
        else{
            timer.innerHTML = time
        }

        
    }, 1000);
}
function resetTimer(intervalid){
    clearInterval(intervalid)
    startTimer();
}





