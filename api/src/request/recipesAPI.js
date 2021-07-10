require('dotenv').config();

const axios = require('axios').default;
const { API_KEY1, API_KEY2, API_KEY3, API_KEY4, API_KEY5 } = process.env

let index = 1;
let apiKey;

const recipesApi = async function () {
    switch (index) {
        case 1: apiKey = API_KEY1;
        case 2: apiKey = API_KEY2;
        case 3: apiKey = API_KEY3;
        case 4: apiKey = API_KEY4;
        case 5: apiKey = API_KEY5;
        default: apiKey = API_KEY1;
    }
    console.log("************************",index,"*****",apiKey);
    try {
        const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&number=100`)
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
        if (index >= 5) {
            index = 1;
        } else {
            index++
        }
        return [];
    };
};


module.exports = recipesApi;