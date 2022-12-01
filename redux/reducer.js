const initState = {
    areConnect: false,
    numberOfFamily: null,
    getZipCode: null,
    curentUser: {},
    userProjectInformation: {},
    userInMonEspace: false,
    counter: 0
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

        case "updateNumberOfFamily": 
            return{
                ...state,
                numberOfFamily: action.payload
            }    

        case "getZipCode": 
            return{
                ...state,
                getZipCode: action.payload
            }   

        case "updateCounter":
            return{
                ...state,
                counter: action.payload
            }    
            
        default: return state    
    }
})

export default reducer