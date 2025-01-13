function add(a,b){
    return new Promise((resolve,reject)=>{
        if(typeof a === 'number' && typeof b === 'number'){
            const sum = a + b ;
            resolve(sum);
        }
        else{
            reject('Give number')
        }
    })
}

add(4,'2').then(res=>console.log(resolve)).catch(reject=>console.log(reject))