import * as model from './model.js';
import recipeView from "./views/recipeView";
import searchView from "./views/searchView";
import resultsView from "./views/resultsView";
import paginationView from "./views/paginationView";


import 'core-js/stable';
import 'regenerator-runtime/runtime';


// if(module.hot) {
//     module.hot.accept();
// }


const controlRecipes = async function () {
    try {
        const id = window.location.hash.slice(1);

        if (!id) return;
        recipeView.renderSpinner();

        // 0) Update results view
        resultsView.update(model.getSearchResultsPage());

        // 1) Loading recipe
        await model.loadRecipe(id);

        // 2) Rendering recipe
        recipeView.render(model.state.recipe);

    } catch (e) {
        // alert(e);
        recipeView.renderError();
    }
};

const controlSearchResults = async function () {
    try {
        resultsView.renderSpinner();

        // 1) get search
        const query = searchView.getQuery()
        if (!query) return;

        // 2) load search
        await model.loadSearchResults(query);

        // 3) Render results
        // resultsView.render(model.state.search.results);
        model.state.search.page = 1;
        resultsView.render(model.getSearchResultsPage());

        // 4) Render initial pagination btn
        paginationView.render(model.state.search);

    } catch (err) {
        console.error(err);
    }
};


const controlPagination = function (goToPage) {
    try {

        // 1) Render NEW results
        resultsView.render(model.getSearchResultsPage(goToPage));

        // 2) Render NEW initial pagination btn
        paginationView.render(model.state.search);

    } catch (err) {
        console.error(err);
    }
};

const controlServings = function (newServings) {
    // Update the recipe servings
    model.updateServings(newServings);

    // Update the recipe view
    // recipeView.render(model.state.recipe);
    recipeView.update(model.state.recipe);
};


const init = function () {
    recipeView.addHandlerRender(controlRecipes);
    recipeView.addHandlerUpdateServings(controlServings);
    searchView.addHandlerSearch(controlSearchResults);
    paginationView.addHandlerClick(controlPagination);
};
init();