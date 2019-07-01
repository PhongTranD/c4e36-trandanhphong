/*
Study:
Nested list is a list working as an element in another list
Yes
*/

// 3
// const itemsList = ['T-Shirt', 'Sweater'];

// let answer = prompt('Welcome to our shop, what do you want (C, R, U, D)?').toLowerCase();

// if (answer === 'r') {
//     console.log(`Our items: ${itemsList}`);
// } else if (answer === 'c') {
//     let cre = prompt('Enter new item:');
//     itemsList.push(cre);
//     console.log(`Our items: ${itemsList}`);
// } else if (answer === 'u') {
//     let upd = prompt('Update position?');
//     let newItem = prompt('New item?');
//     itemsList[upd-1] = newItem;
//     console.log(`Our items: ${itemsList}`);
// } else if (answer === 'd') {
//     let del = prompt('Delete position?');
//     itemsList.splice(del - 1, 1);
//     console.log(`Our items: ${itemsList}`);
// }

// 4
// 4.1
// const list = [5, 7, 300, 90, 24, 50, 75];
// console.log(`Hello, my name is Phong and these are my sheeps sizes 
// ${list.join(', ')}`);

// // 4.2

// let max = [0];

// for (i=0;i<list.length;i++) {
//     if (max < list[i]) {
//         max = list[i];
//     }
// }
// console.log(`Now my biggest sheep has size ${max.joint} Let's shear it`);

// // 4.3
// list[list.indexOf(max)] = 8;
// console.log(`After shearing, here is my flock:
// ${list.join(', ')}`);

// // 4.4 
// for(i=0;i<list.length;i++) {
//     list[i]=list[i]+50;
// }
// console.log(`After 1 month, here is my flow:
// ${list.join(', ')}`);