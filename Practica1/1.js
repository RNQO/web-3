function miFuncion(texto){
    let obj = {a:0,e:0,i:0,o:0,u:0};

    for(let i=0;i<texto.length;i++){
        let letra = texto[i];

        if(letra=="a") obj.a++;
        if(letra=="e") obj.e++;
        if(letra=="i") obj.i++;
        if(letra=="o") obj.o++;
        if(letra=="u") obj.u++;
    }

    return obj;
}

let obj = miFuncion("euforia");
console.log(obj);