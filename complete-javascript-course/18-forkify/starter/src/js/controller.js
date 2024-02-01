import * as model from './model.js';
import recipeView from "./views/recipeView";
import searchView from "./views/searchView";
import resultsView from "./views/resultsView";


import 'core-js/stable';
import 'regenerator-runtime/runtime';


if(module.hot) {
    module.hot.accept();
}


const controlRecipes = async function () {
    try {
        const id = window.location.hash.slice(1);

        if (!id) return;
        recipeView.renderSpinner();

        // 1) Loading recipe
        await model.loadRecipe(id);

        // 2) Rendering recipe
        recipeView.render(model.state.recipe);


    } catch (e) {
        // alert(e);
        recipeView.renderError();
    }
};

const controlSearchResults = async function() {
    try {
        resultsView.renderSpinner();

        // 1) get search
        const query = searchView.getQuery()
        if (!query) return;

        // 2) load search
        await model.loadSearchResults(query);
        console.log(model.state.search.results);

        // 3)
        resultsView.render(model.state.search.results);

    } catch (err) {
        console.log(err);
    }
};

const init = function () {
    recipeView.addHandlerRender(controlRecipes);
    searchView.addHandlerSearch(controlSearchResults);
};
init();