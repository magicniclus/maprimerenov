const ileDeFranceZipCode = ["75", "77", "78", "91", "92", "93", "94", "95"]
export const checkZipCode = (codeZip)=>{    
        const zipCode = codeZip.split("").splice(0, 2).join("")
        if(ileDeFranceZipCode.findIndex(el=>el === zipCode.toString()) !== -1) return true
        else return false
}

