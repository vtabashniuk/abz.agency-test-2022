import React, { Component } from 'react';
import Button from '../components/Button';
import checkUploadImage from '../utils/checkUploadImage.js';
import { getPositions, getToken } from '../api/getFunctions.js';
import inputErrorStyling from '../utils/inputErrorsStyling.js';
import fileUploadErrorStyling from '../utils/fileUploadErrorStyling.js';
import nameTrimming from '../utils/nameTrimming.js';

class SignUpPage extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    position_id: '',
    photo: null,
    formErrors: { name: '', email: '', phone: '', position: '', photo: '' },
    nameValid: false,
    emailValid: false,
    phoneValid: false,
    positionValid: false,
    photoValid: false,
    isFormValid: false,
    positions: [],
    token: '',
  };

  async componentDidMount() {
    const result = await getPositions();
    const token = await getToken();

    this.setState({
      positions: [...result.sort((a, b) => (a.name > b.name ? 1 : -1))],
      token: token,
    });
  }

  validateForm() {
    this.setState({
      isFormValid:
        Boolean(this.state.nameValid) &&
        Boolean(this.state.emailValid) &&
        Boolean(this.state.phoneValid) &&
        this.state.positionValid &&
        this.state.photoValid,
    });
  }

  validateField = async (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let phoneValid = this.state.phoneValid;
    let positionValid = this.state.positionValid;
    let photoValid = this.state.photoValid;

    switch (fieldName) {
      case 'name':
        nameValid = value.length > 1 && value.length < 61;
        fieldValidationErrors.name = nameValid
          ? ''
          : 'Username should contain 2-60 characters';
        inputErrorStyling(nameValid, fieldName, value);
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid
          ? ''
          : 'User email, must be a valid email according to RFC2822';
        inputErrorStyling(emailValid, fieldName, value);
        break;
      case 'phone':
        phoneValid =
          value.length === 13 && value.match(/^[+]{0,1}380([0-9]{9})$/i);
        fieldValidationErrors.phone = phoneValid
          ? ''
          : 'Number should start with code of Ukraine +380 and contain 12 digits only';
        inputErrorStyling(phoneValid, fieldName, value);
        break;
      case 'position_id':
        positionValid = Number.isInteger(+value) && +value > 0;
        fieldValidationErrors.position = positionValid
          ? ''
          : 'Position ID must be an integer and must be bigger than 0';
        break;
      case 'photo':
        const imageToCheck = {
          obj: value,
          type: ['image/jpeg', 'image/jpg'],
          size: 5 * 1024,
          height: 70,
          width: 70,
        };

        const { validImage, errorMessage } = await checkUploadImage(
          imageToCheck
        );
        photoValid = validImage;
        fieldValidationErrors.photo = errorMessage;
        fileUploadErrorStyling(validImage, errorMessage);
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        nameValid: nameValid,
        emailValid: emailValid,
        phoneValid: phoneValid,
        positionValid: positionValid,
        photoValid: photoValid,
      },
      this.validateForm
    );
  };

  inputChangeHandler = event => {
    const name = event.currentTarget.name;
    let value = null;
    name !== 'photo'
      ? (value = event.currentTarget.value)
      : (value = event.currentTarget.files[0]);
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  render() {
    const { title } = this.props;
    const { positions, isFormValid } = this.state;

    return (
      <div className="formContainer">
        <h1 className="title">{title}</h1>

        <form name="signUpForm" autoComplete="off" method="post">
          <ul className="inputsGroup">
            <li className="inputItem">
              <input
                autoComplete="off"
                className="formInput"
                id="name"
                name="name"
                onChange={this.inputChangeHandler}
                placeholder="  "
                type="text"
                value={this.state.name}
              />
              <label htmlFor="name" className="formInputLabel">
                your name
              </label>
              {this.state.name.length > 0 && !this.state.nameValid && (
                <p className="inputErrorMessage">
                  {this.state.formErrors.name}
                </p>
              )}
            </li>
            <li className="inputItem">
              <input
                autoComplete="off"
                className="formInput"
                id="email"
                name="email"
                onChange={this.inputChangeHandler}
                placeholder="  "
                type="email"
                value={this.state.email}
              />
              <label htmlFor="email" className="formInputLabel">
                email
              </label>
              {this.state.email.length > 0 && !this.state.emailValid && (
                <p className="inputErrorMessage">
                  {this.state.formErrors.email}
                </p>
              )}
            </li>
            <li className="inputItem">
              <input
                autoComplete="off"
                className="formInput"
                id="phone"
                name="phone"
                onChange={this.inputChangeHandler}
                placeholder="  "
                type="tel"
                value={this.state.phone}
              />
              <label htmlFor="phone" className="formInputLabel">
                phone
              </label>
              {this.state.phone.length > 0 && !this.state.phoneValid && (
                <p className="inputErrorMessage">
                  {this.state.formErrors.phone}
                </p>
              )}
              {(this.state.phone.length === 0 || this.state.phoneValid) && (
                <p className="helperText">+380 &#40;XX&#41; XXX - XX - XX</p>
              )}
            </li>
          </ul>
          <div className="radioButtons">
            <p>Select your position</p>
            <ul className="radioButtonsGroup">
              {positions.map(item => (
                <li key={item.id} className="radioButtonItem">
                  <input
                    checked={+this.state.position_id === item.id}
                    className="radioButtonInput"
                    id={item.id}
                    name="position_id"
                    onChange={this.inputChangeHandler}
                    type="radio"
                    value={item.id}
                  />
                  <label htmlFor={item.id}>{item.name}</label>
                </li>
              ))}
            </ul>
          </div>
          <div className="fileInput">
            <label htmlFor="userPhoto" className="fileInputLabel">
              upload
            </label>
            <input
              type="file"
              id="userPhoto"
              name="photo"
              accept="image/jpeg, image/jpg"
              onChange={this.inputChangeHandler}
              required
            />
            {this.state.photoValid ? (
              <p className="textMessageIsFile">
                {nameTrimming(this.state.photo.name, 25)}
              </p>
            ) : (
              <p className="textMessageNoFile">upload your photo</p>
            )}
            {this.state.formErrors.photo.length > 0 && (
              <p className="inputErrorMessage">{this.state.formErrors.photo}</p>
            )}
          </div>
          <Button
            options={{
              className: 'button',
              isDisabled: !isFormValid,
              label: 'sign up',
              type: 'submit',
            }}
          />
        </form>
      </div>
    );
  }
}

export default SignUpPage;
