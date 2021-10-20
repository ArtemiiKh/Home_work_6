//Что вернут следующие строки кода?

// 1. Boolean(Number(’10’)) + 1; Ответ: Number

let a = Boolean(Number(`10`)) + 1;
console.log(typeof a)

// 2. ‘sub ’ + Number(false); Ответ: String
// Проверка:

let b = `sub ` + Number(false);
console.log(typeof b)

// 3. 16  *  ‘      91    ‘ Ответ: Number
// Проверка:

let c = 16  *  `  91  `;
console.log(typeof c)

// 4. true-70  Ответ: Number
// Проверка:
 let d = true-70;
 console.log(typeof d)


// 5. Number(1 + String(1)) + 1 Ответ: Number
// Проверка:
let i = Number(1 + String(1)) + 1;
console.log(typeof i)