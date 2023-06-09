const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const links = [
  { name: 'html', url: '' },
  { name: 'Estrutura html', url: '/paginas/estruturahtml.html' },
  { name: 'Tags html', url: '' },
  { name: 'Javascript', url: '' },
  { name: 'CSS', url:'' },
  { name: 'Display CSS', url: '' },
];

searchInput.addEventListener('click', function() {
  showResults('');
});

searchInput.addEventListener('input', function() {
  const searchText = this.value.trim().toLowerCase();
  showResults(searchText);
});

document.addEventListener('click', function(event) {
  if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
    hideResults();
  }
});

function showResults(searchText) {
  searchResults.innerHTML = '';
  
  links.forEach(link => {
   if (link.name.toLowerCase().includes(searchText)) {
      const li = document.createElement('li');
      li.innerText = link.name;
      li.addEventListener('click', function() {
        window.location.href = link.url;
      });
      searchResults.appendChild(li);
    }
  });
  
  if (searchResults.children.length > 0) {
    searchResults.style.display = 'block';
  } else {
    searchResults.style.display = 'none';
  }
}

function hideResults() {
  searchResults.style.display = 'none';
}

//caixa 1
let caixa = document.getElementById("caixa");
let enter1 = document.getElementById("enter1");

function abrirFechar1(){
  if(caixa.style.display==="block"){
    caixa.style.display = "none";
  }else{
    caixa.style.display = "block";
  }
}

enter1.addEventListener('click', abrirFechar1);

//fechar caixa1

let cxfechar1 = document.getElementById("cxfechar1");

cxfechar1.addEventListener('click', abrirFechar1);


//caixa 2
let caixa2 = document.getElementById("caixa2");
let enter2 = document.getElementById("enter2");

function abrirFechar2(){
  if(caixa2.style.display==="block"){
    caixa2.style.display = "none";
  }else{
    caixa2.style.display = "block";
  }
}

enter2.addEventListener('click', abrirFechar2);

//fechar caixa2

let cxfechar2 = document.getElementById("cxfechar2");

cxfechar2.addEventListener('click', abrirFechar2);


//caixa 3
let caixa3 = document.getElementById("caixa3");
let enter3 = document.getElementById("enter3");

function abrirFechar3(){
  if(caixa3.style.display==="block"){
    caixa3.style.display = "none";
  }else{
    caixa3.style.display = "block";
  }
}

enter3.addEventListener('click', abrirFechar3);

//fechar caixa3

let cxfechar3 = document.getElementById("cxfechar3");

cxfechar3.addEventListener('click', abrirFechar3);



// caixa de texto

const texto1 = "Olá!";
const texto2 = "Bem-vindo ao dicionário do programador.";
const intervalo = 200;
const delay = 1000;
const divTexto = document.getElementById("texto");

function escreverTexto(texto, i, fnCallback) {
  if (i < texto.length) {
    divTexto.innerHTML += texto.charAt(i);
    i++;
    setTimeout(function() {
      escreverTexto(texto, i, fnCallback);
    }, intervalo);
  } else if (typeof fnCallback == "function") {
    fnCallback();
  }
}

function apagarTexto() {
  const textoAtual = divTexto.innerHTML;
  if (textoAtual.length > 0) {
    divTexto.innerHTML = textoAtual.substring(0, textoAtual.length - 1);
    setTimeout(apagarTexto, intervalo);
  } else {
    setTimeout(escreverNovoTexto, delay);
  }
}

function escreverNovoTexto() {
  divTexto.innerHTML = "";
  escreverTexto(texto2, 0, function() {
    setTimeout(apagarTexto, delay);
  });
}

function escrever() {
  divTexto.innerHTML = "";
  escreverTexto(texto1, 0, function() {
    setTimeout(apagarTexto, delay);
  });
}

escrever();

//enter expandir


