import FormValidation from './form';

function validateFormCart() {
  const formValidation = new FormValidation('#form-cart', { isModal: true });

  formValidation.validateOnSubmit();
}

export default validateFormCart;
