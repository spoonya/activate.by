import FormValidation from './form';

function validateFormCart() {
  const formValidation = new FormValidation('#form-cart');

  formValidation.validateOnSubmit();
}

export default validateFormCart;
