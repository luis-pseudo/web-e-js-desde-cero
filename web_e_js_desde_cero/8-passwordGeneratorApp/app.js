const passwordOutput=document.getElementById("passwordOutput")
const copyButton=document.getElementById("copyButton")
const charLength=document.getElementById("charLength")
const lengthRange=document.getElementById("lengthRange")
const numbers=document.getElementById("numbers")
const symbols=document.getElementById("symbols")
const strengthIndicator=document.getElementById("strengthIndicator")
const generateButton=document.getElementById("generateButton")

const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz._()/&%$#!?;:-0123456789".split("")

lengthRange.addEventListener("change", function(ev){
    strengthIndicator.value-=charLength.innerText*2.5
    charLength.innerText=ev.currentTarget.value
    strengthIndicator.value+=charLength.innerText*2.5
})

numbers.addEventListener("change", function(ev){
    if(numbers.checked) strengthIndicator.value+=25;
    else strengthIndicator.value-=25
})

symbols.addEventListener("change", function(ev){
    if(symbols.checked) strengthIndicator.value+=25;
    else strengthIndicator.value-=25
})

function generatePassword(){
    let generatedPassword="";
    for (let index = 0; index < charLength.innerText; index++) {
        if(numbers.checked && symbols.checked) generatedPassword+=chars[Math.floor(Math.random() * chars.length)]
        else if(numbers.checked) generatedPassword+=chars[numberspswd()]
        else if(symbols.checked) generatedPassword+=chars[Math.floor(Math.random() * 66)]
        else generatedPassword+=chars[Math.floor(Math.random() * 52)]
    }
    passwordOutput.value=generatedPassword

}

function numberspswd(){
    let n=0
    do n=Math.floor(Math.random() * chars.length); while(n>51&&n<66)
    return n; 
}

generateButton.addEventListener("click", generatePassword)

copyButton.addEventListener("click", function(ev){
    if(passwordOutput.value != "") navigator.clipboard.writeText(passwordOutput.value)    
})