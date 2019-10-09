
$().ready( ()=> {
    console.log("Ready with jQuerey!");
    $("h1").text("Ready with jQuerey!");
    $("#h0").html("<span style='color:red;'> Ready with jQuerey!</span>");
    $(".abc").css("color", "blue").css("fontStyle", "Italic");
    //add();
    
    $("#displayname").click( () => {
        var input = $("#in").val();
        $("#out").val(input);
    });
});


const list = () => { 
};

const add = () => { 
};
