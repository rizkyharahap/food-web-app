import './category-item';

class CategoryList extends HTMLElement {

    set categories(categories) {
        this._categories = categories;
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event
    }

    get value() {
        return this.btnCategoryElement.value
    }

    render() {
        this.innerHTML = `
        <span class="block mb-3 ml-2 text-lg font-semibold text-red-500">Categories</span>
        <div class="flex flex-wrap" id="category-item"></div>
        `
        const categoryItems = document.getElementById("category-item")
        this._categories.forEach(category => {
            const categoryItemElement = document.createElement("category-item")
            categoryItemElement.category = category
            categoryItems.appendChild(categoryItemElement)

            this.btnCategoryElement = document.getElementById(`button_${category.strCategory}`)
            
            this.btnCategoryElement.addEventListener("click", this._clickEvent)
        })
    }

    renderError(message) {
        this.innerHTML += `<span class="text-xl text-gray-500">Ups, your search is nothing !</span>`
        console.log(`Render Error : ${message}`); 
    }
}

customElements.define("category-list", CategoryList)