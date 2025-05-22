function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Please fill in all fields.");
        return false;
    }

    // Add your authentication logic here
    console.log("Logging in with", email, password);
    alert("Login successful (demo)");

    // Redirect or do something after login
    return false;
}
