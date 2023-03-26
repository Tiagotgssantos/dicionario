const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const links = [
  { name: 'html', url: '' },
  { name: 'Estrutura html', url: '' },
  { name: 'Tags html', url: '' },
  { name: 'Javascript', url: '' },
  { name: 'CSS', url: '' },
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

//codigo para explicar utilizando um click
let btn = document.getElementById("btn");


function abrirPagina(){
  let pagina = document.getElementById("pagina");
  if(pagina.style.display==="block"){
    pagina.style.display = "none";
  }else{
    pagina.style.display = "block";
  }
}

btn.addEventListener('click', abrirPagina);

let btnFechar = document.getElementById("btnFechar");

function fecharpagina(){
  let pagina = document.getElementById("pagina");
  if(pagina.style.display==="block"){
    pagina.style.display = "none";
  }else{
    pagina.style.display = "block";
  }
}

btnFechar.addEventListener('click', fecharpagina);
 
//codigo para explicar utilizando um click

let btn2 = document.getElementById("btn2");


function abrirPagina2(){
  let pagina2 = document.getElementById("pagina2");
  if(pagina2.style.display==="block"){
    pagina2.style.display = "none";
  }else{
    pagina2.style.display = "block";
  }
}

btn2.addEventListener('click', abrirPagina2);

let btnFechar2 = document.getElementById("btnFechar2");

function fecharpagina2(){
  let pagina2 = document.getElementById("pagina2");
  if(pagina2.style.display==="none"){
    pagina2.style.display = "inline";
  }else{
    pagina2.style.display = "none";
  }
}

btnFechar2.addEventListener('click', fecharpagina2);

