// 1.
// TASK: log in console using fruitsData and for loop:
// apple = 1.2,
// orange = 2.0,
// cherry = 3.5
var fruitsData = [
	["apple", "orange", "cherry"],
	[1.2, 2.0, 3.5],
];

let matrixLength = fruitsData.length;
for(let i = 0; i <= matrixLength ;i++){
	console.log(fruitsData[0][i] + ' = ' + fruitsData[1][i]);
}

// 2.
// Да се състави масива evenNums, който да съдържа четните положителни елементи на масива nums.
// Да се състави масива oddNums, който да съдържа нечетните положителни елементи на масива nums

// използвайте цикъл for за да съставите двата масива

let nums = [1, 6, -3, 5, 2, -8, 0, 4, 3];

let evenNums= [];
let oddNums = [];

let numsLength = nums.length;
for(let i =0; i< numsLength; i++){
	if(nums[i] > 0 && nums[i] % 2) {
		oddNums.push(nums[i]);
	} 
	else if(nums[i] > 0) {
		evenNums.push(nums[i]);
	}
}

// 3.
// Съставете нов for цикъл, чрез който да принтирате в конзолата единствено сумата от нечетните отрицателни елементи на масива.
let numArray = [-1, -2, -3, -4, -5, 0, 1, 2, 3, 4, 5];
let sumOddNegativeNumbers = 0;

for (var i = 0; i < numArray.length; i++) {
	if (numArray[i] < 0 && numArray[i] % 2) {
		sumOddNegativeNumbers += numArray[i];
	}
}

console.log(sumOddNegativeNumbers);

// 4.
// Даден е масив, който съдържа информация за български владетели, и периода на тяхното управление.
// Всеки елемент на масива е масив със следните данни:
// 	[<име>, <начална година на управление>, <крайна година на управление>]

var rulers = [
	["асПАРуХ",681, 700 ],
	["тЕРвеЛ", 700,718 ],
	["СеВаР", 738,753],
	["телЕРИГ", 766,777],
	["каРДАм", 777, 803],
	["крум", 803,814 ],
	["ОмурТАг",814,831],
];

// ЗАДАЧА: Изпишете в конзолата имената на онези български владетели, които са управлявали повече от 15 години.
// Разбира се, искаме да видим имената изписани според конвенциите за имена на съществителни-собствени.
function toCamelCaseCyr(str){
	let strLower = str.toLowerCase();
	return strLower[0].toUpperCase() + strLower.substring(1);
}

for(let i = 0; i<rulers.length; i++){
	rulers[i][0] = toCamelCaseCyr(rulers[i][0]);
}

for(let i = 0; i<rulers.length; i++){
	let yearsOfRule = rulers[i][2] - rulers[i][1];

	if(yearsOfRule > 15){
		console.log(`${rulers[i][0]} е управлявал ${yearsOfRule} години.`);
	}
}










