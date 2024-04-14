let lista1 = $("#lista1");

lista1.html(
    lista1.html() + 
    "<li>Lista 1</li>"
    );

//Jeito melhor
lista1.append("<li>New test</li>"); //Adiciona o elemento no final
lista1.prepend("<li>New test in start"); //Adiciona o elemento no começo

lista1.after("<li>Elemento depois do ul</li>") //Adiciona um elemento após ou do lado do elemento especificado


