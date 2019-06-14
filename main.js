var listaDeMateriais = "https://raw.githubusercontent.com/AlexWendel/simulador-dilatacao/master/dilata%C3%A7%C3%A3o.json";

$(document).ready(function(){
    $.getScript("app.js");
    console.log("LOCK AND LOADED!");
    materiais = $("#materiais");
    $.getJSON(listaDeMateriais, function(data){
        $.each(data, function(k, v){
            exponential = v["coeficiente"].toExponential(2);;
            registerObject(k, exponential.replace("e", "x10"));
        });
    });
});
