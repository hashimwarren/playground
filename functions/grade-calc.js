// student score, total possible score
// 15/20 -> you for a c (75%)
// A 90-100, B 80-90, C 70-79, D 60-69, F 0-59

const gradeCalculator = function (studentScore, totalPossibleScore = 100) {
    if (typeof studentScore !== "number" || typeof totalPossibleScore !== 'number') {
        throw Error('You need a number 🔢')

    } else {
        const gradePercent = (studentScore / totalPossibleScore) * 100
        let letterGrade

        if (gradePercent >= 90) {
            letterGrade = 'A'

        } else if (gradePercent >= 80) {
            letterGrade = 'B'

        } else if (gradePercent >= 70) {
            letterGrade = 'C'

        } else if (gradePercent >= 60) {
            letterGrade = 'D'

        } else {
            letterGrade = 'F'
        }
        return `You got a ${letterGrade} (${gradePercent}%)`

    }



}

try {
    const studentGrade = gradeCalculator(80) //?

} catch (e) {
    console.log(e.message);
}

