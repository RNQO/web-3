function paso1(callback){
    setTimeout(function(){
        console.log("Paso 1");
        callback();
    },1000);
}

function paso2(callback){
    setTimeout(function(){
        console.log("Paso 2");
        callback();
    },1000);
}

paso1(function(){
    paso2(function(){
        console.log("Proceso terminado");
    });
});