// Task 12 - 1
const str1 = ' gfuh ieiuei ';
const firstFive = str1.trim().slice(0, 5);
console.log('First five letters:', firstFive);

// Task 12 - 2
const str2 = 'hduej dij';
const lengthStr2 = str2.length;
const upperStr2 = str2.toUpperCase();
console.log('Length:', lengthStr2);
console.log('Uppercase:', upperStr2);

// Task 12 - 3
const str3 = ' biji jdo ';
const lowerTrimmed = str3.toLowerCase().trim();
console.log('Lowercase & trimmed:', lowerTrimmed);

// Task 12 - 4
let sentence = 'JavaScript is awesome';
const replaced = sentence.replace('awesome', 'powerful');
console.log('Replaced string:', replaced);

// Task 12 - 5
const randomCoercion = 89 + 'hello' + 90 / 9;
console.log('Implicit coercion example:', randomCoercion);
// Explanation:
// 90 / 9 => 10
// 89 + 'hello' => '89hello'
// '89hello' + 10 => '89hello10'
