import React, { Component } from 'react';
import axios from 'axios';
import UserItem from '../components/UserItem';
import Button from '../components/Button';

const getUsers = async () => {
  const response = await axios.get(
    'https://frontend-test-assignment-api.abz.agency/api/v1/users',
    { params: { count: 6 } }
  );
  return response.data.users;
};

class UsersPage extends Component {
  state = {
    usersList: [],
    pageCount: 1,
  };

  async componentDidMount() {
    const users = await getUsers();
    this.setState({
      usersList: users.sort(
        (a, b) => b.registration_timestamp - a.registration_timestamp
      ),
    });
  }

  render() {
    const title = this.props.title;
    const usersList = this.state.usersList;

    return (
      <>
        <h1>{title}</h1>
        <ul>
          {console.log(usersList)}
          {usersList.length > 0 &&
            usersList.map(user => {
              return (
                <li key={user.id}>
                  <UserItem user={user} />
                </li>
              );
            })}
        </ul>
        <Button label="show more" />
      </>
    );
  }
}

export default UsersPage;
