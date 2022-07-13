const inputErrorStyling = (nameValid, fieldName, value) => {
    if (!Boolean(nameValid) && value.length > 0) {
      document.querySelector(`[name=${fieldName}]`).classList.add('errorInput');
      document
        .querySelector(`[for=${fieldName}]`)
        .classList.add('errorFormInputLabel');
    } else {
      document
        .querySelector(`[name=${fieldName}]`)
        .classList.remove('errorInput');
      document
        .querySelector(`[for=${fieldName}]`)
        .classList.remove('errorFormInputLabel');
    }
  };

  export default inputErrorStyling;