import API_ENDPOINT from '../globals/api-endpoint';

class PemadamSource {
  static async listResto() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson;
  }

  static async restaurantDetailById(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson;
  }

  static async postReview({ id, name, review }) {
    const response = await fetch(API_ENDPOINT.review, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name, review }),
    });

    /* eslint no-return-await: "off" */
    return response.json();
  }
}

export default PemadamSource;
