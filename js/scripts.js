
var divBemvindoText = document.querySelector("#textBemvindo");
var divEuText = document.querySelector("#textEu");
var divDevText = document.querySelector("#textDev");
var text1 = "Seja Bem vindo!"
var text2 = "Eu sou o Danillo Henrique"
var text3 = "Desenvolvedor Front-end"
var interval = 50;
var interval1 = 150;
var interval2 = 150;

var day = false;

function showtext() {
    var char1 = text1.split("").reverse();

    var typer1 = setInterval(function () {

        if (!char1.length) {
            return clearInterval(typer1)
        }

        var next1 = char1.pop();

        divBemvindoText.innerHTML += next1;

    }, interval);

    var char2 = text2.split("").reverse();

    var typer2 = setInterval(function () {

        if (!char2.length) {
            return clearInterval(typer2)
        }

        var next2 = char2.pop();

        divEuText.innerHTML += next2;

    }, interval1);

    var char3 = text3.split("").reverse();

    var typer3 = setInterval(function () {

        if (!char3.length) {
            return clearInterval(typer3)
        }

        var next3 = char3.pop();

        divDevText.innerHTML += next3;

    }, interval2);

}

showtext(divBemvindoText, text1, interval)


function clickMenu() {


    if (opcoes.style.visibility == 'visible') {
        opcoes.style.cssText = 'visibility: hidden;' + 'left: -40%;' + 'transition: visibility 1s, left 1s;';

        menuIcon.style.backgroundColor = '#011420';



    } else {
        opcoes.style.cssText = 'visibility: visible;' + 'left: 0%;' + 'transition: visibility 1s, left 1s;';

        menuIcon.style.backgroundColor = '#495053';




    }

}

function clickProfile() {

    let profile = document.getElementById('profile')

    if (profile.style.visibility == 'hidden') {
        profile.style = 'visibility: visible;' + 'opacity: 1 ;' + 'transition: visibility 0s, opacity 0.8s linear;'

        btnMenuProf.style.backgroundColor = '#2e313591';

    }
    else {

        profile.style = 'visibility: hidden;' + 'opacity: 0 ;' + 'transition: visibility 1s, opacity 0.8s linear;'

        btnMenuProf.style.backgroundColor = 'transparent';

    }
}

function clickDayNight() {

    if (day == false) {
        day = true
    } else {
        day = false
    }

    if (day == true) {
        mainBody.style.backgroundColor = '#c5c5c5'
        containerImgFundo.style.display = 'none'
        secondImgFundo.style.display = 'block'
        bollDayNight.style.marginLeft = '55%'
        bollDayNight.style.transform = 'rotate(360deg)'
        bollDayNight.style.transition = 'margin-left 1s, transform 1s'

    }
    if (day == false) {
        mainBody.style.backgroundColor = '#282f38'
        containerImgFundo.style.display = 'block'
        secondImgFundo.style.display = 'none'
        bollDayNight.style.marginLeft = '0vw'
        bollDayNight.style.transform = 'rotate(0deg)'
        bollDayNight.style.transition = 'margin-left 1s, transform 1s'


    }
}

function clickCont() {

    if (contact.style.visibility == 'visible') {
        contact.style = 'visibility: hidden; ' 

    }
    else {

        contact.style = 'visibility: visible;'

        

    }

}


