import PemadamSource from '../data/pemadamSource';

const FormReviewInitiator = {
  init({
    id, inputName, inputReview, submitButton,
  }) {
    submitButton.addEventListener('click', async (event) => {
      event.preventDefault();
      const review = {
        id,
        name: inputName.value,
        review: inputReview.value,
      };
      const data = await PemadamSource.postReview(review);
      const valName = inputName;
      const valReview = inputReview;
      valName.value = '';
      valReview.value = '';
      console.log(data);
      window.location.reload();
    });
  },
};

export default FormReviewInitiator;
