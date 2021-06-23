import {
    ADD_RECIPE,
    FILTRED_FOR_NAME_HIGH_TO_LOW,
    FILTRED_FOR_NAME_LOW_TO_HIGH,
    FILTRED_FOR_SCORE_HEALTH_HIGH_TO_LOW,
    FILTRED_FOR_SCORE_HEALTH_LOW_TO_HIGH,
    FILTRED_FOR_SCORE_HIGH_TO_LOW,
    FILTRED_FOR_SCORE_LOW_TO_HIGH,
    GET_DIET_TYPES,
    GET_RECIPES_ALL,
    GET_RECIPES_DETAIL,
    GET_RECIPES_FOR_DIET,
    GET_RECIPES_FOR_NAME,
    LOADING,
} from "../actions/constant"
import {
    alphabetizeHighToLow,
    alphabetizeLowToHigh,
    scoreHighToLow,
    scoreLowToHigh
} from "./utils";


const initialState = {
    recipes: [],
    diets: [],
    loading: false
}

const reducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case GET_RECIPES_ALL:
            return {
                ...state,
                loading: false,
                recipes: payload
            };
        case GET_RECIPES_FOR_NAME:
            return {
                ...state,
                loading: false,
                recipes: payload
            };
        case GET_DIET_TYPES:
            return {
                ...state,
                diets: payload
            };
        case GET_RECIPES_DETAIL:
            return {
                ...state,
                loading: false,
                recipes: [payload]
            }
        case GET_RECIPES_FOR_DIET:
            return {
                ...state,
                loading: false,
                recipes: payload
            };
        case ADD_RECIPE:
            return state;
        case FILTRED_FOR_NAME_HIGH_TO_LOW:
            return {
                ...state,
                recipes: alphabetizeHighToLow(state.recipes)
            };
        case FILTRED_FOR_NAME_LOW_TO_HIGH:
            return {
                ...state,
                recipes: alphabetizeLowToHigh(state.recipes)
            };
        case FILTRED_FOR_SCORE_HIGH_TO_LOW:
            return {
                ...state,
                recipes: scoreHighToLow(state.recipes, "score")
            };
        case FILTRED_FOR_SCORE_LOW_TO_HIGH:
            return {
                ...state,
                recipes: scoreLowToHigh(state.recipes, "score")
            };
        case FILTRED_FOR_SCORE_HEALTH_HIGH_TO_LOW:
            return {
                ...state,
                recipes: scoreHighToLow(state.recipes, "healthScore")
            };
        case FILTRED_FOR_SCORE_HEALTH_LOW_TO_HIGH:
            return {
                ...state,
                recipes: scoreLowToHigh(state.recipes, "healthScore")
            };
        case LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state;
    }
};

export default reducer;