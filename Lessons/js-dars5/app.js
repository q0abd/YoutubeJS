/* String methods */

let stringOne = 'Kiyomov Abdullohning';
let stringTwo = ' kanaliga hush kelibsiz';
let trimFunc = '        Salom , qandaysiz?     ';

//1 - charAt()
console.log(stringOne.charAt(8));


//2 - charCodeAt()
console.log(stringTwo.charCodeAt(0));


//3 - fromCharCode()
console.log(String.fromCharCode(107));


//4 - endsWith()
console.log(stringOne.endsWith(`ning`));


//5 - startWith()
console.log(stringTwo.startsWith('ana'));


//6 - concat()
console.log(stringOne.concat(stringTwo));


//7 - includes()
console.log(stringOne.includes('s'));


//8 - indexOf()
console.log(stringOne.indexOf("Abd"));


//9 - lastIndexOf()
console.log(stringOne.lastIndexOf('ning'));


// 10 - match()
console.log(stringTwo.match('hush'));
console.log(stringTwo.match(/li/g));


//11 - repeat()
console.log(stringOne.repeat(2));


//12 - replace()
console.log(stringTwo.replace('hush','XUSH'));


//13 - search()
console.log(stringOne.search('mov'));


//14 - slice()
console.log(stringTwo.slice(2,4));


//15 - split()
console.log(stringOne.split(" "));


//16 - substr()
console.log(stringOne.substr(2,5));


//17 - substring()
console.log(stringOne.substring(2,5));


//18 - trim()
console.log(trimFunc.trim());


//19 - toLowerCase()
console.log(stringOne.toLowerCase());


//20 - toUpperCase()
console.log(stringOne.toUpperCase()); 