import '../component/hero-component';
import '../component/post-list';
import PemadamSource from '../../data/pemadamSource';
import { createPageLoaderTemplate } from '../templates/template-creator';

const List = {
  async render() {
    const html = `
    ${document.querySelector('main').innerHTML = createPageLoaderTemplate.show()}
      <hero-component></hero-component>
      <main id="content">
      <section class="content">
        <div class="latest">
          <h1>Rekomendasi Pemadam Kelaparan</h1>
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
    const itemContainer = document.querySelector('post-list');
    const { restaurants } = await PemadamSource.listResto();
    itemContainer.value = restaurants;
    createPageLoaderTemplate.remove();
  },
};
export default List;
