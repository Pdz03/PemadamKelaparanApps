class AppBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div id="logo">
      <img src="https://i.ibb.co/3RKzdDP/logopk.png" alt="Logo Pemadam Kelaparan" border="0" crossorigin="anonymous"/>
    </div>
    <div class="headtitle">
      <div class="title">Pemadam Kelaparan</div>
      <div class="sub">
        Anda lapar? Cari tempat pemadam kelaparan terdekat di sini!
      </div>
    </div>
      `;
  }
}

customElements.define('app-bar', AppBar);
