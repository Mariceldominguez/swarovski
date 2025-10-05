const mybutton = document.getElementById("boton-volver");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


const modalAlumna = document.getElementById('modal_alumna');

modalAlumna.addEventListener('show.bs.modal', () => {
  document.body.classList.add('sin-scroll');
});

modalAlumna.addEventListener('hidden.bs.modal', () => {
  document.body.classList.remove('sin-scroll');
});
