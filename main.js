

//Leap Year Checker: Create a function that takes a year as input and determines whether it is a leap year or not. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.


const isLeapYear = (year) => {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))
      ? `${year} is a leap year.`
      : `${year} is not a leap year.`;
  };


  console.log(isLeapYear(2024));
console.log(isLeapYear(1900));
console.log(isLeapYear(2150));


//Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:


const getTicketPrice = (age) => {
    let price;
    
    switch (true) {
      case age <= 12:
        price = 10;
        break;
      case age >= 13 && age <= 17:
        price = 15;
        break;
      case age >= 18:
        price = 20;
        break;
      default:
        return "Invalid age input.";
    }
  
    return `The ticket price for age ${age} is $${price}.`;
  };
  
  
  console.log(getTicketPrice(10));
  console.log(getTicketPrice(15));
  console.log(getTicketPrice(25));