//-------------navigation bar/start
function baranimation(bar) {
  bar.classList.toggle("change");
}
//-------------navigation bar/end

//-------------navigation open-menu/start

function openmenu(){
            if(openlink.style.maxHeight == "50px")
            {
                openlink.style.maxHeight = "500px";
            }
            else{
                openlink.style.maxHeight = "50px";
            }
        }

//-------------navigation open-menu/end

//-------------open/close-eye password (login)

let password = document.getElementById("password");
let eyeclose = document.querySelector(".ri-eye-off-line")
let eyeopen = document.querySelector(".ri-eye-line");

eyeclose.addEventListener("click", () => {
    password.type = "text";
    eyeopen.classList.remove("close");
    eyeclose.classList.add("close");
});

eyeopen.addEventListener("click", () => {
    password.type = "password";
    eyeopen.classList.add("close");
    eyeclose.classList.remove("close");
});

//-------------open/close-eye password (login) end

// inavlid/correct username/password start

function checkLogin(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    var correctUsername = "1";
    var correctPassword = "1";

    if (username === correctUsername && password === correctPassword) {
        window.location.href = "dashboard.html";
    } else {
        errorMessage.classList.add("error-show");
    }
}

function errorclose() {
    let errorMessage = document.getElementById("error-message");
    errorMessage.classList.remove("error-show");
}
// invalid/correct username/password end

// weather update start

