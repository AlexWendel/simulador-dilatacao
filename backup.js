    
    
    <!-- <script>
        name_label_css = { fontFamily: 'Arial', fontSize: 16, fill: 0xffffff, align: 'center' };
        coeficient_label_css = { fontFamily: 'Arial', fontSize: 14, fill: 0xffffff, align: 'center' }
        generic_style = { fontFamily: 'Arial', fontSize: 12, fill: 0xffffff, align: 'center' }
        running = true;

        $(document).ready(function () {
            const app = new PIXI.Application({ autoResize: true, resolution: devicePixelRatio });
            const renderer = app.renderer;
            const stage = app.stage;
            const objects = new PIXI.Container();
            const pixelConst = 37.7952755906;
            var materiais = [];
            var calor = 0;

            // Retâgulo


            function gerar_objeto(material) {
                coeficiente = material.coeficiente;
                nome = material.nome;
                cor = material.cor;
                comprimento = material.comprimento;

                name_text = new PIXI.Text(nome, name_label_css);
                coeficient_text = new PIXI.Text(coeficiente.toExponential().replace("e", "x10"), coeficient_label_css);
                vagabu = new PIXI.Text("Temp:" + material.temperatura, generic_style);
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
                return object;
            }

            function aquecimento(material, temperatura_final, intervalo) {
                calor++;
                temperatura_inicial = material.temperatura;
                material.temperatura += calor / material.calorEspecifico;
                deltaTemp = (material.temperatura - material.temperatura_inicial);
                switch (material.type) {
                    case 0:
                        deformacao = material.comprimentoinicial * material.coeficiente * deltaTemp;
                        break;
                    case 1:
                        deformacao = material.comprimentoinicial * (2*material.coeficiente) * deltaTemp;
                        break;
                    case 2:
                        deformacao = material.comprimentoinicial * (3*material.coeficiente) * deltaTemp;
                        break;
                    default:
                        break;
                }

                material.object.width = material.comprimento = material.comprimentoinicial + deformacao;
                console.log(material.comprimentoinicial + deformacao);

                material.object.getChildAt(1).text = "T:" + material.temperatura;
                material.object.getChildAt(3).text = "L:" + material.comprimento + deformacao * (72 / 96).toFixed(2);

                if (material.temperatura < temperatura_final) {
                    setTimeout(function () { aquecimento(material, temperatura_final); }, intervalo * 1000);
                }

            }

            function iniciarSimulacao() {
                $.each(materiais, function (material) {
                    intervalo = (parseInt($("#velocidade").val()) / 0.1);
                    temperatura_final = (parseInt($("#temperatura-final").val()));
                    setTimeout(function () { aquecimento(materiais[material], temperatura_final, intervalo) }, 1000 * intervalo);
                });
            }

            function criarMaterial(nome, comprimento, coeficiente, temperatura, caloresp) {
                console.log(nome + "." + comprimento + "." + temperatura + "." + caloresp);
                material = new Material(nome, coeficiente, comprimento, caloresp, (Math.random() * 0xFFFFFF << 0));
                material.temperatura = temperatura;
                material.object.position.set(0, 55 * materiais.length);
                app.stage.addChild(material.object);
                materiais.push(material);
                dados = $("<div id=dados-" + nome + "></div>");
                $("#log").append(dados);
            }

            $.getJSON("https://gist.githubusercontent.com/zeusvsh/1b7db3eedbfa0b5ec3ed79b5cb238a71/raw/73f4c288b8ddcf30f18ed33a997ecd29bfd8cfc9/gistfile1.txt")
                .done(function (data) {
                    $.each(data, function (material, dados) {
                        ;
                        criarMaterial(material, 200, dados["coeficiente"], 0, dados["calorespecifico"]);
                    });

                });

            document.body.appendChild(app.view);

            window.addEventListener('resize', resize);
            function resize() {
                app.renderer.resize(window.innerWidth, window.innerHeight);
                $('#menu').height(window.innerHeight);
            }
            resize();

            $("#start-simulation").click(function () {
                // iniciarSimulacao($("#temperatura-final").val());
                setTimeout(iniciarSimulacao, 1000);
            });

            $("#reset-simulation").click(
                function () {
                    $.each()
                }
            );

            $("#create-custom").click(function () {
                nome = $("#custom-nome").val();
                comprimento = $("#custom-comprimento").val();
                calorespecifico = $("#custom-calesp").val();
                temperatutrainicial = $("#custom-t0").val();
                coeficiente = parseFloat($("#custom-coeficiente").val());

                criarMaterial(nome, comprimento, coeficiente,
                    temperatutrainicial, calorespecifico);
            });
        });


    </script> -->
