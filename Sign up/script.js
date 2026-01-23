// ============================================
// GOOGLE SIGN UP BUTTON HANDLER
// ============================================

const googleSignUpBtn = document.getElementById("googleSignUpBtn");

googleSignUpBtn.addEventListener("click", function (e) {
  e.preventDefault();
  
  // For now, show a demo alert
  alert("Google Sign Up will be integrated with your Client ID. Update the script with your credentials.");
  
  // Uncomment below when you have your Google Client ID
  /*
  const CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com";
  const REDIRECT_URI = window.location.origin + "/Sign up/google-callback";
  const SCOPE = "openid email profile";
  
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
    `client_id=${CLIENT_ID}` +
    `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
    `&response_type=code` +
    `&scope=${encodeURIComponent(SCOPE)}`;
  
  window.location.href = authUrl;
  */
});

// ============================================
// FORM SUBMISSION HANDLER
// ============================================

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;
  const terms = document.getElementById("terms").checked;

  // Validate username
  if (username.length < 3) {
    alert("Username must be at least 3 characters!");
    return;
  }

  // Validate email format (basic)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address!");
    return;
  }

  // Validate password length
  if (password.length < 6) {
    alert("Password must be at least 6 characters!");
    return;
  }

  // Validate password confirmation
  if (password !== confirm) {
    alert("Passwords do not match!");
    return;
  }

  // Validate terms & conditions
  if (!terms) {
    alert("Please agree to the terms & conditions!");
    return;
  }

  // Show success message
  alert(`Welcome ${username}! Your account has been created.`);

  // Reset form
  signupForm.reset();
});
