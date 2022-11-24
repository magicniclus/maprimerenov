export const maPrimeRenovAlgoritme = (data, lieu, number, revenusMin, revenusMax)=>{
    console.log(revenusMin);
    Object.values(data[lieu][updateNumber(number)]).forEach((el, idx )=>{
        if(el.max === undefined && revenusMax === undefined ){
            console.log("rose")
        }
    })
}

const updateColor = (idx) =>{
    switch (idx) {
        case 0:
            return "bleu"
        
        case 1:
            return "jaune"

        case 2:
            return "violet"

        case 3:
            return "rose"  

        default:
            return;
    }
}

const updateNumber = (nbr)=>{
    // console.log(nbr);
    switch (nbr) {
        case 1:
            return "one"
        
        case 2:
            return "two"

        case 3:
            return "three"

        case 4:
            return "four"
            
        case 5: 
            return "five"    

        default:
            return "one";
    }
}