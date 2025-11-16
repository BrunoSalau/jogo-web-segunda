let perguntas = [
{
        "titulo": "Pergunta 1",
        "texto": "Qual desses desenhos você mais assistiu?",
        "op1": "Bob Esponja",
        "op2": "Dragon Ball",
        "op3": "Pica-Pau",
        "op4": "As Meninas Superpoderosas",
        "pontos": [10, 20, 15, 10]
    },
    {
        "titulo": "Pergunta 2",
        "texto": "Qual dessas brincadeiras você mais brincou?",
        "op1": "Esconde-esconde",
        "op2": "Pega-pega",
        "op3": "Queimada",
        "op4": "Amarelinha",
        "pontos": [15, 10, 20, 10]
    },
    {
        "titulo": "Pergunta 3",
        "texto": "Qual console (ou joguinho) marcou sua infância?",
        "op1": "PlayStation 2",
        "op2": "Super Nintendo",
        "op3": "Game Boy / Tetris portátil",
        "op4": "Não tinha console, jogava na lan house",
        "pontos": [20, 20, 15, 25]
    },
    {
        "titulo": "Pergunta 4",
        "texto": "O que você mais assistia de manhã?",
        "op1": "TV Globinho",
        "op2": "Bom Dia & Cia",
        "op3": "Xuxa",
        "op4": "Pokémon/Yu-Gi-Oh na RedeTV",
        "pontos": [20, 15, 10, 25]
    },
    {
        "titulo": "Pergunta 5",
        "texto": "Qual desses doces você mais comia?",
        "op1": "Pirulito Push Pop",
        "op2": "Bala Fizz",
        "op3": "Chiclete Ping Pong",
        "op4": "Dadinho",
        "pontos": [15, 20, 25, 10]
    },
    {
        "titulo": "Pergunta 6",
        "texto": "Seu passatempo preferido?",
        "op1": "Jogar bola na rua",
        "op2": "Assistir TV a tarde toda",
        "op3": "Brincar com bonecos / Barbie",
        "op4": "Ir no fliperama",
        "pontos": [25, 10, 10, 20]
    },
    {
        "titulo": "Pergunta 7",
        "texto": "Qual desenho clássico você lembra mais?",
        "op1": "Liga da Justiça",
        "op2": "Pernalonga e Looney Tunes",
        "op3": "Ben 10",
        "op4": "Scooby-Doo",
        "pontos": [15, 10, 20, 15]
    },
    {
        "titulo": "Pergunta 8",
        "texto": "O que você comia na escola?",
        "op1": "Salgadinho Fandangos",
        "op2": "Danoninho",
        "op3": "Toddyinho",
        "op4": "Pipoca do tio da porta",
        "pontos": [15, 10, 20, 25]
    },
    {
        "titulo": "Pergunta 9",
        "texto": "Qual dessas músicas te lembra infância?",
        "op1": "Rouge – Aserejé",
        "op2": "Kelly Key",
        "op3": "Sandy & Junior",
        "op4": "RBD (Rebelde)",
        "pontos": [15, 10, 20, 25]
    },
    {
        "titulo": "Pergunta 10",
        "texto": "Qual brinquedo foi mais marcante?",
        "op1": "Beyblade",
        "op2": "Hot Wheels",
        "op3": "Polly Pocket",
        "op4": "Tamagotchi / Bichinho virtual",
        "pontos": [25, 20, 15, 20]
    }
];

let numero = 0;
let pontos = 0;
let nome = localStorage.getItem("nomeUsuario");

function carregarPergunta(){
    let p = perguntas[numero];

    document.getElementById('NumeroPergunta').innerText = p.titulo

    document.getElementById('textoPergunta').innerText = p.texto;


    document.getElementById("label1").innerHTML = p.op1;
    document.getElementById("label2").innerHTML = p.op2;
    document.getElementById("label3").innerHTML = p.op3;
    document.getElementById("label4").innerHTML = p.op4;

    document.getElementById("op1").value = p.pontos[0];
    document.getElementById("op2").value = p.pontos[1];
    document.getElementById("op3").value = p.pontos[2];
    document.getElementById("op4").value = p.pontos[3];
}

function finalPergunta(){

    let MensagemFinal;
    let SubMensagem;

    if(pontos > 0 && pontos <= 120){
        MensagemFinal = "Nostálgico Leve!"
        SubMensagem = "Algumas memórias, mas não muito profundo."
    }
    else if(pontos > 120 && pontos <= 180){
        MensagemFinal = "Nostálgico Médio!"
        SubMensagem = "Lembra de muita coisa clássica. "
    }
    else if(pontos > 181 && pontos <= 230){
        MensagemFinal = "Nostálgico Forte!"
        SubMensagem = "Viveu a infância brasileira raiz."
    }
    else if(pontos > 231 && pontos <= 260){
        MensagemFinal = "Nostálgico Máximo!"
        SubMensagem = "Raiz total, lembra de tudo, viveu cada fase."
    }

    document.getElementById("button").innerText = "Voltar ao Menu Principal"

    document.getElementById('NumeroPergunta').innerText = "Parabens "+nome+"!";

    document.getElementById('textoPergunta').innerText = "Voce fez um total de "+pontos+" Pontos";

    let label1 = document.getElementById("label1");
    let p1 = document.createElement("span");
    p1.textContent = "";
    label1.replaceWith(p1);

    let label2 = document.getElementById("label2");
    let p2 = document.createElement("h3");
    p2.textContent = MensagemFinal;
    label2.replaceWith(p2);

    let label3 = document.getElementById("label3");
    let p3 = document.createElement("span");
    p3.textContent = SubMensagem;
    label3.replaceWith(p3);

    let label4 = document.getElementById("label4");
    label4.replaceWith(p1);
}


if(numero == 0){
    carregarPergunta();
};
function proxima(){
    if(numero == 10){
         history.back();
    }
    else{
        let selecionado = document.querySelector('input[name="op"]:checked');

        if (!selecionado) {
            alert("Escolha uma opção!");
            return;
        }

        pontos += Number(selecionado.value);
        selecionado.checked = false;
        console.log(pontos);
        numero++;


        if(numero < 10){
            carregarPergunta();

            if(numero == 9){
                document.getElementById("button").innerText = "Finalizar Quiz"
            }
        }
        else{
            finalPergunta();

        }
    }
}
let index = 0;

const playlist = [
    "Music/music1.mp3",
    "Music/music2.mp3",
    "Music/music3.mp3"
];

const player = document.getElementById("bgMusic");
player.src = playlist[index];
player.volume = 0.1;

document.getElementById("playMusic").addEventListener("click", function() {
    player.play();
});

document.getElementById("pauseMusic").addEventListener("click", function() {
    player.pause();
});

document.getElementById("passMusic").addEventListener("click", () => {
    index = (index + 1) % playlist.length;
    player.src = playlist[index];
    player.play();

});
