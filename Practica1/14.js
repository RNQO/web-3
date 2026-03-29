function obtenerDato(callback){

    let promesa = new Promise(function(resolve){
        resolve("Dato obtenido");
    });

    promesa.then(function(res){
        callback(res);
    });
}

obtenerDato(function(dato){
    console.log(dato);
});