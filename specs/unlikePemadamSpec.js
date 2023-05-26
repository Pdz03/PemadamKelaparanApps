/* eslint-disable no-undef */
import FavoritePemadamIdb from '../src/scripts/data/favorite-pemadam-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unliking a Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = `
        <div id="notif-favorite-container" class="notif-favorite-container"></div>
        <div id="likeButtonContainer"></div>
        `;
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    FavoritePemadamIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    FavoritePemadamIdb.deleteRestaurant(1);
  });

  it('should display unlike button when restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike restaurant"]')).toBeTruthy();
  });

  it('should not display like button when restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like restaurant"]')).toBeFalsy();
  });

  it('should be able remove restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoritePemadamIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoritePemadamIdb.deleteRestaurant(1);
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoritePemadamIdb.getAllRestaurants()).toEqual([]);
  });
});
