// Select all the items I want to interact with
var elMainMenu = document.getElementById('mainmenu');
var elHambBtn = document.querySelector('.hamburger');


// If that test is successful, assign a "listener" to the hamburger button
// Put a small test output in there: console.log('click!')
elHambBtn.addEventListener('click', function(e) {
  elMainMenu.classList.toggle('close');
});

// Some other next steps...
