import CONFIG from '../../globals/config';

class PostItem extends HTMLElement {
  set value(data) {
    this._data = data;
    this._render();
  }

  _render() {
    this.innerHTML = `
    <div class="list_item">
    <img class="list_item_thumb lazyload" data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM + this._data.pictureId}" title="${this._data.name}" crossorigin="anonymous">
    <div class="city" tabindex="0">${this._data.city}</div>
    <div class="list_item_content">
        <p class="list_item_rating" tabindex="0">
            Rating : &#11088
            <span class="list_item_rating_value">${this._data.rating}</span>
        </p>
        <h1 class="list_item_title" tabindex="0"><a href="/#/detail/${this._data.id}">${this._data.name}</a></h1>
        <div class="list_item_desc" tabindex="0">${this._data.description.slice(0, 150)}...</div>
        <hr>
        <a class="loc" href="https://www.google.com/maps/place/${this._data.city}" target="_blank">Kunjungi ${this._data.city}</a>
    </div>
  </div>`;
  }
}

customElements.define('post-item', PostItem);
