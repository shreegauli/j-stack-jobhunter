<<<<<<< HEAD

const bar = document.getElementById("bar");
const menu = document.getElementById("menue");

if (bar) {
    bar.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}

document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !bar.contains(event.target)) {
        menu.classList.remove("active");
    }
});

const baar = document.querySelector("#bar");
console.log(baar);

const sortBtns = document.querySelectorAll(".job-id > *");

sortBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        sortBtns.forEach((btn) => btn.classList.remove("active"));
        btn.classList.add("active");
    });
});


// Toggle between login and signup forms
const toggleSignup = document.getElementById('toggle-signup');
const toggleLogin = document.getElementById('toggle-login');
const loginForm = document.querySelector('.login-form');
const signupContainer = document.querySelector('.signup-container');

if (toggleSignup) {
    toggleSignup.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.parentElement.classList.add('hidden');
        signupContainer.classList.remove('hidden'); // Show signup form
    });
}

if (toggleLogin) {
    toggleLogin.addEventListener('click', (e) => {
        e.preventDefault();
        signupContainer.classList.add('hidden'); 
        loginForm.parentElement.classList.remove('hidden');
    });
}

// Handle mobile login
const mobileLoginIcon = document.getElementById('mobile-login-icon');
const mobileLoginModal = document.getElementById('mobileLoginModal');
const closeModal = document.querySelector('.close');

mobileLoginIcon.addEventListener('click', () => {
    mobileLoginModal.classList.remove('hidden'); // Show modal
});

closeModal.addEventListener('click', () => {
    mobileLoginModal.classList.add('hidden'); // Hide modal
});

// Handle sending OTP for mobile login
document.getElementById('mobileLoginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    const mobileNumber = document.getElementById('mobile-number').value;

    // Here you would typically send the OTP to the provided mobile number.
    console.log("Sending OTP to:", mobileNumber);

    // Show verification section
    document.getElementById('otpVerificationSection').style.display = 'block';
    document.getElementById('display-mobile').textContent = mobileNumber; // Display the entered mobile number

    // Hide the mobile number input section
    this.style.display = 'none';
});

// Handle OTP verification for mobile login
document.getElementById('verifyOtpBtn').addEventListener('click', function() {
    const otp = document.getElementById('otp').value;

    // Here you would typically verify the entered OTP with your server.
    console.log("Verifying OTP:", otp);

    // Simulate successful verification
    alert("OTP verified successfully!"); // Replace with actual logic
});

// Handle signup form submission and sending OTP
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

   const signupEmail = document.getElementById('signup-email').value;
   const signupMobileNumber = document.getElementById('signup-mobile').value;
   const signupPassword = document.getElementById('signup-password').value;
   const confirmPassword = document.getElementById('confirm-password').value;

   // Validate password confirmation
   if (signupPassword !== confirmPassword) {
       alert("Passwords do not match!"); // Alert user if passwords do not match
       return; // Stop further execution
   }

   // Here you would typically send the OTP to the provided mobile number.
   console.log("Sending Signup OTP to:", signupMobileNumber);

   // Show verification section for signup
   document.getElementById('signupOtpVerificationSection').style.display = 'block';
   document.getElementById('display-signup-mobile').textContent = signupMobileNumber; // Display the entered mobile number

   // Hide the signup mobile number input section
   this.style.display = 'none';
});

// Handle OTP verification for signup
document.getElementById('verifySignupOtpBtn').addEventListener('click', function() {
   const signupOtp = document.getElementById('signup-otp').value;

   // Here you would typically verify the entered OTP with your server.
   console.log("Verifying Signup OTP:", signupOtp);

   // Simulate successful verification
   alert("Signup OTP verified successfully!"); 
});



document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const signupEmail = document.getElementById('signup-email').value;
    const signupMobileNumber = document.getElementById('signup-mobile').value;
    const signupPassword = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate password confirmation
    if (signupPassword !== confirmPassword) {
        alert("Passwords do not match!"); // Alert user if passwords do not match
        return; // Stop further execution
    }

    // Here you would typically send the OTP to the provided mobile number.
    console.log("Sending Signup OTP to:", signupMobileNumber);

    // Show verification section for signup
    document.getElementById('signupOtpVerificationSection').style.display = 'block';
    document.getElementById('display-signup-mobile').textContent = signupMobileNumber; // Display the entered mobile number

    // Hide the signup mobile number input section
    this.style.display = 'none';
});

document.getElementById('verifySignupOtpBtn').addEventListener('click', function() {
    const signupOtp = document.getElementById('signup-otp').value;

    console.log("Verifying Signup OTP:", signupOtp);

    alert("Signup OTP verified successfully!");
=======

const bar = document.getElementById("bar");
const menu = document.getElementById("menue");

if (bar) {
    bar.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}

document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !bar.contains(event.target)) {
        menu.classList.remove("active");
    }
});

const baar = document.querySelector("#bar");
console.log(baar);

const sortBtns = document.querySelectorAll(".job-id > *");

sortBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        sortBtns.forEach((btn) => btn.classList.remove("active"));
        btn.classList.add("active");
    });
>>>>>>> d832e8aaece5de9e68a56dfa92d2d9c3096c6c60
});