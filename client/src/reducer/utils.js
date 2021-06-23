export const alphabetizeLowToHigh = (recipes) => {
    const sorted = recipes.sort((a, b) => {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    });
    return sorted;
};

export const alphabetizeHighToLow = (recipes) => {
    const sorted = recipes.sort((a, b) => {
        return b.title.toLowerCase().localeCompare(a.title.toLowerCase());
    });
    return sorted;
};

export const scoreLowToHigh = (recipes, score) => {
    const sorted = recipes.sort((a, b) => parseInt(a[score]) - parseInt(b[score]));
    return sorted;
};

export const scoreHighToLow = (recipes, score) => {
    const sorted = recipes.sort((a, b) => parseInt(b[score]) - parseInt(a[score]));
    return sorted;
};

export const paginater = (recipes, index) => {
    const pag= recipes.slice(((index-1)*8),(index*8));
    return pag;
}