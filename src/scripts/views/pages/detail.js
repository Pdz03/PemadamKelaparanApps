import PemadamSource from '../../data/pemadamSource';
import UrlParser from '../../routes/url-parser';
import '../component/detail-component';
import { createPageLoaderTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    const html = `
      ${document.querySelector('main').innerHTML = createPageLoaderTemplate.show()}
      <section id="content">
          <div class="detail-container">
            <detail-component></detail-component>
          </div>
      </section>
        `;
    return html;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantById = await PemadamSource.restaurantDetailById(url.id);
    const container = document.querySelector('detail-component');
    container.value = restaurantById.restaurant;

    createPageLoaderTemplate.remove();
  },
};

export default Detail;
