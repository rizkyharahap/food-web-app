class FooterComponent extends HTMLElement {

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
         Made with <span class="text-red-400 border-gray-300">&#9829;</span> in Home
        `
    }
}

customElements.define("footer-component", FooterComponent);