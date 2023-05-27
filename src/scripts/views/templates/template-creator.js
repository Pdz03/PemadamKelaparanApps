const createReviewTemplate = (reviews) => {
  const review = reviews.customerReviews[reviews.customerReviews.length - 1];

  const html = document.createElement('div');
  html.classList.add('reviews__item');
  html.innerHTML = `
  <div class="review-photo-profile">
  <img src="./images/user/default.jpg" alt="consumer photo profile">
  </div>
  <div class="review-content">
    <h3 class="reviews__name">${review.name}</h2>

    <small class="reviews__date">${review.date}</small>

    <p class="reviews__review">${review.review}</p>
  </div>
        
  `;

  return html;
};

const createSkeletonRestoTemplate = () => {
  let template = '';

  for (let i = 0; i < 20; i += 1) {
    template += `
    <post-item>
    <div class="list_item">
    <div class="skeleton" tabindex="0">Lorem ipsum</div>
    <div class="list_item_content">
        <h1 class="skeleton" tabindex="0">Lorem ipsum dolor sit</a></h1>
        <div class="skeleton" tabindex="0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        <hr>
        <a class="skeleton" href="#" target="_blank">Lorem</a>
    </div>
  </div>
</post-item>
    `;
  }
  return template;
};

const createButtonLoaderTemplate = () => `
  <div class="btn-loader">
  </div>
  `;

const createPageLoaderTemplate = {
  show() {
    return `
      <div class="page-loader"></div>
    `;
  },
  remove() {
    document.querySelector('.page-loader').remove();
  },
};

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like restaurant" id="likeButton" class="like">
      <i class="far fa-heart" aria-hidden="true"></i>
    </button>
  `;

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike restaurant" id="likeButton" class="like">
      <i class="fas fa-heart" aria-hidden="true"></i>
    </button>
  `;

const createSuccesFavoriteNotif = {
  show() {
    return `
      <div class="fav-notif">
        <p>Sukses menambahkan ke favorit</p>
      </div>
    `;
  },

  remove() {
    setTimeout(() => {
      const notif = document.querySelector('.fav-notif');
      if (notif)notif.remove();
    }, 2800);
  },
};

const createRemoveFavoriteNotif = {
  show() {
    return `
      <div class="fav-notif">
        <p>Sukses menghapus dari favorit</p>
      </div>
    `;
  },

  remove() {
    setTimeout(() => {
      const notif = document.querySelector('.fav-notif');
      if (notif)notif.remove();
    }, 2800);
  },
};
export {
  createReviewTemplate,
  createButtonLoaderTemplate,
  createPageLoaderTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createSuccesFavoriteNotif,
  createRemoveFavoriteNotif,
  createSkeletonRestoTemplate,
};
