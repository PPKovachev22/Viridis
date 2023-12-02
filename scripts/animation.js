document.addEventListener('DOMContentLoaded', function () {
    const environment_boxes = document.querySelectorAll('.environment-box');

    const observerOptions = {
        threshold: 0.2
    };

    const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
            } else {
                entry.target.style.opacity = 0;
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    environment_boxes.forEach((el) => {
        observer.observe(el);
    });
});