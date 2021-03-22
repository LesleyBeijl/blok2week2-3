var weekdagen = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];
for(i = 0; i < 7; i++) {
    alledagen.innerHTML = alledagen.innerHTML + " - " + weekdagen[i];
}

var werkdagen = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag"];
for(i = 0; i < 5; i++) {
    allewerkdagen.innerHTML = allewerkdagen.innerHTML + " - " + werkdagen[i];
}
var weekenddagen = ["Zaterdag", "Zondag"];
for(i = 0; i < 2; i++) {
    alleweekenddagen.innerHTML = alleweekenddagen.innerHTML + " - " + weekenddagen[i];
}

