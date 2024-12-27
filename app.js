function readValue(event) {
    event.preventDefault();
    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let name = nameInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;


    let isValid = true;

    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    }

    if (password === "") {
        passwordError.textContent = "Password is required";
        isValid = false;
    }
    else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
        isValid = false;

    }


    if (isValid) {
        document.write`<b>Successfully signed in! 🎉 <br><br></b>`
        document.write("Name:", name + "<br>" +"<br>")
        document.write("Email:", email + "<br>" +"<br>")
        document.write("Password:", password + "<br>" +"<br>")
    }
}












