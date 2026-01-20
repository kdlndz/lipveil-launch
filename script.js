// SCROLL TO EMAIL REGISTRATION
function goToRegistration() {
    const targetElement = document.getElementById("emailReg");
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
}
// COUNTDOWN
const targetDate = new Date('March 15, 2026 00:00:00').getTime();
const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
    const seconds = Math.floor ((distance % (1000 * 60) / 1000));

    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

    if (distance < 0) {
        clearInterval(countdownInterval);

        document.querySelector(".countdown-section").innerHTML = "<h2>The event has ended!</h2>";
    }
}, 1000);
//EMAIL REGISTRATION FOCUS AND ERROR STATE
