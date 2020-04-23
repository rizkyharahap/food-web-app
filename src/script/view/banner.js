import '../component/banner/banner-component';
import DataSource from '../data/data-source';

const banners = () => {

    const element = document.querySelector("banner-component");

    const getBanner = async () => {
        try {
            const result = await DataSource.getRandomData();
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    }

    const renderResult = (results) => {
        element.banners = results;
    };

    const fallbackResult = (message) => {        
        element.renderError(`Banner data render error ${message}`);
    };

    document.addEventListener("DOMContentLoaded", () => {
        getBanner();
    })
};

export default banners