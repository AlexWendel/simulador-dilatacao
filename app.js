const app = new PIXI.Application();
const renderer = app.renderer;
const stage = app.stage;

const style = new PIXI.TextStyle({
    fontFamily: 'Ubuntu',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
});

var objects = new PIXI.Container();

function registerObject(nome, coeficiente){
    var text = new PIXI.Text(nome);
    var coeficienttext = new PIXI.Text(coeficiente);
    const graphics = new PIXI.Graphics();

    graphics.interactive = true;
    graphics.beginFill(0xFF2342);
    graphics.drawRect(0,0,150,100);
    graphics.endFill();
    graphics.addChild(text);
    graphics.addChild(coeficienttext);
    graphics.position.set(400, 300);  
    
    
    graphics.on('mousedown', onDragStart)
    .on('touchstart', onDragStart)
    .on('mouseup', onDragEnd)
    .on('mouseupoutside', onDragEnd)
    .on('touchend', onDragEnd)
    .on('touchendoutside', onDragEnd)
    .on('mousemove', onDragMove)
    .on('touchmove', onDragMove);
    
    text.anchor.set(-0.2);
    objects.addChild(graphics);
}







document.body.appendChild(app.view);

var buttonEndTurn = new PIXI.Sprite(PIXI.Texture.fromImage('iron.png'));

// enable the bunny to be interactive... this will allow it to respond to mouse and touch events
buttonEndTurn.interactive = true;

// this button mode will mean the hand cursor appears when you roll over the bunny with your mouse
buttonEndTurn.buttonMode = true;
// make it a bit bigger, so it's easier to grab
buttonEndTurn.scale.set(0.5);
buttonEndTurn
    .on('mousedown', onDragStart)
    .on('touchstart', onDragStart)
    .on('mouseup', onDragEnd)
    .on('mouseupoutside', onDragEnd)
    .on('touchend', onDragEnd)
    .on('touchendoutside', onDragEnd)
    .on('mousemove', onDragMove)
    .on('touchmove', onDragMove);

buttonEndTurn.position.x = 200;
buttonEndTurn.position.y = 200;
requestAnimationFrame(animate);

var fire = new PIXI.Sprite(PIXI.Texture.fromImage('fire.png'));

// enable the bunny to be interactive... this will allow it to respond to mouse and touch events
fire.interactive = true;

// this button mode will mean the hand cursor appears when you roll over the bunny with your mouse
fire.buttonMode = true;
// make it a bit bigger, so it's easier to grab
fire.scale.set(0.1);
fire
    .on('mousedown', onDragStart)
    .on('touchstart', onDragStart)
    .on('mouseup', onDragEnd)
    .on('mouseupoutside', onDragEnd)
    .on('touchend', onDragEnd)
    .on('touchendoutside', onDragEnd)
    .on('mousemove', onDragMove)
    .on('touchmove', onDragMove);

    fire.position.x = 210;
    fire.position.y = 200;
requestAnimationFrame(animate);


function animate() {

    requestAnimationFrame(animate);

    // render the stage
    renderer.render(stage);
}

function onDragStart(event)
{
    // store a reference to the data
    // the reason for this is because of multitouch
    // we want to track the movement of this particular touch
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
}

function onDragEnd()
{
    this.alpha = 1;

    this.dragging = false;

    // set the interaction data to null
    this.data = null;
}

function onDragMove()
{
    if (this.dragging)
    {
        var newPosition = this.data.getLocalPosition(this.parent);
        this.position.x = newPosition.x;
        this.position.y = newPosition.y;
    }
}

app.stage.addChild(buttonEndTurn);
app.stage.addChild(fire);
stage.addChild(objects);