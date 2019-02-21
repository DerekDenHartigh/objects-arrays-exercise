"use strict";
(function () {
let Mario; let Luigi; let EarthwormJim; let theAdversary; let God; let n; let character; let pray; let adversaryDamage; let playerDamage; let damage;

Mario = {
    name : "Mario",
    HP : 100
};
Luigi = {
    name : "Luigi",
    HP : 150
};
EarthwormJim = {
    name : "Earthworm Jim",
    HP : 300
};
theAdversary = {
    name : "Satan",
    HP : 666
};
God = {
    name : "YWH",
    HP : 1000000
};
let characterArray =[Mario, Luigi, EarthwormJim];
function nameAllTheCharacters(){ // works
    nameCharacterArray();
    nameAdversary();
}
    function nameCharacterArray(){
        n = characterArray.length; // n = 3
        while (n>=1){
            console.log(characterArray[n-1].name)
            n--
        }
    }
    function nameAdversary(){
        console.log(theAdversary.name)
    }

function selectCharacters (){
    let characterSelection = prompt("Which character would you like?\n\t1: Mario\n\t2: Luigi\n\t3: Earthworm Jim");
    if (characterSelection>0 && characterSelection<4) {
        character = characterArray[characterSelection-1];
        return character;
    }
    if (characterSelection === 777) {
        character = God;
        return character;
    }
    else {
        console.error("ERROR!")
    }
}
function battleFunction(){
    while(theAdversary.HP > 0 && character.HP > 0){
    adversaryDamage = Math.floor(Math.random() * 10)
    console.log(`${theAdversary.name} attacks ${character.name} and deals ${adversaryDamage} damage`)
    character.HP -= adversaryDamage;
    playerDamage = Math.floor(Math.random() * 10)
    console.log(`${character.name} attacks ${theAdversary.name} and deals ${playerDamage} damage`)
    theAdversary.HP -= damage;
    let fleeResponse = prompt("Do you wish to flee from me?")
    if (fleeResponse === null) {
        console.error("what have you done?"); break;
    }
    console.error("You cannot escape!")
    if (character.HP<10){
        pray = prompt("Do you wish to call for divine aid? or do you got this?").toLowerCase()
        let yesArray=["yes","yeah","yup","yep","fo sho","affirmative"]
        if (yesArray.indexOf(pray)>=0){
            character = God;
            return character;
        }
    }
    }
    if (character.HP<0){
        console.error(`${character.name}, your soul is forfeit!  You, a mere mortal, were a fool to challenge me!`)
    }
    else if(character===God) {
        console.warn(`"NOOOOOO!"\n\t-${theAdversary.name}\n*A bright flash of divine light illumens the battlefield*  When your eyes can finally
        see again, ${theAdversary.name} is gone, no trace remains, not even the smell of sulfur.  The battlefield appears to be shrinking below
        as you notice angelic arms bearing you skyward.  Your final rest awaits.`)
    }
    else if(theAdversary.HP<=0) console.log(`Well, ${character.name} I don't know how you did it, but you just bested the devil in moral combat.`)
    else console.log("Universe Implodes! hit f5 to turn it off and back on again.");
}
function theGame(){
    nameAllTheCharacters();
    selectCharacters();
    battleFunction();
}
theGame();
})();