function goToRegistration() {
    const targetElement = document.getElementById("emailReg");
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
}