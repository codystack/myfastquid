//Greet User
var time = new Date().getHours();
if (time < 4) {
    greeting = "You should be in bed 🙄!";
}  else if (time < 12) {
    greeting = "Good morning, wash your hands 🌤";
} else if (time < 16) {
    greeting = "It's lunch 🍛 time, what's on the menu!";
} else {
    greeting = "Good Evening 🌙, how was your day?";
}
document.getElementById("greet").innerHTML = greeting;

$(document).ready(function() {
    $('#example').DataTable( {
        "paging":   false,
        "ordering": false,
        "info":     false
    } );
} );

//Amount Toggle
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#showWallet');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});

// $(document).ready(function(){
//     $('.togglePassword').click(function(){
//         $('#showhideForm').hide(500);
//         $('#hideshowForm').show(500);
//     });
//     $('.hidebtn').click(function(){
//         $('#showhideForm').show(500);
//         $('#hideshowForm').hide(500);
//     });

//     this.classList.toggle('bi-eye');
// });