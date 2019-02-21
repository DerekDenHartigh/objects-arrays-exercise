"use strict";
let character;
characterArray =[Mario, Luigi, EarthwormJim]

let Mario = {
    Name = "Mario",
    HP = 10
}
let Luigi = {
    Name = "Luigi",
    HP = 15
}
let EarthwormJim = {
    Name = "Earthworm Jim",
    HP = 300
}
let theAdversary ={
    name = "Satan",
    HP = 666
}
let God ={
    name = YWH,
    HP = 1000000
}
let n;
function nameAllTheCharacters(){
    nameCharacterArray();
    nameAdversary();
}
    function nameCharacterArray(){
        n = characterArray.length;
        while (n>=0){
            console.log(characterArray[n].name)
            n--
        }
    }
    function nameAdversary(){
        console.log(theAdversary.name)
    }

function selectCharacters (){
    let characterSelection = prompt("Which character would you like?\n\t1: Mario\n\t2: Luigi\n\t3: Earthworm Jim");
    if (characterSelection>0 && characterSelection<4) {
        let character = characterArray[characterSelection-1];
        return character;
    }
    if (characterSelection === 777) {
        let character = God;
        return character;
    }
    else {
        console.error("ERROR!")
    }
}
function battleFunction(){
    Math.floor(Math.random() * 20) // random number generator
}