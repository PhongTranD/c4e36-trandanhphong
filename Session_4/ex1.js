// const dict = {
//     hc : 'học',
//     ng : 'người',
//     pt : 'p cc',
//     eny : 'em người yêu',
//     any : 'anh người yêu',
//     ns : 'nói',
//     ngta : 'người ta',
//     lm : 'làm',
//     r : 'rồi',
//     stt : 'số thứ tự',
// }

// const arrayDict = Object.keys(dict);

// let answer = prompt('Hỏi cái cc?').toLowerCase();
// for (i=0;i<arrayDict.length;i++) {
//     if (answer === arrayDict[i]) {
//     console.log(`Code: ${answer}
// Translation: ${dict[answer]}`);
// }
// }

// for (;;) {
//     let answer2 = prompt('Thêm lẹ hộ cái??? (Y/N)').toUpperCase();
// if (answer2 === 'N') {
//     alert('Cút!');
//     break;
// } else if (answer2 === 'Y') {
//     let property = prompt('Thêm cái j???').toLowerCase();
//     let value = prompt('Nghĩa là j???');
//     dict[property] = value;
// }
// }
// console.log(dict);

//chữa

// const words = Object.keys(dict);
// words.forEach((word, index) => {
//     console.log(`${index + 1}. ${word}`);
// })

// const answer = prompt('Your code?');

// if (words.hasOwnProperty(answer)) {
//     console.log(dict[answer]);
// } else {
//     const yOrN = prompt('Contribute?(Y/N)').toLowerCase();
//     if (yOrN === 'n') {
//         console.log('Goodbye!');
//     } else if (yOrN === 'y') {
//         const meaning = prompt('Meaning?');
//         dict[answer] = meaning;
//     }
// }

// const newWords = Object.keys(TeenCode);
// newWords.forEach((word, index) => {
//     console.log(`${index +1}. ${word}`);   
// })