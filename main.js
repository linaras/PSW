    // function keisti() {
    //     var oldpassword = document.getElementById('oldPassword').value;
    //     var newpassword = document.getElementById('newPassword').value;
    //     var confirmpassword = document.getElementById('confirmPassword').value;
    //     if (oldPassword == '' || newpassword == '' || confirmpassword == '') {
    //         alert('Uzpildykite laukus');
    //     }
    //     else if (oldpassword == newpassword) {
    //         alert("Naujas slaptazodis negali sutapti su senu");
    //     }
    //     else if (newpassword != confirmpassword) {
    //         alert("Keisti slaptazodi");
    //     }
    // }

    document.getElementById('forma').addEventListener('submit', function(e){
        e.preventDefault();
        var password = document.getElementById('password').value;
        var passwordOne = document.getElementById('password_one').value;
        var error = document.getElementById('error');
        var loader = document.querySelector('.loader');
        if (password == '' || passwordOne == '') {
            error.innerHTML = 'Neivedete slaptazodzio';
        } else if (password === passwordOne) {
            error.innerHTML = '';
            // galima nukreipti i kita puslapi
    
            // window.location.href = 'https://www.google.com/';
            loader.style.display = 'block';
        } else {
            error.innerText = 'Slaptazodziai nesutampa';
        }
    });