
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