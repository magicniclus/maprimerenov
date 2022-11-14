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