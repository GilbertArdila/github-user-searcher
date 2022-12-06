import { getGitHubUser,getRepos } from "../services/getData";
import {SET_USER,SET_REPOS,SET_LOADING,SET_ERROR} from '../types/types';

 
export const setUser = (user) => async (dispatch) => {
    dispatch({
        type: SET_LOADING
    });
    try {
        const response = await getGitHubUser(user)
        dispatch({
            type:SET_USER,
            payload: response
        });
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: ['Error al cargar usuario, por favor intente más tarde',error.message]
        });
       
    };
};

export const setRepos = (url) => async (dispatch) => {
    dispatch({
        type: SET_LOADING
    });
    try {
        const response = await getRepos(url);
        dispatch({
            type:SET_REPOS,
            payload: response
        });
        
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: ['Error al cargar los repositorios, por favor intente más tarde',error.message]
        });
    };
};