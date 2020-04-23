class BannerComponent extends HTMLElement {
    constructor() {
        super()
        this.shadowDOM = this.attachShadow({mode:'open'})
   }
    set banners(banners) {
        this._banners = banners;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                :host {
                    background: linear-gradient(180deg, rgba(10, 10, 10, 0.4) 99.99%, rgba(0, 0, 0, 0) 100%), url('${this._banners[0].strMealThumb}');
                    background-size: cover;
                    background-position: center;
                    height: 100%;
                }
                span {
                    color: white;
                    font-size: 2rem;
                }

            </style>
            <span>${this._banners[0].strMeal}</span>
        `
    }

    renderError(message) {
        console.log(message)
    }
}

customElements.define("banner-component", BannerComponent)