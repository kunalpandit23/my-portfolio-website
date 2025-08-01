
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Message sent! (Just a demo)");
});
const toggle = document.getElementById('darkToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
