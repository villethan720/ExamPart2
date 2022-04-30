const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirmPass');


//LOOK HERE
//had a problem with the ${getFieldName(input)} in the functions. It had a reference error and I
//could not figure it out. I also could not get the verifyField function to show the error when 
//the fields are empty. Again I am not sure what is going wrong or what is not connecting.




//show an input error message
    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.className = 'form-control error';
        const small = formControl.querySelector('small');
        small.innerText = message;
    }

//show success registeration
    function showSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success'
    }

//validate email is valid
    function checkEmail(input) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         if(re.test(input.value.trim())) {
             showSuccess(input);
         } else {
             showError(input, 'Email is not valid'); 
         }
    }

//validate fields have text in them
    function verifyFields(user, email, pass, confirmpass) {
        const message = document.getElementById("p1");
        try {
            if (user === "") {
                throw "Please fill in all fields";
            }
            if (email === "") {
                throw "Please fill in all fields";
            }
            if (pass === "") {
                throw "Please fill in all fields";
            }
            if (confirmpass === "") {
                throw "Please fill in all fields";
            }
    }
    catch(err) {
        message.innerHTML = "Error: " + err;
    }
}

//Validate length of variables
    function checkLength(input, min, max) {
        if(input.value.length < min) {
            showError(
                input,
                `${getFieldName(input)} must be more than ${min} characters`
            );
        } else if (input.value.length > max) {
            showError(
                input,
                `${getFieldName(input)} must be less than ${max} characters`
            );
        } else {
            showSuccess(input);
        }
    }

//Validate password verification
    function checkPasswordsMatch(input, input1) {
        if(input !== input1) {
            showError(
                input,
                `${getFieldName(input1)} must match with password`
            );
        } else {
            showSuccess(input);
        }
    }

//Required Field
    function checkRequired(inputArr) {
        let isRequired = false;
        inputArr.forEach(function(input) {
            if (input.value.trim() === ' '){
                showError(input, `${getFieldName(input)} is required`);
                isRequired = true;
            } else {
                showSuccess(input);
            }
        });
    }
//event listeners
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if(!checkRequired([username,email,password,confirmPass])){
            checkLength(username, 3, 15);
            checkLength(password, 6, 25);
            checkEmail(email);
            checkPasswordsMatch(password, confirmPass);
            verifyFields(username, email, password, confirmPass);
        }
    });
    
