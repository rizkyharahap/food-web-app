import './recipe-item';

class RecipeList extends HTMLElement {

    set recipes(recipes) {
        this._recipes = recipes;
        this.render();
    }

    render() {
        this.innerHTML = `
        <span class="block mb-5 ml-2 text-lg font-semibold text-red-500">Recipes</span>
        <div class="flex flex-wrap justify-around" id="recipe-item"></div>
        `
        const recipeItems = document.getElementById("recipe-item")
        this._recipes.forEach(recipe => {
            const recipeItemElement = document.createElement("recipe-item")
            recipeItemElement.recipe = recipe
            recipeItems.appendChild(recipeItemElement)
        })
    }

    renderError(message) {
        this.innerHTML += `<span class="ml-2 text-xl text-gray-500">Ups, your search is nothing !</span>`
        console.log(`Render Error : ${message}`); 
    }
}

customElements.define("recipe-list", RecipeList)