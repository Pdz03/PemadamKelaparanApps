import '../component/post-list';
import '../component/empty-favorite-component';
import FavoritePemadamIdb from '../../data/favorite-pemadam-idb';
import { createPageLoaderTemplate } from '../templates/template-creator';

const Favorit = {
  async render() {
    const html = `
      ${document.querySelector('main').innerHTML = createPageLoaderTemplate.show()}
      <main id="content">
      <section class="content">
        <div class="latest">
            <h1 class="content-title">Pemadam Kelaparan Favorit</h1>
            <hr>
            <div class="list" id="resto">
                <post-list></post-list>
            </div>
            </div>
            </section>
          </main>
    `;
    return html;
  },
  async afterRender() {
    const postContainer = document.querySelector('post-list');
    const restaurants = await FavoritePemadamIdb.getAllRestaurants();
    if (restaurants.length > 0) {
      postContainer.value = restaurants;
    } else {
      document.querySelector('#resto').innerHTML = '<empty-favorite></empty-favorite>';
    }
    createPageLoaderTemplate.remove();
  },
};

export default Favorit;
