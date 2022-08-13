// ---------------№1 repeated brackets---------------

// const stack = [];

// function checkBrackets(str) {
//     for (let i = 0; i < str.length; i += 1) {
//         const bracket = str[i];

//         if (bracket === '(' || bracket === '{' || bracket === '[') {
//             stack.push('bracket');
//         } else  {
//             const lastEl = stack.pop();
            
//             if (!lastEl) {
//                 return false;
//             }
//         }
//     }

//     if (stack.length !== 0) return false;
//     return true;
// }

// console.log(checkBrackets('(((((((()))))))){'));

// ---------------№2 repeated brackets---------------

// const stack = [];
// const obj = {
//     '(': ')',
//     '{':'}',
//     '[': ']'
// }

// function checkBrackets(str) {
//     for (let i = 0; i < str.length; i += 1) {
//         const bracket = str[i];

//         if (bracket === '(' || bracket === '{' || bracket === '[') {
//             stack.push('bracket');
//         } else {
//             const lastEl = stack.pop();
            
//             if (bracket !== obj[lastEl]) {
//                 return false;
//             }
//         }
//     }

//     if (stack.length !== 0) return false;
//     return true;
// }

// console.log(checkBrackets('({[]}{})'));

// ---------------№3---------------

const arr = [1, 1, 2, 3, 3, 4, 4, 5, 6, 7, 7, 8, 9]

function withoutRepeat(array) {
    const value = array.reduce((previousValue, element, index) => {
        if (array.indexOf(element) === index) {
            previousValue.push(element);
        }
    }, []);

    return value;
}

console.log(withoutRepeat(arr));




