import { GET_ALL_PROJECTS, SET_IS_LONDING } from "../actions/action-types";

const initialState = { 
    allProjects:[], 
    copyAllProjects:[],
    isLoading: false, 
}   
    
function reducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_PROJECTS:
            return {
                ...state,
                allProjects: action.payload,
                copyAllVideogames: action.payload
            };
        case SET_IS_LONDING:
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return {
                ...state
            };
    };
}

export default reducer;