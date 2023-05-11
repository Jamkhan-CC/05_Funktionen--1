"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
// Funktionsdeklaration
function test()
{
    console.log("Hi schöne!");
}
// test();
// test();

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen();

function ausgabeNamen()
{
    // what happens in VEGAS, stays in VEGAS!
    let firstName = "Batista";
    let firstName1 = "Sascha"

    console.log(" hi " + firstName + "!");
    console.log(" hi " + firstName1 + "!");

}

// console.log(firstName); // Fehler: Scope!


/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// ausgabeNamenParam("Batista");
// ausgabeNamenParam("Sascha");
// ausgabeNamenParam("Simon");
// ausgabeNamenParam("Serhat");

function ausgabeNamenParam(firstName) { // Parameter
    console.log(" hi " + firstName + "!");
}

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

ausgabeNamenParams("Dave", "Batista")
ausgabeNamenParams("Jamshid", "Rahmanzai")
ausgabeNamenParams(prompt("Vorname?"),prompt("Nachname?"));

function ausgabeNamenParams(firstName, familyName) {
    console.log(" hi " + firstName + " " + familyName + "!");
}


