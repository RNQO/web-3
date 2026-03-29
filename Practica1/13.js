function tarea(){
    return new Promise(function(resolve){
        resolve("Inicio");
    });
}

tarea()
.then(function(res){
    console.log(res);
    return "Segundo paso";
})
.then(function(res){
    console.log(res);
});