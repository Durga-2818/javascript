// Example 1
console.log('A' - 1); // NaN because 'A' is not a number

// Example 2
console.log('A' + 1); // "A1" - because + is string concatenation here

// Example 3
console.log(2 + '2' + '2'); // "222" - first 2 + "2" => "22", then "22" + "2" => "222"

// Example 4
console.log('hello' + 'world' + 89); // "helloworld89" - all strings (number is coerced to string)

// Example 5
console.log('hello' - 'world' + 89); 
// NaN + 89 => NaN
// 'hello' - 'world' => NaN (string subtraction gives NaN)

// Example 6
console.log('hello' + 78); // "hello78" - 78 is converted to string

// Example 7
console.log('78' - 90 + '2'); 
// '78' - 90 => -12
// -12 + '2' => "-122" (number + string => string concatenation)

// Example 8
console.log(2 - '2' + 90); 
// 2 - '2' => 0
// 0 + 90 => 90

// Example 9
console.log(89 - '90' / 2); 
// '90' / 2 => 45
// 89 - 45 => 44

// Example 10
console.log((true == false) > 2); 
// true == false => false
// false > 2 => 0 > 2 => false
