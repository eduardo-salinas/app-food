require('dotenv').config();

const axios = require('axios').default;
const { API_KEY } = process.env;


const recipesApi = async function () {
    try {
        const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
        const recipes = res.data.results;

        return recipes.map(r => {
            return {
                id: r.id,
                title: r.title,
                score: r.spoonacularScore,      //puntaje           //
                healthScore: r.healthScore,     //puntaje de salud //-->number
                img: r.image,
                diets: r.diets,                 //array
            };
        });

    } catch (e) {
        console.log(e);
        return [];
    };
};


module.exports = recipesApi;