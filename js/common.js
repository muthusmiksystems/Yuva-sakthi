var siteUrl = "https://yuvasakthiacademy.com/";
// var siteUrl = "localhost";
// console.log(typeof jQuery);
$(document).ready(function () {
  $(".wpcf7-form").submit(function (e) {
    e.preventDefault();

    var validate = validateEmail();

    if (validate) {
      var formData = $(this).serialize();
      saveEnquiry(formData);
    }
  });

  //corporate training
  $(".cptf-form").submit(function (e) {
    e.preventDefault();
    var validateCorporate = corporateValidation();

    if (validateCorporate) {
      var corporateData = $(this).serialize();
      saveCorporate(corporateData);
    }
  });

  // signup
  $(".su-form").submit(function (e) {
    e.preventDefault();
    var validateSignup = signupValidation();

    if (validateSignup) {
      var signupData = $(this).serialize();
      saveSignup(signupData);
    }
  });
});

function validateEmail() {
  var emailInput = document.getElementById("e_mail");
  var phoneInput = document.getElementById("phone");
  var email = emailInput.value.trim();
  var phone = phoneInput.value.trim();

  // Regular expression for validating email format
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Regular expression for validating mobile number format
  var phonePattern = /^\d{10}$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    emailInput.focus(); // Focus on the email input field
    return false; // Return false to prevent form submission
  }
  if (!phonePattern.test(phone)) {
    alert("Please enter a valid 10-digit mobile number.");
    phoneInput.focus(); // Focus on the mobile number input field
    return false; // Return false to prevent form submission
  }
  return true;
  // If email is valid, proceed with form submission
}

//enquiry
function saveEnquiry(formData) {
  formData += "&g-recaptcha-response=" + grecaptcha.getResponse();

  $.ajax({
    type: "POST",
    url: "enquiry.php",
    data: formData,
    dataType: "json",
    success: function (response) {
      showToastLoader(response.message, response.status);
      // alert("resposnse==".response);
    },
    error: function (error) {
      alert(error);
      console.error(error);
    },
  });
}

function showToastLoader(message, status) {
  console.log("called");

  // Your AJAX call goes here
  // For simplicity, let's simulate a successful AJAX call
  var color = "green";
  if (status == 400) color = "red";
  setTimeout(function () {
    // Show a success toast message
    Toastify({
      text: message,
      duration: 3000, // 3 seconds
      gravity: "top", // "top" or "bottom"
      position: "center", // "left", "center", "right"
      backgroundColor: color,
    }).showToast();
  }, 1000); // Simulating a delay for the AJAX call
}

//corporate training
function corporateValidation() {
  var nameCorporateInput = document.getElementById("fname");
  var mailCorporateInput = document.getElementById("uemail");
  var mobileCorporateInput = document.getElementById("uphno");
  var companyCorporateInput = document.getElementById("ucompany");
  var pplCorporateInput = document.getElementById("uppl");
  var courseCorporateInput = document.getElementById("ucourse");
  var commentCorporateInput = document.getElementById("umsg");

  var nameCorporate = nameCorporateInput.value.trim();
  var mailCorporate = mailCorporateInput.value.trim();
  var mobileCorporate = mobileCorporateInput.value.trim();
  var companyCorporate = companyCorporateInput.value.trim();
  var pplCorporate = pplCorporateInput.value.trim();
  var courseCorporate = courseCorporateInput.value.trim();
  var commentCorporate = commentCorporateInput.value.trim();

  var namePattern = /^[A-Za-z\s]{3,30}$/;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var phonePattern = /^\d{10}$/;
  var companyPattern = /^.{3,100}$/;

  //name valdiation
  if (!namePattern.test(nameCorporate)) {
    alert("Please enter a valid name (3-30 characters, alphabets only).");
    nameCorporateInput.focus();
    return false;
  }

  // Email validation
  if (!emailPattern.test(mailCorporate)) {
    alert("Please enter a valid email address.");
    mailCorporateInput.focus();
    return false;
  }

  // Mobile number validation
  if (!phonePattern.test(mobileCorporate)) {
    alert("Please enter a valid 10-digit mobile number between (6-9)");
    mobileCorporateInput.focus();
    return false;
  }

  // Company name validation
  if (!companyPattern.test(companyCorporate)) {
    alert("Please enter a valid company name (3-100 characters).");
    companyCorporateInput.focus();
    return false;
  }

  // Number of people validation
  if (pplCorporate === "Select People Count") {
    alert("Please select the number of people.");
    pplCorporateInput.focus();
    return false;
  }

  // Course validation
  if (courseCorporate === "Select Interested Course") {
    alert("Please select a training course.");
    courseCorporateInput.focus();
    return false;
  }

  // Comments validation
  if (commentCorporate.length > 180) {
    alert("Comments should not exceed 180 characters.");
    commentCorporateInput.focus();
    return false;
  } else if (commentCorporate.length < 4) {
    alert("Comments should atleast be 4 characters.");
    commentCorporateInput.focus();
    return false;
  }

  return true;
}

////corporate training

function saveCorporate(corporateData) {
  $.ajax({
    type: "POST",
    url: "corporate.php",
    data: corporateData,
    dataType: "json",
    success: function (response) {
      // window.location.reload();
      console.log("Response received:", response); // Log the entire response object
      showToastLoader(response.message, response.status);
    },
    error: function (xhr, status, error) {
      console.error("Error Status:", status); // Log status (e.g., "error")
      console.error("Error Thrown:", error); // Log the error message (e.g., "Internal Server Error")
      console.error("XHR Object:", xhr); // Log the full XHR object for more details

      // Displaying the actual response text might reveal HTML if there's an error
      console.log("Response Text:", xhr.responseText);
      // alert("An error occurred: " + error);
    },
  });
}

//signup

function signupValidation() {
  var nameInput = document.getElementById("f_name");
  var mailInput = document.getElementById("e_mail");
  var mobileInput = document.getElementById("mobile_number");
  var passInput = document.getElementById("pass_word");

  var namevalidate = nameInput.value.trim();
  var mailvalidate = mailInput.value.trim();
  var mobilevalidate = mobileInput.value.trim();
  var passvalidate = passInput.value.trim();

  var nameSignupPattern = /^[A-Za-z\s]{3,30}$/;
  var emailSignupPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var phoneSignupPattern = /^\d{10}$/;
  var passSignupPattern = /^.{3,100}$/;

  // Name validation
  if (!nameSignupPattern.test(namevalidate)) {
    alert("Please enter a valid name (3-30 characters, alphabets only).");
    nameInput.focus();
    return false;
  }

  // Email validation
  if (!emailSignupPattern.test(mailvalidate)) {
    alert("Please enter a valid email address.");
    mailInput.focus();
    return false;
  }

  // Mobile number validation
  if (!phoneSignupPattern.test(mobilevalidate)) {
    alert("Please enter a valid 10-digit mobile number.");
    mobileInput.focus();
    return false;
  }

  // Password validation
  if (!passSignupPattern.test(passvalidate)) {
    alert("Please enter a valid password (3-100 characters).");
    passInput.focus();
    return false;
  }

  return true;
}

function saveSignup(signupData) {
  $.ajax({
    type: "POST",
    url: "signup.php",
    data: signupData,
    dataType: "json",

    success: function (response) {
      console.log("Response received:", response);
      showToastLoader(response.message, response.status);
      // Optionally reload the page here, if needed
      // window.location.reload();
    },
    error: function (xhr, status, error) {
      console.error("AJAX error: " + status + ": " + error);

      // Optionally reload the page here, if needed
      // window.location.reload();
    },
  });
}
