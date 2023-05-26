/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorit');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.list_item_title a');
  I.seeElement('.list_item_title a');
  const firstPemadam = locate('.list_item_title a').first();
  const firstPemadamTitle = await I.grabTextFrom(firstPemadam);
  I.click(firstPemadam);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorit');
  I.seeElement('.list_item');
  const likedPemadamTitle = await I.grabTextFrom('.list_item_title');

  assert.strictEqual(firstPemadamTitle, likedPemadamTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.list_item_title a');
  I.seeElement('.list_item_title a');
  I.click(locate('.list_item_title a').first());

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorit');
  I.waitForElement('.list_item_title a');
  I.seeElement('.list_item_title a');
  const firstLikedPemadam = locate('.list_item_title a').first();
  const firstLikedPemadamTitle = await I.grabTextFrom(firstLikedPemadam);
  I.click(firstLikedPemadam);

  I.waitForElement('.detail-title');
  I.seeElement('.detail-title');
  const likedPemadamTitle = await I.grabTextFrom('.detail-title');
  assert.strictEqual(firstLikedPemadamTitle, likedPemadamTitle);

  I.seeElement('[aria-label="unlike restaurant"]');
  I.click('[aria-label="unlike restaurant"]');

  I.amOnPage('/#/favorit');
  I.see('Daftar pemadam favorit masih kosong!', '.empty-favorite-tag');
});

Scenario('add review at liked restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.list_item_title a');
  I.seeElement('.list_item_title a');
  const firstPemadam = locate('.list_item_title a').first();
  const firstPemadamTitle = await I.grabTextFrom(firstPemadam);
  I.click(firstPemadam);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorit');
  I.waitForElement('.list_item_title a');
  I.seeElement('.list_item_title a');
  const firstLikedPemadam = locate('.list_item_title a').first();
  const firstLikedPemadamTitle = await I.grabTextFrom(firstLikedPemadam);
  I.click(firstLikedPemadam);

  I.waitForElement('#review-form');
  I.seeElement('#review-form');
  I.fillField('name', 'Fendi');
  I.fillField('review', 'Enak');

  I.waitForElement('#button-review');
  I.seeElement('#button-review');
  I.click('#button-review');

  I.waitForElement('#review-container');
  I.seeElement('#review-container');
  I.see('Fendi', '.reviews__name');
  I.see('Enak', '.reviews__review');

  assert.strictEqual(firstPemadamTitle, firstLikedPemadamTitle);
});

Scenario('add review at unliked restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.list_item_title a');
  I.seeElement('.list_item_title a');
  const firstPemadam = locate('.list_item_title a').first();
  I.click(firstPemadam);

  I.waitForElement('#review-form');
  I.seeElement('#review-form');
  I.fillField('name', 'Fendi');
  I.fillField('review', 'Enak Banget');

  I.waitForElement('#button-review');
  I.seeElement('#button-review');
  I.click('#button-review');

  I.waitForElement('#review-container');
  I.seeElement('#review-container');
  I.see('Fendi', '.reviews__name');
  I.see('Enak', '.reviews__review');
});
