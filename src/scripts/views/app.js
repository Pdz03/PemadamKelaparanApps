import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ content }) {
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    try {
      const page = routes[url];
      this._content.innerHTML = await page.render();
      await page.afterRender();
      const mainContent = document.querySelector('#mainContent');
      const skipLink = document.querySelector('.skip-link');
      skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        mainContent.scrollIntoView({ behavior: 'smooth' });
        skipLink.blur();
      });
    } catch (error) {
      const mainContent = document.querySelector('#mainContent');
      mainContent.innerHTML = `
      <div class="error-view">
      <div class="page-loader">
      </div>
      <p>Informasi gagal ditampilkan</p>
      <div>
      `;
    }
  }
}

export default App;
