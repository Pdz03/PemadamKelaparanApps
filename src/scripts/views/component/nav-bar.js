class NavBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
    <!-- Mobile Navbar -->
    <div class="menumob">
      <div class="iconmenu" id="menu" aria-label="navigation-menu"><a href="#/" tabindex="0">&#9776;</a></div>
    </div>
    <nav id="drawer" class="navmob">
      <ul class="navlistmob">
        <li class="navitemsmob"><a href="#/">Home</a></li>
        <li class="navitemsmob"><a href="#/favorit">Favorite</a></li>
        <li class="navitemsmob"><a target="_blank" href="https://github.com/Pdz03">About Us</a></li>
      </ul>
    </nav>
    <!-- Desktop Navbar -->
    <nav class="nav">
    <ul class="navlist">
    <li class="navitems"><a href="#">Home</a></li>
    <li class="navitems"><a href="#/favorit">Favorite</a></li>
    <li class="navitems"><a target="_blank" href="https://github.com/Pdz03">About Us</a></li>
  </ul>
    </nav>
    `;
  }
}

customElements.define('nav-bar', NavBar);
