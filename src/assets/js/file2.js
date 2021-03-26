console.log('file 2');
const links = document.querySelectorAll('.nav__item a[data-anchor="anchor"]');

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const _this = this;

  // _this.classList.add('nav__link--active')

  const href = _this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}