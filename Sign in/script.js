// ============================================
// GOOGLE SIGN IN BUTTON HANDLER
// ============================================

const googleSignInBtn = document.getElementById("googleSignInBtn");

googleSignInBtn.addEventListener("click", function (e) {
  e.preventDefault();
  
  // For now, show a demo alert
  alert("Google Sign In will be integrated with your Client ID. Update the script with your credentials.");
  
  // Uncomment below when you have your Google Client ID
  /*
  const CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com";
  const REDIRECT_URI = window.location.origin + "/Sign in/google-callback";
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

const signinForm = document.getElementById("signinForm");

signinForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const remember = document.getElementById("remember").checked;

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

  // Save remember me preference
  if (remember) {
    localStorage.setItem("rememberEmail", email);
  } else {
    localStorage.removeItem("rememberEmail");
  }

  // Show success message
  alert(`Welcome back! You have signed in successfully.`);

  // Reset form
  signinForm.reset();
});

// Load remembered email on page load
window.addEventListener("load", function () {
  const savedEmail = localStorage.getItem("rememberEmail");
  if (savedEmail) {
    document.getElementById("email").value = savedEmail;
    document.getElementById("remember").checked = true;
  }
});
