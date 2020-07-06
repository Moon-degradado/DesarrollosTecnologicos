(function(){

function animar() {
    document.getElementById('text-transition').classList.add('transition-hover');
}

function quitarAnimacion(){
    document.getElementById('text-transition').classList.remove('transition-hover');
}

document.getElementById('imagen-transition').onmouseover = function (){
    animar();
    aparecer_texto();
}

document.getElementById('imagen-transition').onmouseout = function(){
    quitarAnimacion();
    desaparecer_texto();
}

function desaparecer_texto(){
    document.getElementById('text-evento').classList.add('quitar-texto');
}

function aparecer_texto(){
    document.getElementById('text-evento').classList.remove('quitar-texto');
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
        aparecer_texto_2();
    }
    
    document.getElementById('imagen-transition-2').onmouseout = function(){
        quitarAnimacion2();
        desaparecer_texto_2();
    }

    function desaparecer_texto_2(){
        document.getElementById('text-evento-2').classList.add('quitar-texto');
    }
    
    function aparecer_texto_2(){
        document.getElementById('text-evento-2').classList.remove('quitar-texto');
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
        aparecer_texto_2();
    }
    
    document.getElementById('imagen-transition-3').onmouseout = function(){
        quitarAnimacion2();
        desaparecer_texto_2();
    }

    function desaparecer_texto_2(){
        document.getElementById('text-evento-3').classList.add('quitar-texto');
    }
    
    function aparecer_texto_2(){
        document.getElementById('text-evento-3').classList.remove('quitar-texto');
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
        aparecer_texto_3();
    }
    
    document.getElementById('imagen-transition-4').onmouseout = function(){
        quitarAnimacion2();
        desaparecer_texto_3();
    }

    function desaparecer_texto_3(){
        document.getElementById('text-evento-4').classList.add('quitar-texto');
    }
    
    function aparecer_texto_3(){
        document.getElementById('text-evento-4').classList.remove('quitar-texto');
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
        aparecer_texto_4();
    }
    
    document.getElementById('imagen-transition-5').onmouseout = function(){
        quitarAnimacion2();
        desaparecer_texto_4();
    }

    function desaparecer_texto_4(){
        document.getElementById('text-evento-5').classList.add('quitar-texto');
    }
    
    function aparecer_texto_4(){
        document.getElementById('text-evento-5').classList.remove('quitar-texto');
    }
} catch (error) {}
}());