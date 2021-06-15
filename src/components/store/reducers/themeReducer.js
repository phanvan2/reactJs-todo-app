let iniitState = {
    color: "#fff" 
}; 

export default function themeReducer(state = iniitState , action){
    switch(action.type){
        case "CHANGE_THEME":
            console.log('themeReducer: ' + JSON.stringify(state)) 
            return Object.assign({}, state, {
                color: action.payload.color
            }) ; 
            default :
                return iniitState ; 
    }
}