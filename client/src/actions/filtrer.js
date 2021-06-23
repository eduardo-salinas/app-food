import {
    ADD_RECIPE,
    FILTRED_FOR_NAME_HIGH_TO_LOW,
    FILTRED_FOR_NAME_LOW_TO_HIGH,
    FILTRED_FOR_SCORE_HEALTH_HIGH_TO_LOW,
    FILTRED_FOR_SCORE_HEALTH_LOW_TO_HIGH,
    FILTRED_FOR_SCORE_HIGH_TO_LOW,
    FILTRED_FOR_SCORE_LOW_TO_HIGH,
    PAGINATE,

} from "./constant"


export const filtredForNameHihgToLow = () => {
    return {
        type: FILTRED_FOR_NAME_HIGH_TO_LOW,
    };
};


export const filtredForNameLowToHigh = () => {
    return {
        type: FILTRED_FOR_NAME_LOW_TO_HIGH,
    };
};


export const filtredForScoreHighToLow = () => {
    return {
        type: FILTRED_FOR_SCORE_HIGH_TO_LOW,
    };
};

export const filtredForScoreLowToHigh = () => {
    return {
        type: FILTRED_FOR_SCORE_LOW_TO_HIGH,
    };
};



export const filtredForScoreHealthHighToLow = () => {
    return {
        type: FILTRED_FOR_SCORE_HEALTH_HIGH_TO_LOW,
    };
};

export const filtredForScoreHealthLowToHigh = () => {
    return {
        type: FILTRED_FOR_SCORE_HEALTH_LOW_TO_HIGH,
    };
};

export const addRecipe = () => {
    return {
        type: ADD_RECIPE,
    };
};

export const paginate = (indice) => {
    return {
        type: PAGINATE,
        payload: indice
    };
};
