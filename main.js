// Canvas refecence:
// https://www.w3schools.com/graphics/canvas_reference.asp

var evento = "";
var posicaoX, posicaoY;
var ultimaPosicaoX, ultimaPosicaoY;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var txtCor = document.getElementById("cor");
var txtTraco = document.getElementById("traco");

var cor = "red";
var traco = 2;

var larguraTela = screen.width;
var novaLargura = larguraTela - 70;
var novaAltura = screen.height - 300;

document.getElementById("controles").style.width = novaLargura + "px";

if (larguraTela < 992) {
    canvas.width = novaLargura;
    canvas.height = novaAltura;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", touchstart);
function touchstart (e) {
    // console.log(e);
    ultimaPosicaoX = e.touches[0].clientX - (canvas.clientLeft + canvas.offsetLeft);
    ultimaPosicaoY = e.touches[0].clientY - (canvas.clientTop + canvas.offsetTop);
}

canvas.addEventListener("touchmove", touchmove) 
function touchmove (e) {
    posicaoX = e.touches[0].clientX - (canvas.clientLeft + canvas.offsetLeft);
    posicaoY = e.touches[0].clientY - (canvas.clientTop + canvas.offsetTop);

    ctx.beginPath();

    ctx.strokeStyle = cor;
    ctx.lineWidth = traco;

    ctx.moveTo(ultimaPosicaoX,ultimaPosicaoY);

    ctx.lineTo(posicaoX, posicaoY);

    ctx.stroke();

    ultimaPosicaoX = posicaoX;
    ultimaPosicaoY = posicaoY;
}

// canvas.addEventListener("mousedown", mousedown);

// function mousedown (e) {
//     getEvento(e);
// }

// canvas.addEventListener("mousemove", mousemove);

// function mousemove (e) {
//     posicaoX = e.offsetX;
//     posicaoY = e.offsetY;

//     if (eventoMouse == "mousedown") {
//         ctx.beginPath();
//         ctx.strokeStyle = cor;
//         ctx.lineWidth = traco;

//         ctx.moveTo(ultimaPosicaoX,ultimaPosicaoY);

//         ctx.lineTo(posicaoX, posicaoY);

//         ctx.stroke();
//     }

//     ultimaPosicaoX = posicaoX;
//     ultimaPosicaoY = posicaoY;
// }

// canvas.addEventListener("mouseup", mouseup);

// function mouseup (e) {
//     getEvento(e);
// }

// canvas.addEventListener("mouseleave", mouseleave);

// function mouseleave (e) {
//     getEvento(e);

// }

function getEvento (e) {
    evento = e.type;
    console.log(evento);
}

function limpar () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("cor").value = "";
    document.getElementById("traco").value = "";
}

txtCor.addEventListener("input", function () {
    cor = txtCor.value;
});

txtTraco.addEventListener("input", function (){
    if (txtTraco.value > 0) {
        traco = txtTraco.value;
    }
});