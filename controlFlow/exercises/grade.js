const marks = [80, 80]

// Average = 70

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

function calculateGrade(marks) {
    let sumMarks = 0;

    for (let i = 0; i < marks.length; i++){
        sumMarks += marks[i];
    }

    const average = sumMarks / marks.length
    console.log('Average: ', average)

    if (average >= 90) return 'A';
    if (average >= 80) return 'B';
    if (average >= 70) return 'C';
    if (average >= 60) return 'D';
    return 'F';
}

console.log(calculateGrade(marks))

