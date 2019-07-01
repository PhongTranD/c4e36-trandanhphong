
//array
// const menu = ['com', 'chao', 'rau', 'thit', 'ca'];

// C R U D
// create read update delete

//1. READ
//1.1 Read one

// index of element
// console.log(menu[0]);
// console.log(menu[3]);

//length of array
// console.log(menu.length);
// console.log(menu[menu.length - 1]);

//1.2 Read many

// for (let i = 0; i < menu.length; i++) {
//     let food = menu[i];
//     console.log(food);
// }

// for (let i = 0; i < menu.length; i++) {
//     let food = menu[i];
//     console.log(i+1 + '. ' + food);
//     console.log(`${i+1}. ${food}`);
// }

// const menu = ['Com', 'Chao', 'Rau', 'Thit', 'Ca'];

// 2. Create
// const newFood = 'Pho';
// menu.push(newFood);

// for (let i = 0; i < menu.length; i++) {
//     let food = menu[i];
//     console.log(`${i+1}. ${food}`);
// }

// 3. Delete
// const menu = ['Com', 'Chao', 'Rau', 'Thit', 'Ca'];

// //3.1 Delete by index
// // menu.splice(2,1);
// // console.log(menu);

// //3.2 Delete by value
// const indexOfFood = menu.indexOf('Thit');
// console.log(indexOfFood);
// menu.splice(3,1);
// console.log(menu);

//4. Update
// 4.1 update by index
// const menu = ['Com', 'Chao', 'Rau', 'Thit', 'Ca'];
// menu[1] = 'Pho'
// console.log(menu);

