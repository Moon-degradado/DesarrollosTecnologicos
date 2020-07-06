// $(document).ready(() =>{
//     $('#transition').onmouseover(function() {
//         $('#imagen-transition').addClass('transition');
//     });
// });


// window.onload = function () {
//     document.getElementById("#imagen-transition").onmouseover.classList.add("transition");
// }


// function efecto_transition(){
//     $(document).ready(() =>{
//         document.getElementById("imagen-transition").classList.add("transition");
//     });
// }

(function(){


function animar() {
    document.getElementById('text-transition').classList.add('transition-hover');
}

function quitarAnimacion(){
    document.getElementById('text-transition').classList.remove('transition-hover');
}

document.getElementById('imagen-transition').onmouseover = function (){
    animar();
}

document.getElementById('imagen-transition').onmouseout = function(){
    quitarAnimacion();
}

try {
    function animar2() {
        document.getElementById('text-transition-2').classList.add('transition-hover-2');
    }
    
    function quitarAnimacion2(){
        document.getElementById('text-transition-2').classList.remove('transition-hover-2');
    }
    
    document.getElementById('imagen-transition-2').onmouseover = function (){
        animar2();
    }
    
    document.getElementById('imagen-transition-2').onmouseout = function(){
        quitarAnimacion2();
    }
} catch (error) {}

try {
    function animar2() {
        document.getElementById('text-transition-3').classList.add('transition-hover-2');
    }
    
    function quitarAnimacion2(){
        document.getElementById('text-transition-3').classList.remove('transition-hover-2');
    }
    
    document.getElementById('imagen-transition-3').onmouseover = function (){
        animar2();
    }
    
    document.getElementById('imagen-transition-3').onmouseout = function(){
        quitarAnimacion2();
    }
} catch (error) {}

try {
    function animar2() {
        document.getElementById('text-transition-4').classList.add('transition-hover-2');
    }
    
    function quitarAnimacion2(){
        document.getElementById('text-transition-4').classList.remove('transition-hover-2');
    }
    
    document.getElementById('imagen-transition-4').onmouseover = function (){
        animar2();
    }
    
    document.getElementById('imagen-transition-4').onmouseout = function(){
        quitarAnimacion2();
    }
} catch (error) {}

try {
    function animar2() {
        document.getElementById('text-transition-5').classList.add('transition-hover-2');
    }
    
    function quitarAnimacion2(){
        document.getElementById('text-transition-5').classList.remove('transition-hover-2');
    }
    
    document.getElementById('imagen-transition-5').onmouseover = function (){
        animar2();
    }
    
    document.getElementById('imagen-transition-5').onmouseout = function(){
        quitarAnimacion2();
    }
} catch (error) {}

}());