const app = new PIXI.Application({ autoResize: true });
const renderer = app.renderer;
const stage = app.stage;
const objects = new PIXI.Container();
const name_label_css = { fontFamily: 'Arial', fontSize: 16, fill: 0xffffff, align: 'center' };
const coeficient_label_css = { fontFamily: 'Arial', fontSize: 14, fill: 0xffffff, align: 'center' }
const generic_style = { fontFamily: 'Arial', fontSize: 12, fill: 0xffffff, align: 'center' }
var running = true;
const pixelConst = 37.7952755906;

function gerar_objeto(material) {

    coeficiente = material.coeficiente;
    nome = material.nome;
    cor = material.cor;
    comprimento = material.comprimento;

    name_text = new PIXI.Text(nome, name_label_css);
    coeficient_text = new PIXI.Text(coeficiente.toExponential().replace("e", "x10"), coeficient_label_css);
    vagabu = new PIXI.Text("T:" + material.temperatura, generic_style);
    length_text = new PIXI.Text("L=" + material.comprimento, generic_style);

    object = new PIXI.Graphics();
    object.interactive = true;
    object.beginFill(cor);
    object.drawRect(0, 0, comprimento, 50);

    object.addChild(name_text);

    vagabu.anchor.set(0, -2);
    object.addChild(vagabu);

    coeficient_text.anchor.set(-2.5, -1);
    object.addChild(coeficient_text);

    length_text.anchor.set(0, -3);
    object.addChild(length_text);

    object.endFill();
    // app.stage.addChild(material.object);
    return object;
}
window.addEventListener('resize', resize);
function resize() {
    app.renderer.resize(window.innerWidth, window.innerHeight);
    $('#menu').height(window.innerHeight);
}
resize();