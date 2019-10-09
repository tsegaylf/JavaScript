let nbr = 0;

$().ready(()=> {
    $("div, input").css("text-align", "center").css("font-family", "consolas");

    $("#plus").click(() => {display(++nbr);});

    $("#minus").click(() => display(--nbr));

    display(nbr);
});

const display = nbr =>{
    let ctrl = $("#nbr");
    ctrl.val(nbr);
    ctrl.css("color", (nbr % 2 == 0 ? "red" : "black"))
        .css("fontWeight", (nbr % 3 == 0 ? "bold" : "normal"))
        .css("fontStyle", (nbr % 5 == 0 ? "italic" : "normal")
        );
}


