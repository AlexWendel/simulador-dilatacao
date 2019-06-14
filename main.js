var listaDeMateriais = "https://gist.githubusercontent.com/AlexWendel/5dc895207dd96f688287822918800799/raw/94260fbc5ec38eeedfa20ffe6e80d6340f97f7f4/gistfile1.txt";

$(document).ready(function(){
    $.getScript("app.js");
    console.log("LOCK AND LOADED!");
    materiais = $("#materiais");
    $.getJSON(listaDeMateriais, function(data){
        $.each(data, function(k, v){
            var elemento = $("<div></div>").css({
                "background-color": "blue",
                "padding": "10px",
                "color": "white",
                "margin": "10px",
                "max-width": "100px",
                "min-width": "70px"
            }).text(k);


            elemento.on('click', function(e){
                $(this).addClass("selected-button");
            });
            $(materiais).append(elemento);
        });
    });
});
