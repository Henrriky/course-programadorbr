$("h1").text("Lista de compras 2"); //Minha lista 1
$("#lista1").html();
$("#lista1").find(".item2").text("Novo item");
$("#novo").val("Novo valor");
//Passando valor para o atributo
$("#novo").attr("name", "Novo valor do atributo");

//
$("li").attr("name", function (i) {
    return "Item" + 1;
});
$("li").attr("name", function(iteracao, originalValue) {
    return originalValue + iteracao;
})
$("#novo").attr("maxlength", 5).attr("type", password);