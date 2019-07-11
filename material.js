var materiais = [];

class Material {
    constructor(nome, coeficiente, comprimento, calorEspecifico, cor, type) {
        this.nome = nome;
        this.comprimento = comprimento;
        this.coeficiente = coeficiente;
        this.cor = cor;
        this.temperatura = 0;
        this.temperatura_inicial = 0;
        this.calorEspecifico = calorEspecifico;
        this.comprimentoinicial = comprimento;
        this.object = gerar_objeto(this);
        this.type = type;
    }

    calcularDilatacao(temperatura, tempo) {
        return (this.comprimento * this.coefiente)(temperatura, temperatura);
    }
}

function criarMaterial(nome, comprimento, coeficiente, temperatura, caloresp, tipo) {
    // console.debug("Criando material: "+nome+" com comprimento: "+comprimento+" caoeficiente: "+ dados["coeficiente"]+ "temperatura:"+ temperatura + " e calor específico: "+dados["calorespecifico"])       
    material = new Material(nome, coeficiente, comprimento, caloresp, (Math.random() * 0xFFFFFF << 0));
    material.temperatura = temperatura;
    material.type = tipo
    material.object.position.set(0, 55 * materiais.length);
    app.stage.addChild(material.object);
    materiais.push(material);
    // console.debug(nome + " criado!")
    // dados = $("<div id=dados-" + nome + "></div>");
    // $("#log").append(dados);
}

console.log("MATERIAIS LOADED!")