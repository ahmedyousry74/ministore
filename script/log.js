   
   let username = document.querySelector("#username");

    let password = document.querySelector("#password");

    let logBtn = document.querySelector("#logBtn");

    let getUesr = localStorage.getItem("username");

    let getPass = localStorage.getItem("password");

    logBtn.addEventListener("click" , function(e){

        e.preventDefault();
        if( username.value === "" || password.value === "")
        {
            alert("failed to log in");
        }
        else{
            if( ( getUesr === username.value)  &&  (getPass === password.value ) );
            {
                setInterval(() => {
                    window.location = "index.html";
                } , 2000);
            }

        }


    });