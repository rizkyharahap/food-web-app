import '../component/category/category-list';
import DataSource from '../data/data-source';

const categories = () => {
    
    const element = document.querySelector("category-list");
    
    const getCategory = async () => {
        try {
            const result = await DataSource.getCategoriesData();
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    }

    const renderResult = (results) => {
        element.categories = results;
    };

    const fallbackResult = (message) => {
        element.renderError(`Category data render error ${message}`);
    };

    document.addEventListener("DOMContentLoaded", () => {
        getCategory();
    })
};

export default categories