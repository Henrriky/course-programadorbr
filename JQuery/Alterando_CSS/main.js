//Adicionando classes
setTimeout(() => {
    $("h1").addClass("bg-blue");
}, 2000)

setTimeout(() => {
    $("h1").removeClass("bg-blue");
}, 3000)

setTimeout(() => {
    $("h1").toggleClass("bg-blue")
}, 3000)

//Modificando o CSS
$("h1").css("background-color", "blue");
$("h1").css("font-size", "50px");

//Modificando o CSS com varias propriedades
$("h1").css({
    "line-height": "50px",
    "font-weight": "bold"
})
