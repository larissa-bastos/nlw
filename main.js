function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
  //isso ta adicionando a função openmenu. O html vai procurar no objeto document > body e adicionar na lista de classes a menu-expanded.
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top', //vai de cima p baixo quando aparecer
  distance: '30px', //pode ser px
  duration: 700
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header
#services .card`)

// da pra abrir e fechar strings com `(acento grave) ao invés de aspas simples para quebrar a linha. O nome disso é template literals. ajuda a organizar.

// criar objeto no javascript: um par de chaves {obj}. . no javascript=objeto. no javascript, quase tudo é um objeto.
