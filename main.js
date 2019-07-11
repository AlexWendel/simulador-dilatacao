var calor = 0;

function superficial(){
    // M.toast({html: 'Superficial'}); 
}

function linear(){
    // M.toast({html: 'Linear'}); 
    intervalo = (1 / 0.1);
    temperatura_final = (parseInt($("#temperatura-final").val()));
    
    setTimeout(function(){aquecimento_linear(material, temperatura_final);}, 1 * 1000);
}



function volumetrica(){
    // M.toast({html: 'volumetrica'});
}


function aquecimento_linear(material, temperatura_final, intervalo) {
    $.each(materiais, function (material) {

        material = materiais[material];
        temperatura_inicial = material.temperatura;
        // material.temperatura += (calor / material.calorEspecifico);        
        deltaTemp = (temperatura_final - material.temperatura_inicial);
        deformacao = material.comprimentoinicial * material.coeficiente * deltaTemp;
        material.temperatura = temperatura_final;
        console.log(deformacao);

        material.object.width = material.comprimento = material.comprimentoinicial + deformacao;    
        material.object.getChildAt(1).text = "T:" + material.temperatura;
        material.object.getChildAt(3).text = "L:" + material.comprimento + deformacao * (72 / 96).toFixed(2);
        console.debug(material.nome + " Deformacao:" + deformacao)
        console.debug("Tamanho: " + material.comprimentoinicial + deformacao);    
        console.debug("Temperatura: " +  material.temperatura);
        console.debug("Convertido para pixel: " + material.comprimentoinicial + deformacao);
    });
}

function iniciar_simulacao(){
    dilatacao = $("input:radio:checked").map(function(i, el){return $(el).data('type')}).get();
    
    // if (dilatacao == "superficial"){
    //     superficial();
    // }
    // else if (dilatacao == "linear"){
        linear();
    // }
    // else{
        // volumetrica();
    // }
}

$(document).ready(function(){
    console.log("Developed by Turma da Sônica");
    $("#renderer").get(0).appendChild(app.view);    
    $("#temperatura-final").on('keydown', function(){
        iniciar_simulacao();
    });
    $('#menu').height(window.innerHeight);
    
    $.getJSON("https://raw.githubusercontent.com/AlexWendel/simulador-dilatacao/master/dilata%C3%A7%C3%A3o.json")
    .done(function (data) {
        $.each(data, function (material, dados) {
            tipo = ~~(dados["tipo"] == "linear");
            if(tipo){
                coeficienteDil = dados["coeficiente"];
                calorEsp = dados["calorespecifico"];
                comprimentoInicial = 200;
                tempInicial = 0;            
                // console.debug("Criando material: "+material+" com coeficiente: "+coeficienteDil + " e calor específico: "+calorEsp)       
                criarMaterial(material, comprimentoInicial, coeficienteDil, tempInicial, calorEsp, tipo);
            }
        });

    });
    console.log(materiais);
});