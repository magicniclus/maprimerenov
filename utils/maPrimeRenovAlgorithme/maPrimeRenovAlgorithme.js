export const maPrimeRenovAlgoritme = (data, lieu, number, numberMin, numberMax)=>{
    Object.values(data[lieu][number]).forEach(el =>{
        if(el.max !== undefined ){
            console.log(el.max);
        }
    })
}