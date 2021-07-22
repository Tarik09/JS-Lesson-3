// - створити функцію яка обчислює та повертає площу прямокутника висотою

// function rectangle (a, b) {
//     let s = a * b;
//     console.log(s);
// }
// rectangle(5, 5);


// - створити функцію яка обчислює та повертає площу кола

// function circle (r) {
// let s = Math.PI * (Math.pow(r, 2));
// console.log(s);
// }
// circle(9);


// - створити функцію яка обчислює та повертає площу циліндру

// function cylinder (r, h) {
//     let s = 2 * Math.PI * r * (r + h);
//     console.log(s);
// }
// cylinder(5, 20);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


// function min (... b) {
//     let max = b[0];
//     let min = b[0];
//
//     for(let i = 0; i < b.length; i++){
//         if((b[i]) < min){
//             min = b[i];
//         }
//
//         if((b[i]) > max) {
//             max = b[i];
//         }
//     }
//     return max;
//
// }
// let c = min(12, 23, 34, 11, 148, 33, 999, 20);
// console.log(c);


// - створити функцію яка  створює блок з текстом. Текст задати через аргумент

// function text (header) {
//     document.write(
//         `<div>
//     <h1>${header}</h1>
//     <p>Всім привіт!</p>
// </div>`);
// }
// text('Okten');
// text('School');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function litext (content) {
//     document.write(
//         `<div>
//     <ul>
//     <li>${content}</li>
//     <li>${content}</li>
//     <li>${content}</li>
//     </ul>
// </div>`);
// }
// litext('1 клас');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function liText1 (content, number) {
//     document.write("<ul>");
//         for (let i =0; i < number; i++) {
//             document.write(`<li>${content}</li>`);
//         }
//     document.write("</ul>");
//
// }
// liText1('Всім привіт!', 7);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// let massive = ['text', 8, false, 'example', 12, true, 'text2'];
// function elements (arr) {
//    document.write("<ul>");
//             for (let i = 0; i < arr.length; i++) {
//                 document.write(`<li>${arr[i]}</li>`);
//             }
//    document.write("</ul>");
//
// }
// elements(massive);
