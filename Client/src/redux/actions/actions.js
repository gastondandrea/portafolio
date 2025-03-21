import {GET_ALL_PROJECTS, SET_IS_LONDING} from "./action-types";
import axios from "axios";


export function getAllProjects() {
    return async (dispatch) => {
        dispatch(setIsLoading(true)); // Inicia el estado de carga
        try {
            const response = await axios.get('http://localhost:3001/project');
            dispatch({
                type: GET_ALL_PROJECTS,
                payload: response.data,
            });
        } catch (error) {
            console.error(error);
        } finally {
            dispatch(setIsLoading(false)); // Finaliza el estado de carga
        }
    };
};

export const setIsLoading = (isLoading) =>{
    return {
            type: SET_IS_LONDING,
            payload: isLoading,
        };
}
