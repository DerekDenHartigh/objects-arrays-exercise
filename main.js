"use strict";
(function () {
let Mario, Luigi, EarthwormJim, theAdversary, God, character, pray, damage; // initializing varaibles
Mario = {
    name : "Mario",
    HP : 100,
    damage: function(){
        damage = Math.floor(Math.random() * 10)
        this.HP-= damage;
        return this.HP;
    }
};
Luigi = {
    name : "Luigi",
    HP : 150,
    damage: function(){
        damage = Math.floor(Math.random() * 10)
        this.HP-= damage;
        return this.HP;
    }
};
EarthwormJim = {
    name : "Earthworm Jim",
    HP : 300,
    damage: function(){
        damage = Math.floor(Math.random() * 10)
        this.HP-= damage;
        return this.HP;
    }
};
theAdversary = {
    name : "Satan",
    HP : 666,
    damage: function(){
        damage = Math.floor(Math.random() * 10)
        this.HP-= damage;
        return this.HP;
    }
};
God = {
    name : "YWH",
    HP : 1000000,
    damage: function(){
        damage = 0;
        this.HP-=damage; // invincible
        return this.HP;
    }
};
let characterArray =[Mario, Luigi, EarthwormJim];
function nameAllTheCharacters(){ // works, maybe rework this with a for each
    console.log("These are the playable characters & your adversary:")
    nameCharacterArray();
    nameAdversary();
}
    function nameCharacterArray(){
        // let n = characterArray.length; // n = 3
        // while (n>=1){
        //     console.log(characterArray[n-1].name)
        //     n--
        // }
        // was going to try a forEach here, but it returns the whole object, not sure how to return name only: 
        // characterArray.forEach(function(element) {
        //     console.log(element);
        //   });
        console.log(characterArray.map(a => a.name));  // this works nicely, thanks stackexchange!
    }
    function nameAdversary(){
        console.log(theAdversary.name)
    }
function selectCharacters (){
    let characterSelection = prompt("Which character would you like?\n\t1: Mario\n\t2: Luigi\n\t3: Earthworm Jim");
    switch(characterSelection){
        case 1:
        case 2:
        case 3:
            character = characterArray[characterSelection-1]; break;
        case 777: // hidden character selection
            character = God; break;
        case 666: // hidden character selection
            character = theAdversary; break;
        default:
            console.error("ERROR!"); break; // doesn't seem to matter what I enter for characterSelection, always does default...  
    }
    return character;
    //Replaced below with a switch statement
    // if (characterSelection>0 && characterSelection<4) {
    //     character = characterArray[characterSelection-1];
    //     return character;
    // }
    // if (characterSelection === 777) { // hidden character selections
    //     character = God;
    //     return character;
    // }
    // if (characterSelection === 666){ // hidden character selections
    //     character = theAdversary;
    //     return character;
    // }
    // else {
    //     return console.error("ERROR!") 
    // }
}
function battleFunction(){
    while((theAdversary.HP > 0) && (character.HP > 0)){
        theAdversary.damage();
        console.log(`${theAdversary.name} attacks ${character.name},\n\t${character.name} has ${character.HP} HP left.`);
        character.damage();
        console.log(`${character.name} attacks ${theAdversary.name},\n\t${theAdversary.name} has ${theAdversary.HP} HP left`);
        // was trying below to adjust object HPs w/outside functions rather than methods, wasn't working
        // adversaryDamage = Math.floor(Math.random() * 10);
        // console.log(`${theAdversary.name} attacks ${character.name} and deals ${adversaryDamage} damage, he has ${character.HP} HP left.`);
        // character.HP -= adversaryDamage;
        // playerDamage = Math.floor(Math.random() * 10);
        // console.log(`${character.name} attacks ${theAdversary.name} and deals ${playerDamage} damage, he has ${theAdversary.HP} HP left`);
        // theAdversary.HP -= damage;
        let fleeResponse = prompt("Do you wish to flee from me?");
        if (fleeResponse === null) {
            console.error("what have you done?"); break;
        }
        else{
            console.error("You cannot escape!");
        };
        if (character.HP<10){
            pray = prompt("Do you wish to call for divine aid? or do you got this?").toLowerCase()
            let yesArray=["yes","yeah","yup","yep","fo sho","affirmative"]
            if (yesArray.indexOf(pray)>=0){
                character = God; // hoping this will reset character
                return character;
            };
        };
    };
}
function conclusion(){
    if (character.HP<0){
        console.error(`${character.name}, your soul is forfeit!  You, a mere mortal, were a fool to challenge me!`); return;// works
    } // had to throw the retrun on because the else was also running.
    if (character===God) {
        console.warn(`"NOOOOOO!"\n\t-${theAdversary.name}\n*A gaping put opens below ${theAdversary.name} spewing hellfire and the acrid stench
        of sulfur.  A bright flash of divine light illumens the battlefield*  When you can finally see again, the pit is gone, no trace remains,
         and the world has been transformed into paradise.`);
    }
    if(character===theAdversary){
        console.error("A house divided cannot stand.");
    }
    else if(theAdversary.HP<=0) console.log(`Well, ${character.name} I don't know how you did it, but you just bested the devil in moral combat.`); // don't think this is really possible
    else console.log("Universe Implodes! hit f5 to turn it off and back on again.");
}
function theGame(){
    nameAllTheCharacters();
    character = selectCharacters();
    battleFunction();
    conclusion();
}
theGame();
})();