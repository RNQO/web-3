let promesa = new Promise(function(resolve,reject){

    setTimeout(function(){
        resolve("Operación exitosa");
    },3000);

});

promesa.then(function(mensaje){
    console.log(mensaje);
});