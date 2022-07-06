import React, { Component } from 'react';
import axios from 'axios';
import Button from '../components/Button';

const getPositions = async () => {
  const response = await axios.get(
    'https://frontend-test-assignment-api.abz.agency/api/v1/positions'
  );
  return response.data.positions;
};

const getToken = async () => {
  const response = await axios.get(
    'https://frontend-test-assignment-api.abz.agency/api/v1/token'
  );
  return response.data.token;
};

class SignUpPage extends Component {
  state = {
    positions: [],
    token: '',
    isSubmitButtonDisabled: true,
  };

  async componentDidMount() {
    const result = await getPositions();
    const token = await getToken();

    this.setState({
      positions: [...result.sort((a, b) => (a.name > b.name ? 1 : -1))],
      token: token,
    });
  }

  render() {
    const { title } = this.props;
    const { positions, isSubmitButtonDisabled } = this.state;

    return (
      <div className="formContainer">
        <h1 className="title">{title}</h1>

        <form name="signUpForm" autoComplete="off" method="post">
          <ul className="inputsGroup">
            <li className="inputItem">
              <input
                id="userName"
                type="text"
                name="userName"
                className="formInput"
                autoComplete="off"
                placeholder="   "
                required
                minLength="2"
                maxLength="60"
              />
              <label htmlFor="userName" className="formInputLabel">
                your name
              </label>
            </li>
            <li className="inputItem">
              <input
                id="userEmail"
                type="email"
                name="userEmail"
                className="formInput"
                autoComplete="off"
                placeholder="   "
                required
              />
              <label htmlFor="userEmail" className="formInputLabel">
                email
              </label>
            </li>
            <li className="inputItem">
              <input
                id="userPhone"
                type="tel"
                name="userPhone"
                className="formInput"
                autoComplete="off"
                placeholder="   "
                required
              />
              <label htmlFor="userPhone" className="formInputLabel">
                phone
              </label>
              <p>+380 &#40;XX&#41; XXX - XX - XX</p>
            </li>
          </ul>
          <div>
            <p>Select your position</p>
            <ul>
              {positions.map(item => (
                <li key={item.id}>
                  <label htmlFor={item.id}>{item.name}</label>
                  <input
                    type="radio"
                    name="userPosition"
                    value={item.name.toLowerCase()}
                    id={item.id}
                    required
                  />
                </li>
              ))}
            </ul>
          </div>
          <label htmlFor="userPhoto">upload your photo</label>
          <input type="file" id="userPhoto" name="userPhoto" required />
          <Button
            options={{
              type: 'submit',
              label: 'sign up',
              isDiabled: isSubmitButtonDisabled,
            }}
          />
        </form>
      </div>
    );
  }
}

export default SignUpPage;
