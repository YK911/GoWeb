console.log('file 1');

const window = document.querySelector('window');
const navigationBar = document.querySelector('.nav');
const y = Math.round(window.scrollY);

console.log(y)
// window.scrollTop(function() {
//     return navigationBar.classList.add('nav__fixed', window.scrollTop() > 120);
// });


// document.querySelector("form").addEventListener("submit", handleSubmit);

// const handleSubmit = (e) => {
//   e.preventDefault()
//   let myForm = document.getElementById('pizzaOrder');
//   let formData = new FormData(myForm)
//   fetch('/', {
//     method: 'POST',
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: new URLSearchParams(formData).toString()
//   }).then(() => console.log('Form successfully submitted')).catch((error) =>
//     alert(error))
// }