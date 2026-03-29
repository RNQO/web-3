function obtener(){
    return new Promise(function(resolve){
        resolve("Hola");
    });
}

async function ejecutar(){
    let res = await obtener();
    console.log(res);
}

ejecutar();