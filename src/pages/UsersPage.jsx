import React, { Component } from 'react';
import axios from 'axios';
import UserItem from '../components/UserItem';
import Button from '../components/Button';

const getUsers = async currentPage => {
  const response = await axios.get(
    'https://frontend-test-assignment-api.abz.agency/api/v1/users',
    { params: { page: currentPage, count: 6 } }
  );
  return response.data;
};

class UsersPage extends Component {
  state = {
    usersList: [],
    currentPage: 1,
    totalPages: null,
    showMoreVisible: true,
    isLoading: false,
  };

  fetchUsers = async () => {
    const { currentPage } = this.state;
    this.setState(prevState => ({ isLoading: !prevState.isLoading }));
    const result = await getUsers(currentPage);
    this.setState(prevState => ({
      usersList: [
        ...prevState.usersList,
        ...result.users.sort(
          (a, b) => b.registration_timestamp - a.registration_timestamp
        ),
      ],
      currentPage: prevState.currentPage + 1,
      totalPages: result.total_pages,
      isLoading: !prevState.isLoading,
    }));
  };

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { title } = this.props;
    const { usersList } = this.state;

    return (
      <>
        {this.state.isLoading ? (
          <h2>LOADING...</h2>
        ) : (
          <>
            <h1>{title}</h1>
            <ul>
              {usersList.length > 0 &&
                usersList.map(user => {
                  return (
                    <li key={user.id}>
                      <UserItem user={user} />
                    </li>
                  );
                })}
            </ul>
          </>
        )}
        {this.state.currentPage <= this.state.totalPages && (
          <Button
            options={{
              type: 'button',
              label: 'show more',
              onClick: this.fetchUsers,
            }}
          />
        )}
      </>
    );
  }
}

export default UsersPage;
