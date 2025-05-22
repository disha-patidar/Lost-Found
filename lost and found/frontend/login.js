async function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Please fill in all fields.");
        return false;
    }

    try {
        const response = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include", // Important to receive cookies from backend
            body: JSON.stringify({
                email,  // or username if you're using that
                password
            })
        });

        const data = await response.json();

        if (response.ok) {
            alert("Login successful!");
            console.log("User:", data.data.user);
            console.log("AccessToken:", data.data.accessToken);

            // You can redirect the user to the dashboard or home page
            window.location.href = "/dashboard.html";
        } else {
            alert(data.message || "Login failed");
        }
    } catch (err) {
        console.error("Error:", err);
        alert("Something went wrong!");
    }

    return false;
}

// function handleLogin(event) {
//     event.preventDefault();
    
//     const email = document.getElementById("email").value.trim();
//     const password = document.getElementById("password").value.trim();

//     if (!email || !password) {
//         alert("Please fill in all fields.");
//         return false;
//     }

//     // Add your authentication logic here
//     console.log("Logging in with", email, password);
//     alert("Login successful (demo)");

//     // Redirect or do something after login
//     return false;
// }
