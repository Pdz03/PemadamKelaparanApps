import CONFIG from '../../globals/config';
import FormReviewInitiator from '../../utils/form-review-initiator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

class DetailComponent extends HTMLElement {
  set value(data) {
    this._data = data;
    this._render();
    this._formInitiator();
    this._likeButtonPresenter();
  }

  _templateRating() {
    const rate = [];

    for (let i = 0; i < parseFloat(Math.floor(this._data.rating)); i += 1) {
      rate.push('<i class="fas fa-star"></i>');
    }
    return rate;
  }

  _formInitiator() {
    FormReviewInitiator.init({
      id: this._data.id,
      inputName: document.getElementById('name'),
      inputReview: document.getElementById('review'),
      submitButton: document.querySelector('#button-review'),
      reviewsContainer: document.getElementById('review-form-container'),
    });
  }

  async _likeButtonPresenter() {
    await LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      notifContainer: document.querySelector('#notif-favorite-container'),
      restaurant: this._data,
    });
  }

  _render() {
    let customerReviews = '';
    this._data.customerReviews.forEach((customerReview) => {
      customerReviews += `

        <div class="reviews__item">
        <div class="review-photo-profile">
        <img class="lazyload" data-src="https://i.ibb.co/Zh4SvhQ/default.jpg" alt="consumer photo profile" crossorigin="anonymous">
        </div>
        <div class="review-content">
          <h3 class="reviews__name">${customerReview.name}</h2>
    
          <small class="reviews__date">${customerReview.date}</small>
    
          <p class="reviews__review">${customerReview.review}</p>
        </div>
        </div>
      `;
    });
    this.innerHTML = `
            <div id="notif-favorite-container" class="notif-favorite-container"></div>
            <article>
                <img data-src="${CONFIG.BASE_IMAGE_URL_LARGE + this._data.pictureId}" class="detail-thumbnail lazyload" alt="${this._data.name}" crossorigin="anonymous">
                <div id="likeButtonContainer"></div>
                <div class="detail-content">
                    <h1 class="detail-title">${this._data.name}</h1>
                    <div class="detail-category-container">
                        ${this._data.categories.map((category) => `<span class="detail-category">${category.name}</span>`).join(', ')}
                    </div>
                    <i class="fas fa-map-marker-alt"></i>
                    <span class="detail-location">${this._data.address}, ${this._data.city}</span>
                    <p class="detail-description">${this._data.description}</p> 
                </div>
            </article>
            <aside>
                <div class="detail-menu">
                    <div class="menu-title-container">
                        <i class="fas fa-pizza-slice"></i>
                        <h2 class="menu-title">Food</h2>
                    </div>
                    <ul class="menu-list">
                        ${this._data.menus.foods.map((food) => `<li class="menu-item">${food.name}</li>`).join(' ')}
                    <ul>
                </div>
                <div class="detail-menu">
                    <div class="menu-title-container">
                        <i class="fas fa-coffee"></i>
                        <h2 class="menu-title">Drinks</h2>
                    </div>
                    <ul class="menu-list">
                        ${this._data.menus.drinks.map((drink) => `<li class="menu-item">${drink.name}</li>`).join(' ')}
                    </ul>
                </div>
            </aside>
            <section>
                <div class="menu-rating">
                    <span>Rating ${this._data.rating}</span>    
                    ${this._templateRating().map((item) => item).join('')}
                </div>
                <hr>
                <div class="review-form-container">
                <h2>Tambahkan Review</h2>
                <form class="review-form" id="review-form">
                    <input type="hidden" name="id" value="${this._data.id}">
                    <div class="review-form-element">
                        <label for="name">Nama</label>
                        <input type="text" name="name" id="name" autocomplete="off">
                    </div>
                    <div class="review-form-element">
                        <label for="review">Review</label>
                        <textarea name="review" id="review" row="5"></textarea>
                    </div>
                    <button type="submit" id="button-review">Tambahkan Review</button>
                </form>
            </div>
            <hr>
            <h2>Review Pelanggan</h2>
                <div id="review-container">
                ${customerReviews}
                </div>

            </section>
        `;
  }
}

customElements.define('detail-component', DetailComponent);
