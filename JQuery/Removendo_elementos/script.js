$("#lista1").remove(); //Apaga a lista
$("#lista1").empty(); //Apaga os filhos da lista

//Apagando dois itens da lista
$(".item2").remove();
$(".item3").remove();

//Forma mais fácil
$("li").remove(".item2 , .item3"); 