// Window document

windows.document; //É através do document que acessamos a página HTML

/* DOM - Document object model 
- Cada tag HTML pode ser transformada em um objeto Javascript
- Podemos manipular qualquer tag com o DOM
*/

document.body.innerHTML = "<h1>Esse título foi inserido no JS" + document.body.innerHTML;

// ACESSANDO ELEMENTOS COM JS
document.getElementById("idDaTag"); 

let paragraphs = document.getElementsByClassName("tags1ComClasse");
for (paragraph of paragraphs) {
    console.log(paragraph)
}

let allParagraphs = document.getElementsByTagName("p");

// MODIFICANDO ELEMENTOS

paragraphs.innerHTML = "Novo conteúdo";
paragraphs.innerText = "Novo conteúdo";
paragraphs.textContent = "Novo conteúdo"; 
paragraphs.className = "";
paragraphs.getAttribute("attributeName");
paragraphs.setAttribute("attributeName", "Outro conteúdo");
paragraphs.setAttribute("novoAtributo", "Outro conteúdo");
paragraphs.style = ""