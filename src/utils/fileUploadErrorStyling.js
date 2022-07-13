const fileUploadErrorStyling = (nameValid, errorText) => {
  if (!Boolean(nameValid) && errorText.length > 0) {
    document.querySelector('.fileInputLabel').classList.add('errorInput');
    document
      .querySelector('.textMessageNoFile')
      .classList.add('errorInput', 'errorFileInput');
  } else {
    document.querySelector('.fileInputLabel').classList.remove('errorInput');
    document
      .querySelector('.textMessageNoFile')
      .classList.remove('errorInput', 'errorFileInput');
  }
};

export default fileUploadErrorStyling;
