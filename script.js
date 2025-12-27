
    // Loading animation
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() {
        document.getElementById('loadingScreen').style.display = 'none';
        document.querySelector('header').style.display = 'flex';
        document.querySelector('main').style.display = 'block';
        document.querySelector('footer').style.display = 'block';
      }, 3000);
    });
    function verify(email,password,err){
        if (email=="niyitangaeric77@gmail.com"&&password=="Eric1234@") {
            window.location.href="manage.html";
            alert('Successful registration')
        } else {
            document.getElementById('error').innerText="Invalid credential";
        }
    }
    window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
        const container = document.getElementById('main-content');
        container.style.display = 'flex';
        container.classList.add('show');

        const left = document.getElementById('left-section');
        const right = document.getElementById('right-section');
        left.classList.add('show');

        // Add animation class to login box
        const loginBox = document.getElementById('login-box');
        loginBox.classList.add('show');

        right.classList.add('show');
    }, 2000);
});
