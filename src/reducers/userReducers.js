import {SET_USER,SET_REPOS,SET_LOADING,SET_ERROR} from '../types/types';

const initialState = {
    user: [],
    repos: [],
    loading: false,
    error: ''
};

export const userReducer = (state = initialState,action) => {
    switch(action.type){
    case SET_USER:
        return {
            ...state,
            user: action.payload,
            loading: true,
            error: ''
        };
    case SET_REPOS:
        return {
            ...state,
            repos: action.payload,
            loading: true,
            error: ''
        }; 
    case SET_LOADING:
        return {
            ...state,
            loading: true
        } 
    case SET_ERROR:
        return {
            ...state,
            error: action.payload,
            loading: false
        }        
    default:
      return state;
    
    };
};