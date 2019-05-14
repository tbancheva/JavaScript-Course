//1.
//Да се дефинира функция sumEvenArrayElements(), която връща сумата от четните елементи на подаден й двумерен масив.

let arr = [
	[1,2,3],
	[4,5,6]
];

function sumEvenArrayElements(matrix){
	let sumEvenNumbers = 0;
	let matrixLength = matrix.length;

	for(let i =0;i < matrixLength; i++){
		let arrLength = matrix[i].length;
		for(let j =0; j < arrLength; j++){
			sumEvenNumbers += matrix[i][j] % 2 ? 0 : matrix[i][j];
		}
	}

	return sumEvenNumbers;
}

console.log(sumEvenArrayElements(arr));

//2.
//Дефинирайте функция 'getMinScoreIndex', която да връща индекса на студента с най-ниска оценка.
let students = ["ivan", "pesho", "maria"];
let scores = [5, 7, 6];

function getMinScoreIndex(arr){
	let minScore = 0;
	let minScoreIndex = 0;
	let arrLength = arr.length;

	for(let i = 0; i < arrLength; i++){
		if(minScore >= arr[i]){
			minScore = arr[i];
			minScoreIndex =i;
		}
	}

	return minScoreIndex;
}

let index = getMinScoreIndex(scores);
console.log(students[index]);

// 3.
// TASK: напишете функция findMaxScore(), която да намира и изписва в конзолата най-високата оценка и съответния предмет за даден студент.
// След като извикаме фунцкията findMaxScore() за всеки студент, трябва да получим:
// Pesho is best in music (6)
// Maria is best in math (6)
// George is best in physics (4)
let studentGrades = [
			[
				'Pesho',
				['math', 5],
				['physics', 4],
				['music', 6],
			],
			[
				'Maria',
				['math', 6],
				['physics', 5],
				['music', 5],
			],
			[
				'George',
				['math', 2],
				['physics', 5],
				['music', 4],
			]
		];


// Логваме оценките на всеки студент за всеки предмет:
for(var i = 0; i<studentGrades.length; i++){
	console.log(`${studentGrades[i][0]} scores:`);
	for(var j = 1; j<studentGrades[i].length; j++){
		console.log(`\t${studentGrades[i][j][1]} in ${studentGrades[i][j][0]}`);
	}
}

function findMaxScore(studentGrades){
	for(let i = 0; i<studentGrades.length; i++){
		console.log(`${studentGrades[i][0]} is best in:`);

		let maxGrade = 0;
		let maxGradeIndex = 0;

		for(var j = 1; j<studentGrades[i].length; j++){
			if(studentGrades[i][j][1] >= maxGrade){
				maxGrade = studentGrades[i][j][1];
				maxGradeIndex = j;
			}
		}

		console.log(`\t${studentGrades[i][maxGradeIndex][0]} (${maxGrade})`);
	}
}

findMaxScore(studentGrades);
