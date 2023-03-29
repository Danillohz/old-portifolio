
var divBemvindoText = document.querySelector("#textBemvindo");
var divEuText = document.querySelector("#textEu");
var divDevText = document.querySelector("#textDev");
var text1 = "Seja Bem vindo!"
var text2 = "Eu sou o Danillo Henrique"
var text3 = "Desenvolvedor Front-end"
var interval = 50;
var interval1 = 150;
var interval2 = 150;

let projectNumber = 1;

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
        main.style = 'filter: blur(0px);'
        




    } else {
        opcoes.style.cssText = 'visibility: visible;' + 'left: 0%;' + 'transition: visibility 1s, left 1s;';

        menuIcon.style.backgroundColor = '#495053';
        main.style = 'filter: blur(2px);'




    }

}

function clickProfile() {

    let profile = document.getElementById('profile')

    if (profile.style.visibility == 'hidden') {
        profile.style = 'visibility: visible;' + 'opacity: 1 ;' + 'transition: visibility 0s, opacity 0.8s linear;'

        btnMenuProf.style.backgroundColor = '#272626b7';

    }
    else {

        profile.style = 'visibility: hidden;' + 'opacity: 0 ;' + 'transition: visibility 1s, opacity 0.8s linear;'

        btnMenuProf.style.backgroundColor = 'transparent';

    }
}

function clickDayNight() {

const darkclass = document.querySelectorAll('.dark');
var size = sizes(size);

    if (day == false) {
        day = true
    } else {
        day = false
    }

    if (day == true) {
        mainBody.style.backgroundColor = '#c5c5c5'
        containerImgFundo.style.display = 'none'
        secondImgFundo.style.display = 'block'
        if(size == 1){
        bollDayNight.style.left = '47%'
        bollDayNight.style.transform = 'rotate(360deg)'
        bollDayNight.style.transition = 'left 1s, transform 1s'
        }else if(size == 2){
        bollDayNight.style.left = '62%'
        bollDayNight.style.transform = 'rotate(360deg)'
        bollDayNight.style.transition = 'left 1s, transform 1s'
        }
        darkclass.forEach(element => {
            element.style.color = 'black'
        })

    }
    if (day == false) {
        mainBody.style.backgroundColor = '#282f38'
        containerImgFundo.style.display = 'block'
        secondImgFundo.style.display = 'none'
        bollDayNight.style.left = '2%'
        bollDayNight.style.transform = 'rotate(0deg)'
        bollDayNight.style.transition = 'left 1s, transform 1s'
        darkclass.forEach(element => {
            element.style.color = 'white'
        })


    }
}

function clickCont() {
var size = sizes(size);
clickMenu();
 if(size == 1 ){
    if (contact.style.visibility == 'visible') {
        contact.style = 'visibility: hidden;' + 'opacity: 0;' + 'transition: visibility 1s, opacity 1s' 
        facebook.style = 'margin-top: -100px' 
        linkedin.style = 'margin-top: -100px'
        github.style = 'margin-top: -100px'
        gmail.style = 'margin-top: -100px'
        
        btnMenuCont.style.backgroundColor = 'transparent';

    }
    else {

        contact.style = 'visibility: visible;' + 'opacity: 1;' + 'transition:opacity 1s'
        facebook.style = 'margin-top: -84px' 
        linkedin.style = 'margin-top: -67px'
        github.style = 'margin-top: -49px'
        gmail.style = 'margin-top: -29px'

        btnMenuCont.style.backgroundColor = '#272626b7';
    }
 }else if(size == 2){
        if (contact.style.visibility == 'visible') {
            contact.style = 'visibility: hidden;' + 'opacity: 0;' + 'transition: visibility 1s, opacity 1s' 
            facebook.style = 'margin-top: -160px' 
            linkedin.style = 'margin-top: -160px'
            github.style = 'margin-top: -160px'
            gmail.style = 'margin-top: -160px'
            
            btnMenuCont.style.backgroundColor = 'transparent';
    
        }
        else {
    
            contact.style = 'visibility: visible;' + 'opacity: 1;' + 'transition:opacity 1s'
            facebook.style = 'margin-top: -132px' 
            linkedin.style = 'margin-top: -102px'
            github.style = 'margin-top: -72px'
            gmail.style = 'margin-top: -42px'
    
            btnMenuCont.style.backgroundColor = '#272626b7';
        }
 }
 

}

function sizes(size){
    var size = 0
    if(window.innerWidth < 768){
        size = 1
    }
    else if(window.innerWidth >=768){
        size = 2
    }
    return size;
}

function ChangeProjectRight(){

    let project1Style = document.getElementById("Project1").style;
    let project2Style = document.getElementById("Project2").style;

    if(projectNumber === 1){
        project1Style.display = "none"
        project2Style.display = "block"
        projectNumber = 2
        
    }
    else if(projectNumber === 2){
        project2Style.display = "none"
        project1Style.display = "block"      
        projectNumber = 1
    }
    
    
}

function ChangeProjectLeft(){

    var project1Style = document.getElementById("Project1").style;
    var project2Style = document.getElementById("Project2").style;

    if(projectNumber === 1){
        project1Style.opacity = "0"
        project1Style.display = "none"
        project2Style.display = "block"
        project2Style.opacity = "1"
        projectNumber = 2
    }
    else if(projectNumber === 2){
        
        project1Style.display = "block"
        project1Style.opacity = "1"
        project2Style.opacity = "0"
        project2Style.display = "none"
        
        projectNumber = 1
    }

    
}



