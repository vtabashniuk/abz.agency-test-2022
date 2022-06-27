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

class AddUserFormPage extends Component {
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
      <>
        <h1>{title}</h1>

        <form name="signUpForm" autoComplete="off" method="post">
          <label htmlFor="userName">your name</label>
          <input id="userName" type="text" name="userName" />
          <label htmlFor="userEmail">email</label>
          <input id="userEmail" type="email" name="userEmail" />
          <label htmlFor="userPhone">phone</label>
          <input id="userPhone" type="tel" name="userPhone" />
          <p>+380 &#40;XX&#41; XXX - XX - XX</p>
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
                  />
                </li>
              ))}
            </ul>
          </div>
          <label htmlFor="userPhoto">upload your photo</label>
          <input type="file" id="userPhoto" name="userPhoto" />
          <Button
            options={{
              type: 'submit',
              label: 'sign up',
              isDiabled: isSubmitButtonDisabled,
            }}
          />
        </form>
      </>
    );
  }
}

export default AddUserFormPage;
