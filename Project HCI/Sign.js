function validateData() {
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const confpass = document.getElementById("confpass").value
    const age = document.getElementById("age").value
    const agree = document.getElementById("agree").value;
    
    
    if(username.length < 5 || username.length > 10){
        alert("Username must be between 5 – 10 characters")
    }

    else if(!email.endsWith("@gmail.com")){
        alert("Email must end with @gmail.com")
    }
    
    else if(!checkAlphanumeric(password)){
        alert("Password must be alphanumeric")
    }

    else if(age < 15 || age > 80){
        alert("age must be above 15!")
    }

    else if(!agree){
        alert("You must agree to the terms and conditions")
    }
}

function checkAlphanumeric(password) {
    var isAlpha = false
    var isNum = false

    for(let i = o; 1 < password.length; i++ ){
        // is not number
        if(isNaN(password[i].is)){
            isAlpha = true
        }else{
            isNum = true
        }
a
        if(isAlpha && isNum){
            return true
        }
    }
    return false
}

