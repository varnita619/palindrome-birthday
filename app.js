const checkPalindrome = document.querySelector(".checkPalindrome");
const output = document.querySelector(".output");
var birthdayInput = document.querySelector("#birthdayInput");
var delayInMilliseconds = 700; //1 second
var image = document.querySelector(".image");

checkPalindrome.addEventListener('click',()=>{
    var date = birthdayInput.value;
    let day = date.slice(8);
    let month = date.slice(5,7);
    let year = date.slice(0,4);
    
    // splited date in all formats 
    const formatOne = year + month + day;
    const formatTwo = month + day + year;
    const formatThree = day + month + year;
    const formatFour = month + day + year.slice(2);

    // Reversing all formats

    const reversedOne = formatOne.split("").reverse().join("");
    const reversedTwo = formatTwo.split("").reverse().join("");
    const reversedThree = formatThree.split("").reverse().join("");
    const reversedFour = formatFour.split("").reverse().join("");

    if(formatOne==reversedOne || formatTwo==reversedTwo || formatThree==reversedThree || formatFour==reversedFour ){

        setTimeout(function() {
            image.src = "countdown.gif"
          }, );
      setTimeout(function(){
          image.src = "bg2.png";
        output.style.color="blue";
        output.innerText = "Yuuhu! Your Birthday is Palindrome"
      },delayInMilliseconds)
    }

    else{
        setTimeout(function() {
            image.src = "countdown.gif"
          }, );
          setTimeout(function(){
            image.src = "bg2.png"
            output.style.color= 'red';
            output.innerText = "Noo! Your Birthday is not Palindrome"
        },delayInMilliseconds)
         
      
        
    }
})