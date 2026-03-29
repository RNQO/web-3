let promesa = new Promise(function(resolve){
    resolve(5);
});

promesa
.then(function(num){
    console.log(num);
    return num*2;
})
.then(function(resultado){
    console.log(resultado);
});