let result = 5 + 5 + '5'; 
console.log(result); 
console.log(typeof result); 


let email = "kirillkovalchuk9@mail.com"; 
if (email.includes('@')) {
console.log('Email містить символ @');
} else {
console.log('Email не містить символ @');
}
console.log(`Загальна кількість символів: ${email.length}`);


let word1 = "My";
let word2 = "name";
let word3 = "is";
let fullName = `${word1} ${word2} ${word3} Viktor`;
console.log(fullName); 


let userName = "Олександро"; 
let payment = 300; 
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);