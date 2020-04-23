class CategoryItem extends HTMLElement {

     set category(category) {
          this._category = category;
          this.render();
     }

     render() {

          this.innerHTML = `
          <button class="bg-white 
          mb-1 
          mx-1 
          py-1 
          px-3 
          border-2 
          border-red-400 
          text-red-400 
          cursor-pointer 
          rounded-full
          hover:border-gray-500
          hover:bg-gray-400
          hover:text-white 
          text-md" id="button_${this._category.strCategory}" value="${this._category.strCategory}">${this._category.strCategory}</button>
          
          `
          
     }
}

customElements.define("category-item", CategoryItem);
