export const maPrimeRenovAlgoritme = async (data, lieu, number, revenusMin, revenusMax)=>{
    return new Promise((resolve, reject)=>{
        Object.values(data[lieu][updateNumber(number)]).forEach((element, idx)=> {
            if(element.min >= revenusMin && revenusMax <= element.max){
                resolve(updateColor(idx))
            }
        }).catch(err=>{
            reject(err)
        })
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

export const updateNumber = (nbr)=>{
    switch (nbr) {
        case "1":
            return "one"
        
        case "2":
            return "two"

        case "3":
            return "three"

        case "4":
            return "four"
            
        case "5": 
            return "five"    
            
        case "6": 
            return "six"    
   
        case "7": 
            return "seven"    

        case "8": 
            return "eight"    

        case "9": 
            return "nine"    

        case "10": 
            return "ten"    

        case "11": 
            return "eleven"    

        case "12": 
            return "twelve"    

        case "13": 
            return "threeteen"    

        case "14": 
            return "fourteen"    

        case "15": 
            return "fiveteen"    

        default:
            return "one";
    }
}