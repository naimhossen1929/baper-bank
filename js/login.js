document.getElementById('login-btn').addEventListener('click', function(){
     const userEmail = document.getElementById('user-email');
     const email = userEmail.value;
     const userPassword = document.getElementById('user-password');
     const password = userPassword.value;
     if(email === 'son@father.com' && password === 'naim' ){
        location.href = 'account.html';
     }else{
        const text = 'Please type correct Password or Email address';
        alert(text);
     }
});