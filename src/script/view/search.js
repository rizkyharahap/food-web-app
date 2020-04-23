import '../component/recipe/recipe-list'
import '../component/appbar/app-bar'
import '../component/category/category-list'
import DataSource from '../data/data-source'

const search = () => {
    const searchElement = document.querySelector("app-bar")
    const element = document.querySelector("recipe-list")
    const banner = document.querySelector("banner-component")
    const categoryElement = document.querySelector("category-list")

    const onButtonSearchClicked = async () => {
        console.log(`Fillter by Keyword ${searchElement.value}`);
        
        try {
            const result = await DataSource.getSearchRecipe(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    }
    
    const onButtonCategoryClicked = async () => {
        try {
            const result = await DataSource.getSearchByCategory(categoryElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    }

    const renderResult = (results) => {
        if (banner) {
            banner.remove()
        }
        element.recipes = results;
    };

    const fallbackResult = (message) => {
        console.log(message)

        element.renderError(message)
    };


    searchElement.clickEvent = onButtonSearchClicked;
    categoryElement.clickEvent = onButtonCategoryClicked

}

export default search