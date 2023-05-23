class HeroComponent extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
    <div class="hero">
    <div class="hero__inner">
      <h1 class="hero__title">Cari dan Temukan Pemadam Kelaparan Di Sini!</h1>
      <p class="hero__tagline">
        Website ini menyediakan informasi mengenai beberapa restoran yang ada
        di daerah Indonesia
      </p>
    </div>
  </div>
        `;
  }
}

customElements.define('hero-component', HeroComponent);
