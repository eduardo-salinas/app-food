import axios from 'axios';
import {
    GET_DIET_TYPES,
    GET_RECIPES_DETAIL,
    GET_RECIPES_FOR_NAME,
    GET_RECIPES_ALL,
    ADD_RECIPE,
    GET_URL,
    GET_RECIPES_FOR_DIET,
    LOADING
} from './constant';


export const getRecipesAll = () => {
    return async (dispatch) => {
        dispatch({type: LOADING});
        try {
            const recipes = await axios.get(`${GET_URL}recipes`);
            return dispatch({ type: GET_RECIPES_ALL, payload: recipes.data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: GET_RECIPES_ALL, payload: [] })
        }
    };
};

export const getRecipesForName = (name) => {
    return async (dispatch) => {
        dispatch({type: LOADING});
        try {
            const recipes = await axios.get(`${GET_URL}recipes?name=${name}`);
            return dispatch({ type: GET_RECIPES_FOR_NAME, payload: recipes.data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: GET_RECIPES_FOR_NAME, payload: [] });
        }
    };
};

export const getRecipesDetail = (id) => {
    return async (dispatch) => {
        dispatch({type: LOADING});
        try {
            const recipes = await axios.get(`${GET_URL}recipes/${id}`);
            return dispatch({ type: GET_RECIPES_DETAIL, payload: recipes.data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: GET_RECIPES_DETAIL, payload: [] });
        }
    };
};

export const getRecipesForDiet = (diet) => {
    return async (dispatch) => {
        dispatch({type: LOADING});
        try {
            const recipes = await axios.get(`${GET_URL}recipes/diet/${diet}`);
            return dispatch({ type: GET_RECIPES_FOR_DIET, payload: recipes.data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: GET_RECIPES_FOR_DIET, payload: [] });
        }
    };
};

export const getDietTypes = () => {
    return async (dispatch) => {
        try {
            const diets = await axios.get(`${GET_URL}types`);
            return dispatch({ type: GET_DIET_TYPES, payload: diets.data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: GET_DIET_TYPES, payload: [] });
        }
    };
};

export const addRecipe = (recipe) => {
    return async (dispatch) => {
        try {
            await axios.post(`${GET_URL}recipe`, recipe);
            return dispatch({ type: ADD_RECIPE })
        } catch (e) {
            console.log(e)
        }
    };
};