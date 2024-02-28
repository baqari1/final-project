2.1 კალკულატორი
კალკულატორის ფუნქცია მომხმარებლებს საშუალებას აძლევს შეასრულონ ძირითადი
არითმეტიკული მოქმედებები (+, -, *, /). მომხმარებლებს შეუძლიათ შეიყვანონ ორი რიცხვი და
შემდეგ აირჩიონ ოპერაცია შედეგის მისაღებად. კალკულატორი ასევე შეიცავს შეყვანის
ვალიდაციას არასწორი შეყვანების დასამუშავებლად.


function calculator() {
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");
    
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Invalid input. Please enter valid numbers.");
        return;
    }
    
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    let operation = prompt("Enter the operation (+, -, *, /):");
    
    let result;
    
    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                console.log("Error: Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operation.");
            return;
    }
    
    console.log(`Result: ${result}`);
}

calculator();


2.2 
თამაში 1: გამოიცანით რიცხვი
ამ თამაშში პროგრამა აგენერირებს შემთხვევით რიცხვს მითითებული დიაპაზონიდან.
მომხმარებლებს სთხოვენ გამოიცნონ რიცხვი. არასწორი რიცხვის შემთხვევაში პროგრამა
მომხმარებელს აძლევს მინიშნებას (უფრო მაღალი/უფრო დაბალი). თამაში აკონტროლებს
მცდელობების რაოდენობას და აჩვენებს შედეგს, როდესაც მომხმარებელი გამოიცნობს სწორ
რიცხვს.



function numberGuessingGame(min, max, maxAttempts) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let attempts = 0;

    alert(`Welcome to the Number Guessing Game! Guess a number between ${min} and ${max}. You have ${maxAttempts} attempts.`);

    while (attempts < maxAttempts) {
        const guess = parseInt(prompt("Enter your guess:"));

        if (isNaN(guess) || guess < min || guess > max) {
            console.log("Invalid input. Please enter a valid number within the specified range.");
            continue;
        }

        attempts++;

        if (guess === randomNumber) {
            console.log(`Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempts.`);
            return;
        } else if (guess < randomNumber) {
            console.log("Try again. The number is higher.");
        } else {
            console.log("Try again. The number is lower.");
        }
    }

    console.log(`Sorry, you've used all ${maxAttempts} attempts. The correct number was ${randomNumber}.`);
}

numberGuessingGame(5, 25, 5);
