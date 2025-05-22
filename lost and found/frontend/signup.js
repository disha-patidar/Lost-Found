function handleSignUp(event) {
    event.preventDefault();
    alert("Sign-up successful (demo)");
    return false;
}
function togglePassword(fieldId, iconElement) {
    const field = document.getElementById(fieldId);
    const img = iconElement.querySelector("img");

    if (field.type === "password") {
        field.type = "text";
        img.src = "https://img.icons8.com/ios-glyphs/24/000000/visible--v1.png";
    } else {
        field.type = "password";
        img.src = "https://img.icons8.com/ios-glyphs/24/000000/closed-eye.png";
    }
}
document.getElementById('profile-picture').addEventListener('change', function () {
    const fileName = this.files[0]?.name || "No file chosen";
    document.getElementById('file-name-display').textContent = fileName;
});


