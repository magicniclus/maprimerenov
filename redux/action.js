export const switchConnect = (bool) => {
    return {
        type: "switchConntect",
        payload: bool
    }
}

export const currentUser = (user)=>{
    return{
        type: "currentUser",
        payload: user
    }
}

export const showUserProjectInformation = user =>{
    return{
        type: "showUserProjectInformation",
        payload: user
    }
}

export const showPage = boolean =>{
    return{
        type: "showPage",
        payload: boolean
    }
}

export const updateNumberOfFamily = number=>{
    return{
        type: "updateNumberOfFamily",
        payload: number
    }
}

export const getZipCode = number=>{
    return{
        type: "getZipCode",
        payload: number
    }
}

export const updateCounter = number=>{
    return{
        type:"updateCounter",
        payload: number
    }
}