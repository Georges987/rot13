function checking(){
    document.getElementById("tar").innerHTML = "";
    document.getElementById("treat1").innerHTML = "";
}

function thread(swi){
    rotate();
    switch (swi){
        case 1:
            {
                myfonc();
                break;
            }
        case 2:
            {
                bin();
                break;
            }
        case 3:
            {
                dec();
                break;
            }
        default: 
            break;
    }
}

function dec(){
    var input = document.getElementById("case").value;
    if (isNaN(input)) {
        document.getElementById("rotate7").innerHTML = '❌';
        document.getElementById("treat7").innerHTML = "Veuillez entrer un nombre";
    }
    else {
        document.getElementById("tar").innerHTML = parseInt(input, 2);
        document.getElementById("rotate7").innerHTML = '✅';
        document.getElementById("treat7").innerHTML = "Succesfully finished 100%";
    }
}

function bin(){
    var input = document.getElementById("case").value;
    if (isNaN(input)) {
        document.getElementById("rotate7").innerHTML = '❌';
        document.getElementById("treat7").innerHTML = "Veuillez entrer un nombre";
    }
    else {
        //var ans = input.toString(2)
        document.getElementById("tar").innerHTML = toBin(input);
        document.getElementById("rotate7").innerHTML = '✅';
        document.getElementById("treat7").innerHTML = "Succesfully finished 100%";
    }
}

function toBin(sent) {
    if (sent > 0) {
        return toBin(parseInt(sent / 2)) + (sent % 2)
    }
    else{
        return "Internal Error"
    }
}

function rotate(){
    var myarray = ['Initialisation', 'Décompression des fichiers sources', 'Initialisation de l\'algotithme de cryptage', 'Choix des variables de test', 'Débug en cours', 'Suppression des fichiers'];
    document.getElementById("treat1").innerHTML = myarray[0];
    document.getElementById("treat2").innerHTML = myarray[1];
    document.getElementById("treat3").innerHTML = myarray[2];
    document.getElementById("treat4").innerHTML = myarray[3];
    document.getElementById("treat5").innerHTML = myarray[4];
    document.getElementById("treat6").innerHTML = myarray[5];
}

function wait(inter){
    var start = new new Date().getTime();
    console.log("Finished with "+inter)
}

function myfonc() {
    var input = document.getElementById("case").value;
    if (input == "" || input == " ") {
        document.getElementById("rotate7").innerHTML = '❌';
        document.getElementById("treat7").innerHTML = "Veuillez entrer du texte convertible";
    }
    else {
        document.getElementById("tar").innerHTML = rot(input);
        document.getElementById("rotate7").innerHTML = '✅';
        document.getElementById("treat7").innerHTML = "Succesfully finished 100%";
    }
}

function rot(sent) {
    var indexA;

    result = "";

    for (i = 0; i < sent.length; i++) {
        if (sent[i].toLowerCase() >= 'a' && sent[i].toLowerCase() <= 'm') {
            indexA = sent.charCodeAt(i) + 13;
            result += String.fromCharCode(indexA);
        }
        else if (sent[i].toLowerCase() >= 'n' && sent[i].toLowerCase() <= 'z') {
            indexA = sent.charCodeAt(i) - 13;
            result += String.fromCharCode(indexA);
        }
        else {
            result += sent[i];
        }
    }
    return result;
}