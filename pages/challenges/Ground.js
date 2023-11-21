document.getElementById("ground-test-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const answers = {
        q1: "a",
        q2: "b",
        q3: "b",
        q4: "b",
        q5: "b",
        q6: "a",
        q7: "c",
        q8: "b",
        q9: "b",
        q10: "b"
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