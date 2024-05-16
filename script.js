 const findMax = (x , y , z) => Math.max(x , y , z);
  const findMin = (x , y , z) => Math.min(x , y , z);

  function findMinMax() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const num3 = document.getElementById("num3").value;

    const max = findMax(num1, num2, num3);
    const min = findMin(num1, num2, num3);

    const result = "Maximum element: "   + max +   "   Minimum element: " + min;
    
    console.log(result)
  }

function checkVowelOrConsonant(char) {
   
    char = char.toLowerCase();
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    if (vowels.includes(char)) {
        return "Vowel";
    } else {
        return "Consonant";
    }
}

function checkInput() {
    
    var Input = document.getElementById("userInput").value;

   
    if (Input) {
        var resultString = "";
        
        for (var i = 0; i < Input.length; i++) {
          
            var result = checkVowelOrConsonant(Input[i]);
        console.log(resultString += `'${Input[i]}' is a ${result}`)    
        }
       
     console.log(document.getElementById("resu").innerHTML = resultString)   
    } else {
      console.log(document.getElementById("resu").innerHTML = "enter valid string")  
    }
}


document.getElementById("printtt").addEventListener("click", function() {

    var number = document.getElementById("numberInputt").value;
    console.log( number +":");
       for (var i = 1; i <= 12; i++) {
     console.log(number + " x " + i + " = " + (number * i));
    }
});

document.getElementById("printt").addEventListener("click", printEvenNumbers);
function printEvenNumbers() {
    const numberInput = document.getElementById("numberInput").value;
    
    

    const n = parseInt(numberInput);
    if (isNaN(n) || n < 1) {
        console.log("error");
    } else {
        
      
        for (let i = 2; i <= n; i += 2) {
        console.log(i);
        }
    }
}
document.getElementById('btnres').addEventListener('click', function(){
    let subject1 = parseFloat(document.getElementById('subject1').value);
    let subject2 = parseFloat(document.getElementById('subject2').value);
    let subject3 = parseFloat(document.getElementById('subject3').value);
    let subject4 = parseFloat(document.getElementById('subject4').value);
    let subject5 = parseFloat(document.getElementById('subject5').value);

let totalres = subject1 +subject2 +subject3 +subject4 +subject5 ;
let average = totalres / 5;
let percentage = (totalres / 500) * 100;
console.log( " مجموع المواد:" +totalres);
console.log("متوسط المواد:" +average );
console.log(" النسبة المئوية:" +percentage);

});
document.getElementById('btn').addEventListener('click', function(){
    let Physics = parseFloat(document.getElementById('Physics').value);
    let Chemistry = parseFloat(document.getElementById('Chemistry').value);
    let Biology = parseFloat(document.getElementById('Biology').value);
    let Mathematics = parseFloat(document.getElementById('Mathematics').value);
    let Computer= parseFloat(document.getElementById('Computer').value);

    let totalress = Physics +Chemistry + Biology + Mathematics + Computer ;
    let percentagee = (totalress / 500) * 100;
    
    let grade;

    if (percentagee >= 90) {
        grade = 'A';
    } else if (percentagee >= 80) {
        grade = 'B';
    } else if (percentagee >= 70) {
        grade = 'C';
    } else if (percentagee >= 60) {
        grade = 'D';
    } else if (percentagee >= 40) {
        grade = 'E';
    } else {
        grade = 'F';
    }

    console.log(`grade is: ${grade}`);
});