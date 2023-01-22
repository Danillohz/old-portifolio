
var divProfileText = document.querySelector("#textprof");
var text = "JavaScript é muito bom!"
var interval = 200;

function showtext(divProfileText, text, interval) {
  var char = text.split("").reverse();
  
  var typer = setInterval(function() {
  
    if (!char.length) {
        return clearInterval(typer)
    }
    
    var next = char.pop();
    
    divProfileText.innerHTML += next;
    
  }, interval);
  
}

function clickMenu() {

    var opacity = opcoes.style.opacity

    if (opcoes.style.visibility == 'visible') {
        opcoes.style.visibility = 'hidden'
        opcoes.style.left = '-30%'
        opcoes.style.transition = 'visibility 1s, '
        menuIcon.style.backgroundColor = '#011420'



        } else {
        opcoes.style.visibility = 'visible'
        opcoes.style.left = '-0%'
        opcoes.style.transition = 'visibility 1s, left 1s'
        menuIcon.style.backgroundColor = '#495053';
        



    }
    
}

function clickProfile() {

    var textComplete = false

    if(textComplete == false){
        showtext(divProfileText, text, interval);
        
    }
    
    
    if (profile.style.visibility == 'visible') {
        profile.style.visibility = 'hidden'
        profile.style.opacity = 0
        profile.style.transition = 'visibility 1s, opacity 0.8s linear'
        
        

    } else {

        profile.style.visibility = 'visible'
        profile.style.opacity = 1
        profile.style.transition = 'visibility 0s, opacity 0.8s linear'
        
    }
}


