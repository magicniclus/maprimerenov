export const switchConnect = (bool, user) => {
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