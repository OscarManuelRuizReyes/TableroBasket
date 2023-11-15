//Declaración de variables que se usarán para almacenar la puntuación y obtener el elemento de HTML

let scoreHome = 0
let scoreHomeEl = document.getElementById("score-home")
let scoreGuest = 0
let scoreGuestEl = document.getElementById("score-guest")

//Funciones para el equipo Home

function add1PointHome(){
     scoreHome += 1
     scoreHomeEl.textContent = scoreHome
    console.log(scoreHomeEl)
}

function add2PointsHome(){
    scoreHome += 2
     scoreHomeEl.textContent = scoreHome
    console.log(scoreHomeEl)
}

function add3PointsHome(){
    scoreHome += 3
     scoreHomeEl.textContent = scoreHome
    console.log(scoreHomeEl)
}

//Funciones para el equipo Guest

function add1PointGuest(){
    scoreGuest += 1
    scoreGuestEl.textContent = scoreGuest
   console.log(scoreGuestEl)
}

function add2PointsGuest(){
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
   console.log(scoreGuestEl)
}

function add3PointsGuest(){
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest
   console.log(scoreGuestEl)
}

function reset(){
    scoreGuest = 0
    scoreHome = 0
    scoreHomeEl.textContent = 0
    scoreGuestEl.textContent = 0
}

