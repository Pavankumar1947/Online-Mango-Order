document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check if the user exists in local storage
  if (localStorage.getItem(username)) {
    alert("Username already exists. Please choose a different username.");
    return;
  }

  // Store the user in local storage
  localStorage.setItem(username, password);

  alert("Signup successful! You can now login.");
  document.getElementById("signup-form").reset();
  window.location.href = 'Login.html';
});

