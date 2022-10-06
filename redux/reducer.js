const initState = {
    areConnect: false
}

const reducer = ((state= initState, action)=>{
    switch(action.type) {
        case "switchConntect": 
            return {
                ...state,
                areConnect: action.payload
            }

        default: return state    
    }
})

export default reducer