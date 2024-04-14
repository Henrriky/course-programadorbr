let jq = $("#lista1").slideUp()
                        .slideDown()
                            .fadeOut();
console.log(jq);

//JavaScript
let objeto = {
    print10: () => {
        console.log(10);
        return this;
    },
    print20: () => {
        console.log(20);
        return this;
    }
}

objeto.print10().print20(); //10 - 20
