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
        sortBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
    });
});


const toggleSignup = document.getElementById('toggle-signup');
const toggleLogin = document.getElementById('toggle-login');
const loginForm = document.querySelector('.login-form');
const signupContainer = document.querySelector('.signup-container');

if (toggleSignup) {
    toggleSignup.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.parentElement.classList.add('hidden');
        signupContainer.classList.remove('hidden');
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

if (mobileLoginIcon) {
    mobileLoginIcon.addEventListener('click', () => {
        mobileLoginModal.classList.remove('hidden'); // Show modal
    });
}

if (closeModal) { // Check if closeModal exists
    closeModal.addEventListener('click', () => {
        mobileLoginModal.classList.add('hidden'); // Hide modal
    });
}

// Handle sending OTP for mobile login
document.getElementById('mobileLoginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    const mobileNumber = document.getElementById('mobile-number').value;

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
    
    console.log("Verifying OTP:", otp);
    
    alert("OTP verified successfully!");
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
       alert("Passwords do not match!");
       return; 
   }

   console.log("Sending Signup OTP to:", signupMobileNumber);

   // Show verification section for signup
   document.getElementById('signupOtpVerificationSection').style.display = 'block';
   document.getElementById('display-signup-mobile').textContent = signupMobileNumber;

   this.style.display = 'none'; // Hide the signup mobile number input section
});

// Handle OTP verification for signup
document.getElementById('verifySignupOtpBtn').addEventListener('click', function() {
   const signupOtp = document.getElementById('signup-otp').value;

   console.log("Verifying Signup OTP:", signupOtp);

   alert("Signup OTP verified successfully!");
});