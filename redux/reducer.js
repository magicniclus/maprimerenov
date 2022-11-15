const initState = {
    areConnect: false,
    curentUser: {},
    userProjectInformation: {},
    userInMonEspace: false
}

const reducer = ((state= initState, action)=>{
    switch(action.type) {
        case "switchConntect": 
            return {
                ...state,
                areConnect: action.payload,
            }

        case "currentUser":
            return{
                ...state,
                curentUser:  action.payload
            }

        case "showUserProjectInformation":
            return{
                ...state, 
                userProjectInformation: action.payload
            }

        case "showPage":
            return{
                ...state,
                userInMonEspace: action.payload
            }    
            
        default: return state    
    }
})

export default reducer