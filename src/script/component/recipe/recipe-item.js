class RecipeItem extends HTMLElement {

      constructor() {
          super()
          this.shadowDOM = this.attachShadow({ mode: 'open' })
     }

    set recipe(recipe) {
         this._recipe = recipe;
         this.render();
    }

    render() {
         this.shadowDOM.innerHTML = `
         <style>
          a {
               text-decoration: none;
               color: #fc8181;
          }

          .col-recipe-item{
               max-width: 10rem;
               box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
               margin-bottom: 1rem;
               margin-left: 0.25rem;
               margin-right: 0.25rem;
               border-width: 1px;
               border-color: #e2e8f0;
               border-radius: 1rem;
               background-color: #fff;
          }

          .img-recipe-item {
               width: 100%;
               border-radius: 1rem;
          }

          .article-recipe-item {
               padding-left: 0.75rem;
               padding-right: 0.75rem;
               padding-top: 0.5rem;
               padding-bottom: 0.5rem;
               text-align: center;
          }

          .title-recipe-item {
               font-size: 1rem;
          }

          @media (min-width: 640px) {
               .col-recipe-item {
                    max-width: 11rem;
                    margin-left: 0.5rem;
                    margin-right: 0.5rem;
               }
             }
             
             @media (min-width: 1024px) {
               .col-recipe-item {
                    max-width: 12rem;
                    margin-left: 0.75rem;
                    margin-right: 0.75rem;
               }
             }
             
             @media (min-width: 1280px) {
               .col-recipe-item {
                    max-width: 14rem;
               }
             }

         </style>
         <a href="https://www.google.com/search?q=${this._recipe.strMeal}">
         <div class="col-recipe-item">
              <img class="img-recipe-item" src="${this._recipe.strMealThumb}" alt="">
              <div class="article-recipe-item">
                   <span class="title-recipe-item">${this._recipe.strMeal}</span>
              </div>
         </div>
         </a>
         `
    }
}

customElements.define("recipe-item", RecipeItem);
