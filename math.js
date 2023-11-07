// Generates an addition problem
function generateAdd() {
    const num1 = Math.floor(Math.random() * 12);
    const num2 = Math.floor(Math.random() * 12);
    return { num1, num2, answer: num1 + num2 };
}

// Generates an subtraction problem
function generateSub() {
    const num1 = Math.floor(Math.random() * 12);
    const num2 = Math.floor(Math.random() * 12);
    return { num1, num2, answer: num1 - num2 };
}

// Generates a multiplication problem
function generateMult() {
    const num1 = Math.floor(Math.random() * 12);
    const num2 = Math.floor(Math.random() * 12);
    return { num1, num2, answer: num1 * num2 };
}

// Generates a division problem
// Division needs to be changed to only include integer answers
function generateMult() {
    const num1 = Math.floor(Math.random() * 12);
    const num2 = Math.floor(Math.random() * 12);
    return { num1, num2, answer: num1 / num2 };
}
