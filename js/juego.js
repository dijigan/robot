// Opciones
var opt_piedra = document.getElementById("piedra");
var opt_papel = document.getElementById("papel");
var opt_tijera = document.getElementById("tijera");
// Iniciar Juego
var start = document.getElementById("start_game");
// Jugadores
var img_opt_player1 = document.getElementById("player1");
var img_opt_player2 = document.getElementById("player2");
//Recuento
var ptos_player1 = document.getElementById("player1").innerText;
var ptos_player2 = document.getElementById("player2").innerText;
// Play
var select_player1;
var select_player2;
var vs;

start.onclick = function(){
    select_player2 = opt_random(val_opt_random.toString());
    display_option_player2(select_player2);
    game_vs(select_player1,select_player2);

    console.log(select_player1,select_player2.toString());
}

// Player 1

opt_piedra.onclick = function () {
    select_player1 = "piedra";
    img_opt_player1.src = "assets/piedra_izquierda.svg";
    img_opt_player2.src = "assets/cpu.svg";
}

opt_papel.onclick = function () {
    select_player1 = "papel";
    img_opt_player1.src = "assets/papel_izquierda.svg";
    img_opt_player2.src = "assets/cpu.svg";
}

opt_tijera.onclick = function () {
    select_player1 = "tijera";
    img_opt_player1.src = "assets/tijera_izquierda.svg";
    img_opt_player2.src = "assets/cpu.svg";
}

//Player 2 CPU

var val_opt_random = ["piedra","papel","tijera"];
function opt_random() {
    return [...val_opt_random]
    .sort(()=>Math.random() > 0.5 ? 1:-1)
    .slice(0,1);
}

function game_vs(select_player1,select_player2){

    if (select_player1 == "piedra") {
        if (select_player2 == "piedra") {
            vs = "same";
        } else if (select_player2 == "papel") {
            vs = "p2win";
         }else {
            vs = "p1win";
        } 
    } else if (select_player1 == "papel") {
        if (select_player2 == "papel") {
            vs = "same";
        } else if (select_player2 == "tijera") {
            vs = "p2win";
        } else {
            vs = "p1win";
        }
    } else if (select_player1 == "tijera") {
        if (select_player2 == "tijera") {
            vs = "same";
        } else if (select_player2 == "piedra") {
            vs = "p2win";
        } else {
            vs = "p1win";
        }
    }

    if (vs == "p1win") {
        document.getElementById("result").innerText = "Jugador 1 gana";
        document.getElementById("result").style.color = "#3FA796";
        ptos_player1++;
        document.getElementById("ptos_player1").innerText = ptos_player1;
    } else if (vs == "same") {
        document.getElementById("result").innerText = "Empate";
        document.getElementById("result").style.color = "#FEC260";
    } else if (vs == "p2win") {
        document.getElementById("result").innerText = "Jugador 2 gana";
        document.getElementById("result").style.color = "#A10035";
        ptos_player2++;
        document.getElementById("ptos_player2").innerText = ptos_player2;
    }
}

function display_option_player2(select_player2){
    if (select_player2 == "piedra"){
        img_opt_player2.src = "assets/piedra_derecha.svg";
    } else if (select_player2 == "papel"){
        img_opt_player2.src = "assets/papel_derecha.svg";
    } else {
        img_opt_player2.src = "assets/tijera_derecha.svg";
    }
}

const reload = document.getElementById('reset');
reload.addEventListener('click', _ => {
    location.reload();
});