"use strict";
var greeting = ("Enjoy surfing this site");
alert ("Welcome to this page!");
var admin = prompt ("Enter your name", "");

if (admin == "Svitlana") {
    alert ("Hello, Svitlana");

    var password = prompt ("Enter your password, Svitlana", "");
    if (password == 12345) {
        alert ("Thank you");
        alert (greeting);
    } else if (password == null) {
        alert ("Operation is canceled");
    } else {
        alert ("Wrong password");
    }

} else if (admin == null) {
     alert ("Goodbye!");
} else {
     alert ("Pleasure to meet a new person here");
     var mood = prompt ("How are you today, " + admin + "?", "");
     var age = prompt ("May i ask how old you are, " + admin + "?" , "");
     var message = (age < 25) ? "You are so young!" :
     "You are a grown-up already";
     alert (message);
    } 






