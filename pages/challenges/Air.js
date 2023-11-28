document.getElementById("air-test-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const answers = {
        q1: "b",
        q2: "a",
        q3: "a",
        q4: "c",
        q5: "b",
        q6: "a",
        q7: "c",
        q8: "b",
        q9: "c",
        q10: "a"
    };

    let score = 0;
    for (const question in answers) {
        const selectedAnswer = document.querySelector(`[name="${question}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === answers[question]) {
            score++;
        }
    }
    document.getElementById("score").textContent = score;
    document.getElementById("result-message").style.display = "block";
});