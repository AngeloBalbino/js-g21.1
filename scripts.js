//PRODUTOS DO CARROSSEL - (MAIN)
var produtos = [
  {
    imagem: '/resoursces/img/imgCarrossel1.jpeg',
    nome: 'From the Star',
    descricao: 'Café com leite expresso e bluebarry.',
    preco: 'R$ 12,90'
  },
  {
    imagem: '/resoursces/img/imgCarrossel2.jpeg',
    nome: 'Falling Behind',
    descricao: 'Café com leite gelado.',
    preco: 'R$ 34,90'
  },
  {
    imagem: '/resoursces/img/imgCarrossel3.jpg',
    nome: 'Promise',
    descricao: 'Coffe&Milk&Caramelo',
    preco: 'R$ 9,90'
  },
  {
    imagem: '/resoursces/img/imgCarrossel4.jpg',
    nome: 'Valentine',
    descricao: 'Coffe duplo.',
    preco: 'R$ 24,90'
  },
  {
    imagem: '/resoursces/img/imgCarrossel5.jpg',
    nome: 'Love Girl',
    descricao: 'Coffe or love.',
    preco: 'R$ 14,90'
  },
  {
    imagem: '/resoursces/img/imgCarrossel6.jpg',
    nome: 'Dreamer',
    descricao: 'Coffe foleado a ouro',
    preco: 'R$ 199,90'
  }
]

// CARROSSEL - (MAIN)
var atual = 0
var tam = produtos.length
var tempslider

function mostraProdutos() {
  var dvSlider = document.querySelector('#dvSlider')
  dvSlider.innerHTML = ''

  let qtdMostrar = 3 //
  if (window.innerWidth <= 768) {
    qtdMostrar = 1
  } else if (window.innerWidth <= 1024) {
    qtdMostrar = 2
  }

  for (let i = 0; i < qtdMostrar; i++) {
    let index = (atual + i) % tam
    let p = produtos[index]

    let div = document.createElement('div')
    div.className = 'produto'
    div.innerHTML = `
      <img src="${p.imagem}" alt="${p.nome}">
      <div class="info-produto">
        <h3>${p.nome}</h3>
        <p>${p.descricao}</p>
        <div class="info-comprar">
          <span class="preco">${p.preco}</span>
          <button class="btn-comprar" onclick="comprar('${p.nome}')">Comprar</button>
        </div>
      </div>
    `
    dvSlider.appendChild(div)
  }
}
function trocaAutomatica() {
  atual++
  if (atual >= tam) {
    atual = 0
  }
  mostraProdutos()
}
function iniciaslider() {
  mostraProdutos()
  tempslider = setInterval(trocaAutomatica, 2000)
}
function parar() {
  clearInterval(tempslider)
}
function troca(dir) {
  atual += dir
  if (atual < 0) {
    atual = tam - 1
  } else if (atual >= tam) {
    atual = 0
  }
  mostraProdutos()
  clearInterval(tempslider)
}

window.addEventListener('resize', mostraProdutos)



//CARDS MENU - (MAIN)
var itensMenu = [
  { 
    imagem: '/resoursces/img/imgCarrossel1.jpeg', 
    nome: 'Milk&Coffe', 
    descricao: 'Uma fusão harmoniosa entre o sabor encorpado do café e a suavidade do leite vaporizado. Ideal para quem busca uma bebida cremosa, equilibrada e com um toque de aconchego em cada gole.' 
  },
  { 
    imagem: '/resoursces/img/baggio.webp', 
    nome: 'Grãos de Coffe', 
    descricao: 'Selecionados cuidadosamente, nossos grãos trazem o melhor aroma e intensidade do café artesanal. Um convite ao paladar para descobrir notas sutis de chocolate, castanhas e caramelo natural.' 
  },
  { 
    imagem: '/resoursces/img/matcha.jpg', 
    nome: 'Matcha Laufey', 
    descricao: 'Inspirado na calmaria nórdica, este matcha é uma mistura perfeita de chá verde japonês e leite cremoso. Seu sabor terroso e suave cria uma experiência única e revigorante, perfeita para momentos de pausa.' 
  },
  { 
    imagem: '/resoursces/img/coffechoc.jpg', 
    nome: 'Coffe Chocolate', 
    descricao: 'A combinação irresistível entre o café intenso e o chocolate aveludado. Cada gole revela uma mistura envolvente e equilibrada, perfeita para aquecer o coração e adoçar o dia.' 
  },
  { 
    imagem: '/resoursces/img/milkshake.jpg', 
    nome: 'MilkCimbra', 
    descricao: 'Uma bebida gelada e cremosa que combina café, leite e um leve toque de baunilha. Refrescante, deliciosa e ideal para os dias quentes, onde o sabor do café se transforma em uma experiência suave e doce.' 
  },
  { 
    imagem: '/resoursces/img/coado.jpg', 
    nome: 'Café Coado', 
    descricao: 'Tradicional e acolhedor, o café coado preserva o sabor puro dos grãos em uma bebida aromática e equilibrada. Simples, elegante e repleto de memórias, como o café de casa.' 
  },
  { 
    imagem: '/resoursces/img/caramelo.jpg', 
    nome: 'Café Gelado com Caramelo', 
    descricao: 'Refrescante e doce na medida certa, este café gelado combina o sabor marcante do expresso com a suavidade da calda de caramelo. Uma explosão de energia e prazer a cada gole.' 
  },
  { 
    imagem: '/resoursces/img/mousse.jpg', 
    nome: 'Torta de Mousse', 
    descricao: 'Leve, aerada e com sabor intenso de chocolate, esta torta é perfeita para os amantes de sobremesas sofisticadas. Sua textura cremosa e o toque final de cacau tornam cada fatia inesquecível.' 
  },
  { 
    imagem: '/resoursces/img/limão.jpg', 
    nome: 'Torta de Limão', 
    descricao: 'Um clássico reinventado: base crocante, recheio cremoso e o equilíbrio perfeito entre o doce e o cítrico. Uma sobremesa que desperta frescor e elegância em cada pedaço.' 
  },
  { 
    imagem: '/resoursces/img/maracuja.jpg', 
    nome: 'Torta de Maracujá Polar', 
    descricao: 'Inspirada na intensidade dos sabores tropicais, esta torta combina o azedinho do maracujá com uma textura suave e gelada. Uma experiência refrescante que derrete na boca.' 
  },
  { 
    imagem: '/resoursces/img/maça.jpg', 
    nome: 'Torta de Maçã', 
    descricao: 'Tradicional e reconfortante, com pedaços de maçã caramelizada e toque de canela. Servida levemente morna, é o tipo de sobremesa que desperta memórias e aquece a alma.' 
  },
  { 
    imagem: '/resoursces/img/affagoto.jpg', 
    nome: 'Affogato Laufey', 
    descricao: 'Um encontro entre o quente e o frio: sorvete de baunilha coberto por um expresso encorpado. Cremoso, aromático e elegante, é a sobremesa perfeita para quem ama café em todas as formas.' 
  }
];

//CARDS GIRATÓRIOS - (MAIN)
function carregarMenu() {
  var menuGrid = document.getElementById('menu-grid')
  itensMenu.forEach(item => {
    let card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <img src="${item.imagem}" alt="${item.nome}">
          <h4>${item.nome}</h4>
        </div>
        <div class="card-back">
          <p>${item.descricao}</p>
          <button class="add-to-cart btn-comprar">Comprar</button>
        </div>
      </div>
    `
    menuGrid.appendChild(card)

// CONTADOR - (HEADER)
    const btn = card.querySelector('.add-to-cart')
    if (btn) {
      btn.addEventListener('click', e => {
        e.stopPropagation()
        incrementarCarrinho()
      })
    }
  })
}

const cartCount = document.getElementById('cartCount')
let count = 0

function incrementarCarrinho() {
  count++
  cartCount.textContent = count
  cartCount.style.display = 'inline'
}

document.addEventListener('DOMContentLoaded', carregarMenu)
function comprar() {
  incrementarCarrinho()
}

//VALIDAÇÃO EMAIL
document.getElementById('btnInscrever').addEventListener('click', function() {
  const emailInput = document.getElementById('emaill')
  
  if (emailInput.validity.valid){
    alert('E-mail válido!')
  } else {
    alert('Por favor, insira um e-mail válido.')
  }
})

//HOVERS
const links=document.querySelectorAll('.hoverA')

links.forEach(link =>{
  link.addEventListener('mouseenter', ()=>{
    link.classList.add('ativo')
  })

  link.addEventListener('mouseleave', ()=>{
        link.classList.remove('ativo')
  })
})


const explo = document.getElementById('hoverExplo')

explo.addEventListener('mouseenter', () => {
  explo.classList.add('ativo')
})

explo.addEventListener('mouseleave', () => {
  explo.classList.remove('ativo')
})


const email = document.getElementById('btnInscrever')
email.addEventListener('mouseenter', () => {
  email.classList.add('ativo')
})

email.addEventListener('mouseleave', () => {
  email.classList.remove('ativo')
})


