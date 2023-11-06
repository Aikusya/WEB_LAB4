$(document).ready(function() {
  // Function to validate email format
  function isValidEmail(email) {
    // Use a regular expression to check for a valid email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Function to validate the form
  function validateForm() {
    var isValid = true;

    // Validate Name
    var name = $('#name').val();
    if (name.trim() === '') {
      $('#nameError').text('Name is required');
      isValid = false;
    } else {
      $('#nameError').text('');
    }

    // Validate Email
    var email = $('#email').val();
    if (email.trim() === '' || !isValidEmail(email)) {
      $('#emailError').text('Enter a valid email address');
      isValid = false;
    } else {
      $('#emailError').text('');
    }

    // Validate Password
    var password = $('#password').val();
    if (password.trim() === '') {
      $('#passwordError').text('Password is required');
      isValid = false;
    } else {
      $('#passwordError').text('');
    }

    return isValid;
  }

  // Handle form submission
  $('#myForm').submit(function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Validate the form
    if (validateForm()) {
      // Form is valid, log a message to the console
      console.log('Form is valid!');
      // You can uncomment the following line to show an alert
      // alert('Form submitted successfully!');
    } else {
      // Form is not valid, log a message to the console
      console.log('Form is not valid!');
    }
  });
});

// For Showing hidden button

$(document).ready(function() {
  // Event listener for the specific button
  $('#specificButton').click(function() {
    // Show the hidden button
    $('#hiddenButton').show();
  });
});

