function miFuncion(callback){
    setTimeout(function(){
        console.log("Proceso terminado");
        callback();
    },2000);
}

function otraFuncion(){
    console.log("Se ejecutó el callback");
}

miFuncion(otraFuncion);