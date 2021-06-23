
export const validate = (recipe) => {
    let error = {};
    if (!recipe.title) {
        error.title = "title is required";
    };
    if (!recipe.summary) {
        error.summary = "summary is required";
    };
    if (!/^([0-9])*$/.test(recipe.score)) {
        error.score = "it can only be a number";
    } else if (recipe.score < 0 || recipe.score > 100) {
        error.score = "range has to be 0 to 100";
    };
    if (!/^([0-9])*$/.test(recipe.healthScore)) {
        error.healthScore = "it can only be a number";
    } else if (recipe.healthScore < 0 || recipe.healthScore > 100) {
        error.healthScore = "range has to be 0 to 100";
    };
    if (recipe.diet.length === 0) {
        error.diet = "you must select at least one diet";
    };
    return error;
};

export const validateDiet = (diet) => {
    let error = {};
    if (!diet.title) {
        error.dietTitle = "title is required";
    };
    return error;
}