function miFuncion(arr){
    let mayor = arr[0];
    let menor = arr[0];

    for(let i=0;i<arr.length;i++){
        if(arr[i] > mayor){
            mayor = arr[i];
        }

        if(arr[i] < menor){
            menor = arr[i];
        }
    }

    return {mayor:mayor, menor:menor};
}

let obj = miFuncion([3,1,5,4,2]);
console.log(obj);