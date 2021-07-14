let discountForm = document.getElementById("discountForm");
let email = document.getElementById("email");
let name = document.getElementById("name");
let agreement = document.getElementById("agreement");
let checkmark = document.querySelector(".checkmark");

const onChecked = () => {
    if (agreement.checked) {
        checkmark.classList.remove("error");
    }
}

const onEmailChange = (event) => {
    if (event.target.value.trim() !== "") {
        email.classList.remove("error");
    }
}

const onNameChange = (event) => {
    if (event.target.value.trim() !== "") {
        name.classList.remove("error");
    }
}

const validate = (event) => {
    if (email.value.trim() === "") {
        email.classList.add("error")
    }
    else {
        email.classList.remove("error");
    }

    if (name.value.trim() === "") {
        name.classList.add("error");
    }
    else {
        name.classList.remove("error");
    }

    if (!agreement.checked) {
        checkmark.classList.add("error");
    }
    else {
        checkmark.classList.remove("error");
    }

    event.preventDefault();

    if (name.classList.contains("error") || email.classList.contains("error") ||
        agreement.classList.contains("error")) {
        console.log("won't go through, missing fields");
    }
    else {
        document.querySelector(".innerContainer").classList.toggle("visible");
        document.querySelector(".thankYouContainer").classList.toggle("visible");
        document.getElementById("submittedName").textContent = name.value;
        document.getElementById("submittedEmail").textContent = email.value;
    }
}

discountForm.addEventListener("submit", validate);
agreement.addEventListener("change", onChecked);
email.addEventListener("input", onEmailChange);
name.addEventListener("input", onNameChange);