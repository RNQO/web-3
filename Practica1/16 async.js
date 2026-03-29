function obtener(){
    return new Promise(function(resolve){
        resolve("Hola");
    });
}

obtener().then(function(res){
    console.log(res);
});