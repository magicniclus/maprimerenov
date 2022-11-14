const initState = {
    areConnect: false,
    curentUser: {},
    userProjectInformation: {} 
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
            
        default: return state    
    }
})

export default reducer