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

const sortItems = document.querySelectorAll('.jobs-container > *');

sortBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        sortBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
//job listing //
        const targetData = btn.getAttribute("data-targe");
        sortItems.forEach((item) =>{
            item.classList.add("delete");
            if(item.getAttribute('data-item') === targetData || targetData === "alljob"){
                item.classList.remove('delete');
            } 
        } );
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


const mobileLoginIcon = document.getElementById('mobile-login-icon');
const mobileLoginModal = document.getElementById('mobileLoginModal');
const closeModal = document.querySelector('.close');

if (mobileLoginIcon) {
    mobileLoginIcon.addEventListener('click', () => {
        mobileLoginModal.classList.remove('hidden'); 
    });
}

if (closeModal) {
    closeModal.addEventListener('click', () => {
        mobileLoginModal.classList.add('hidden');
    });
}


document.getElementById('mobileLoginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const mobileNumber = document.getElementById('mobile-number').value;

    console.log("Sending OTP to:", mobileNumber);


    document.getElementById('otpVerificationSection').style.display = 'block';
    document.getElementById('display-mobile').textContent = mobileNumber;


    this.style.display = 'none';
});


document.getElementById('verifyOtpBtn').addEventListener('click', function() {
    const otp = document.getElementById('otp').value;
    
    console.log("Verifying OTP:", otp);
    
    alert("OTP verified successfully!");
});


document.getElementById('signupForm').addEventListener('submit', function(e) {
   e.preventDefault(); 

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