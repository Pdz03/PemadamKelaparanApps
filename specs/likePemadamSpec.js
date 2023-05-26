/* eslint-disable no-undef */
import FavoritePemadamIdb from '../src/scripts/data/favorite-pemadam-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = `
    <div id="notif-favorite-container" class="notif-favorite-container"></div>
    <div id="likeButtonContainer"></div>`;
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like restaurant"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been like before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label = "unlike restaurant"]')).toBeFalsy();
  });

  it('should be able to like to restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoritePemadamIdb.getRestaurantById(1);

    expect(restaurant).toEqual({ id: 1 });
    FavoritePemadamIdb.deleteRestaurant(1);
  });

  it('should not add restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoritePemadamIdb.putRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoritePemadamIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
    FavoritePemadamIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant if it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoritePemadamIdb.getAllRestaurants()).toEqual([]);
  });
});
