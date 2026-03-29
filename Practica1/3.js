function miFuncion(arr){
    let obj = {pares:[], impares:[]};

    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            obj.pares.push(arr[i]);
        }else{
            obj.impares.push(arr[i]);
        }
    }

    return obj;
}

let obj = miFuncion([1,2,3,4,5]);
console.log(obj);