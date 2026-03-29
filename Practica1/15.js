function leerDato(callback){
    setTimeout(function(){
        callback("Datos listos");
    },2000);
}

function leerDatoPromesa(){
    return new Promise(function(resolve){
        leerDato(function(res){
            resolve(res);
        });
    });
}

leerDatoPromesa().then(function(res){
    console.log(res);
});