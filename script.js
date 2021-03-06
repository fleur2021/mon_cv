// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(){
  const scrollTop = window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) { // si on es descendu 
    navbar.style.top="-50px";// elle remonte et disparait 
  } else {
    navbar.style.top="0";
  }
  lastScrollTop = scrollTop;

});

// TYPED
var typed = new Typed('.typed', {
  strings: ["Bonjour à tous et à toutes, je me présente je m'appelle SOUHIR", "Après une carrière m'ayant fait découvrir plusieurs milieux professionnels et exercer des métiers différents. J'ai décidé de me lancer à fond dans l'apprentissage du code, j'ai suivi une formation de 7 mois en tantque développeur web chez simplon et je me forme en parallelle en autodidacte aux langages front rt back-end tels que CSS, Javascript, PHP afin devenir le plus rapidement possible développeuse web. Plus qu'un avenir professionnel, je me suis découvert une passion, celle de coder."],
  typeSpeed: 20,
});
  
// COMPTEUR LIVE
let compteur = 0;

$(window).scroll(function() {

  const top = $('.counter').offset().top - window.innerHeight;

  if (compteur == 0 && $(window).scrollTop() > top) {
    $('.counter-value').each(function() {
      let $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum : countTo
      },
      {
        duration: 10000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
    compteur = 1;
  }
});

//AOS
AOS.init();