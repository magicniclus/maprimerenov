const initState = {
    areConnect: false,
    curentUser: {}
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
            
        default: return state    
    }
})

export default reducer