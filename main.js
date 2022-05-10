window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}

function activateMenuAtCurrentSection() {
  const targetLine = scrollY + innerHeight / 2
  // const- variavel targetline será constante, ou seja, sempre será esse cálculo.
  // se você quiser que a variavel varie kkkk você usa let (let it change). não é mais var.

  //em seguida vamos verificar se a seção passou da linha. para isso precisamos identificar quais dados vou precisar.
  const sectionTop = home.offsetTop
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
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
#services .card
#about,
#about header,
#about .content`)

// da pra abrir e fechar strings com `(acento grave) ao invés de aspas simples para quebrar a linha. O nome disso é template literals. ajuda a organizar.

// criar objeto no javascript: um par de chaves {obj}. . no javascript=objeto. no javascript, quase tudo é um objeto.

// princípios de código limpo: uma função deve fazer somente uma coisa bem feita, se tem outra, faz uma nova função.
