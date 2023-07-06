// Login form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;

    // Check if the user exists in local storage
    if (!localStorage.getItem(username)) {
      alert("User not found. Please sign up first.");
      return;
    }

    // Verify the password
    if (localStorage.getItem(username) !== password) {
      alert("Incorrect password. Please try again.");
      return;
    }

    alert("Login successful!");
    document.getElementById("login-form").reset();
    window.location.href = 'Home.html';
  });