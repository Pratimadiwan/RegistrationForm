document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

   
    let name = document.getElementById('name').value.trim();
    let mobile = document.getElementById('mobile').value.trim();
    let email = document.getElementById('email').value.trim();
    let age = document.getElementById('age').value.trim();
    let date = document.getElementById('date').value.trim();

    let isValid = true; 
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    } else {
        for (let i = 0; i < name.length; i++) {
            let char = name[i];
            if (!(char >= 'a' && char <= 'z') && !(char >= 'A' && char <= 'Z') && char !== ' ') {
                document.getElementById('nameError').textContent = 'Name can only contain alphabetic characters and spaces.';
                isValid = false;
                break;
            }
        }
    }

    if (mobile === '') {
        document.getElementById('mobileError').textContent = 'Mobile number is required.';
        isValid = false;
    } else {
        let digitCount = 0;
        for (let i = 0; i < mobile.length; i++) {
            if (mobile[i] >= '0' && mobile[i] <= '9') {
                digitCount++;
            }
        }
        if (digitCount !== 10) {
            document.getElementById('mobileError').textContent = 'Mobile number must be exactly 10 digits.';
            isValid = false;
        }
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (age === '' || isNaN(age)) {
        document.getElementById('ageError').textContent = 'Please enter a valid age.';
        isValid = false;
    } else if (age < 18 || age > 120) {
        document.getElementById('ageError').textContent = 'Age must be between 18 and 120.';
        isValid = false;
    }

    if (date === '') {
        document.getElementById('dateError').textContent = 'Date of Birth is required.';
        isValid = false;
    }

    if (isValid) {
        let formData = {
            name: name,
            mobile: mobile,
            email: email,
            age: age,
            date: date
        };
        localStorage.setItem('registrationData', JSON.stringify(formData));

        alert('Form submitted successfully!');

        document.getElementById('registrationForm').reset();
    }
});
