import '../component/recipe/recipe-list';
import DataSource from '../data/data-source';

const recipes = () => {

    const element = document.querySelector("recipe-list");
    
    const getRecipe = async () => {
        try {
            const result = await DataSource.getSearchRecipe('');
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    }

    const renderResult = (results) => {
        element.recipes = results;
    };

    const fallbackResult = (message) => {
        element.renderError(message);
    };

    document.addEventListener("DOMContentLoaded", () => {
        getRecipe();
    })
};

export default recipes