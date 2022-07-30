// Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// const question = prompt("Какое официальное название JavaScript?");

// const officialNameJs = prompt("Какое официальное название JavaScript?");
// if (officialNameJs === 'ECMAScript') {
//     alert("Верно!");
// } else {
//     alert("Не знаете? ECMAScript!");
// }

// console.log(officialNameJs);

// officialNameJs === "ECMAScript"
//   ? alert("Верно!")
//    : alert("Не знаете? ECMAScript!");

// let message = "Не знаете? ECMAScript!";
// message = officialNameJs === "ECMAScript" ? "Верно" : message;
// alert(message);

//2. Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const number = Number(prompt('Введи минуты'));
// console.log(number)
// let hours = Math.floor(number / 60);
// hours = String(hours).padStart(2, 0);

// console.log(hours)
// let minutes = number % 60
// minutes = String(minutes).padStart(2, 0);
// console.log(minutes)
// console.log(`${hours}:${minutes}`)

//Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// Додайте все четные числа от min до max
// const max = 50;
// const min = 23;
// let total = 0;
// for (let i = max; i >= min; i -= 1) {

//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(i);
//     total += i;
// }
// console.log(total);

// При загрузке страницы пользователю предлагается
//в prompt ввести число. Ввод добавляется к значению
//переменной total.
//Операция ввода числа продолжается до тех пор,
//пока пользователь не нажмет кнопку Cancel в prompt.
//После того как пользователь прекратил ввод нажав на
//кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
//Делать проверку,что пользователь ввел именно число,
//а не произвольный набор символов, не нужно.

// let number = Number(prompt("ВВедите число!!!"));
// let total = 0;

// while(number){
// total +=number;
// number = Number(prompt("ВВедите число!!!"));

// }
// console.log(total);

// Напишите цикл, который предлагает ввести
//число больше 100 через prompt.
//Если посетитель ввёл другое число - попросить
//ввести ещё раз и так далее.
//Цикл должет спрашивать число, пока посетитель не
//введёт число больше 100, либо не нажмет кнопку
//Отмена в prompt

// let number = Number(prompt("ВВедите число больше 100!!!"));
// while (number < 100 && number !== null) {
//   number = Number(prompt("ВВедите число больше 100!!!"));
// }
// console.log(number);

//Нарциса знають всі, нарцис незнає нікого
// const people = [
//   {
//     name: 'Alex',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Eva'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
// ];
// //нарцис  'Jhon'
// const people2 = [
//   {
//     name: 'Alex',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: [],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Eva'],
//   },
// ];
// //немає нарциса'
// const people3 = [
//   {
//     name: 'Alex',
//     know: ['Alex', 'Eva'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Eva'],
//   },
// ];
// //немає нарциса

// const people4 = [
//   {
//     name: 'Alex',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: ['Eva'],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Eva'],
//   },
// ];
// //немає нарциса'

// function findNarcys(array) {
//   let narcys = "";
//   for (const friend of array) {
//     // console.log(friend);
//     if (friend.know.length === 0) {
//       narcys = friend.name;
//       // console.log('narcys', friend.name);
//       break;
//     }
//   }
//   if (narcys === '') {
//         return "немає нарциса";
//   }
//   for (const friend of array) {
//     if (friend.name === narcys) {
//       continue;
//     }
//     if (!friend.know.includes(narcys)) {
//       return "немає нарциса";
//     }
//   }
//   return narcys;
// }
// console.log(findNarcys(people4));

// =======================

/*
? Створіть масив genres з елементами Jazz і Blues.
? Додайте «Рок-н-рол» до кінця.
? Виведіть у консоль перший елемент масиву.
? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
? Видаліть перший елемент та виведіть його в консоль.
? Вставте «Country» та «Reggy» на початок масиву.
 */

// const genres = ['Jazz', 'Blues']
// console.log(genres.push("Рок-н-рол"));
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());
// console.log(genres.unshift('Country', 'Reggy'));
// console.log(genres.splice(2, 0, 'Folk'));
// console.log(genres);

/*
? У нас є об'єкт salaries із зарплатами:
? Створіть функцію topSalary(salaries), яка повертає ім'я працівника з найбільшою заробітною плантею.
?
? Якщо об'єкт salaries порожній, потрібно повернути null.
? Якщо кілька високооплачуваних працівників, можна повернути будь-кого з них.
? P.S. Використовуйте Object.entries та деструктурування, щоб перебрати пари ключ/значення.
*/

const salaries = {
  John: 100,
  Pete: 500,
  Mary: 2500,
};

function topSalary(salaries) {
  const salaryArr = Object.entries(salaries);
  if (salaryArr.length === 0) {
    return null;
  }
  //   console.log(salaryArr);
  let employee = salaryArr[0][0];
  //   console.log(employee);
  let maxSalary = salaryArr[0][1];
  //   console.log(maxSalary);
  for (const [name, money] of salaryArr) {
    //  console.log(salary);
    //  console.log(salary[1]);
    if (money > maxSalary) {
      maxSalary = money;
      employee = name;
    }
    console.log(name, money);
  }
  return `${employee} самый богатый с ${maxSalary}`;
}
console.log(topSalary(salaries));
