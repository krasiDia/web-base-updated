/*
Напишите коллбек для array.filter, который отбирает все числа больше num
*/
export function higherThan(num) {
    return function (element) {
        return element > num;
    };
}

/*
Напишите коллбек для array.filter, который отбирает из массива все строки, включающие в себя substr. Регистр важен.
*/
export function hasSubstring(substr) {
    return function (element) {
        return element.includes(substr);
    };
}

/*
Напишите функцию multiply(num), которая работает вот так:

console.log(multiply(5)(10));
// 50
*/
export function multiply(num) {
    return function (value) {
        return num * value;
    };
}
