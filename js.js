const name = "Maciek";
const age = 32;

console.log(name);
console.log(age);

console.log(`Cześć robaku masz na imie ${name} i twój wiek to ${age} lata`);

function calculate(myNumber) {
  console.log(` dostałem ${myNumber}`);
  myNumber = myNumber * 7;
  console.log(myNumber);
  return myNumber;
}

const myResult = calculate(5);

console.log(myResult);

function greet(name, age) {
  console.log(`Cześć robaku masz na imie ${name} i twój wiek to ${age} lata`);
}

greet("maciek", age);

const greetNew = (name, age) => {
  console.log(`Cześć robaku masz na imie ${name} i twój wiek to ${age} lata`);
};
greetNew(name, age);

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

createContent(".title__web--js", "Hejka stulejka ");

function calculateClassic(myNumber) {
  console.log(` dostałem ${myNumber}`);
  myNumber = myNumber * 7;
  console.log(myNumber);
  return myNumber;
}

const myResultClassic = calculateClassic(5);

console.log(myResult);

const caltulateArrow = (myNumber) => myNumber * 7;

const myResultArrow = caltulateArrow(3);
console.log(myResultArrow);







const deathStar ={
  diameter : 120000,
  fire: (target) => {
    console.log(`${target} destroyed 🔥`)
  },
  isOperating: true,
  name: 'Death Star',
  levels: 357,
  population: 10000,
  isLightOn: true,
  commander: {
    name:'Darth Vader',
    age: 44,
  }
  
}
console.log(deathStar.name)
console.log(deathStar.commander.age)

deathStar.fire('Madziar')
console.log(deathStar['name'])


const numberOne = 42;
const numberTwo = 42;
const nameOne = 'Maciek';
//let nameTwo = 'Stefan';

nameTwo='Maciek';

console.log(nameTwo);



//const humanOne={
  //name:'Maciek',
  //age: 32,
  //address:{
    //street:'Warszawska',
  //  city: 'Białystok'
  //}
//}


//const humanTwo={
 //name:'Stefan',
 //age:35,
 //address:humanOne.address
//}




//console.log(humanTwo)
//humanTwo.age=35;

//console.log(humanTwo)
//console.log(humanOne)



//const humanTwo={
//  name:'Stefan',
//  age:32,
//}

//humanTwo.age = 35;


//console.log(humanTwo.age)
//const name = 'Szymon';
//const lastName = 'Staroń';
//const age = 23;

//console.log(`CZEŚĆ SIEMANKO MAM NA IMIĘ ${name} I BĘDĘ CIEBIE MĘCZYĆ TYM ALERTEM W RAZIE SKARGI MOJE NAZWISKO TO ${lastName} MAM ${age}LATA`)

//const heading = document.querySelector('.article__title--js');

//heading.innerHTML='Mój kot frytka jest lepsza  ';

//function cal(myNumber){
//    console.log(`Dostałem ${myNumber}`);
//   return myNumber*7
//}

//const myResult = cal(age);

//console.log(myResult);
//* const ship={
// size: 7,
//  name: 'piracik',
//  sail: 3,
//   crew: 14,
//    capitan:{
//  name:'Czarnobrody',
//   age:30
// }

//}

//function hello(name){
// console.log(`Cześć ${name}`);
//return name
//}

//const name="Bartek";

//let myName = hello(name);

//const bye =(name) =>{
// console.log(`Papa ${name}`);
//return name;
//}

//myName = bye(name);

//const humanOne = {
//  name:'Stefan',
//age:23,
//address:{
//   street: 'Wiśniowa',
// city: 'Warszawa',
// }
//}

//const humanTwo = {
//  name:'Franek',
//age:30,
//address:humanOne.address.street,
//city:'Warszawa',
//}
//humanOne.address.street= 'Czlek';
//  console.log(humanTwo);
//console.log(humanOne);

const humanOne={
  name:'Stefan',
  age:35,
}

const humanTwo={
  name:'Stefan',
  age:38,
}


if(humanTwo.age>humanOne.age){
  console.log('Jest starszy od niego');
}else{
  console.log('Jest młodszy od niego')
}


const myNumber =22;

switch(myNumber){
  case 7:
    console.log('jestem 7');
    break;
    case 9:
      console.log('jestem 9');
      break;
      default:
        console.log('jestem inny');

}



//const button= document.querySelector('.action--js');

//const myClick=()=>{
//const title = document.querySelector(".title__web--js");
//title.innerHTML=`Jupi udało sie zmienić`;}

//button.addEventListener('click',myClick);
//console.log(button);




//const myClick=()=>{
  //console.log('kliknąłeś')
//}


//button.addEventListener('click', myClick);


const button=document.querySelector('.action--js');

const myClickk=()=>{
 const title = document.querySelector(".title__web--js");
  title.innerHTML=`Jupi udało sie zmienić`;}

button.addEventListener('click',myClickk);







const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', ()=>{
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open');
})


//const Click =()=>{
//const title = document.querySelector(".title__web--js")



//}










