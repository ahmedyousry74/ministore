


    let username = document.querySelector("#username");

    let email = document.querySelector("#email");

    let password = document.querySelector("#password");

    let signBtn = document.querySelector("#signUp");

    signBtn.addEventListener("click" , function (e)   {
        e.preventDefault();
        if( username.value === "" || email.value === "" || password.value === "")
        {
            alert("please fill the fields");
        }
        else{
            localStorage.setItem("username" , username.value);
            localStorage.setItem("email" , email.value);
            localStorage.setItem("password" , password.value);

            setInterval( () => {
                window.location = "log.html"
            } , 2000); 
        }

    });

