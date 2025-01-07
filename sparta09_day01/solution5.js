const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function calculate(a, cal, b) {
    switch (cal) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return a % b;
    }
}

function fixScore(scores) {
  scores.forEach((score,idx)=> {
    scores[idx] = calculate(score, "+", 3);
  });
}

fixScore(scores);

console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]