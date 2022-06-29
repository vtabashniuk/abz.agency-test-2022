import { Route } from 'react-router-dom';
import Header from './Header';
import HomePage from '../pages/HomePage.jsx';
import * as textAssets from '../assets/textVariables.js';
import UsersPage from 'pages/UsersPage';
import AddUserFormPage from 'pages/AddUserFormPage';
import '../styles/header.scss';

export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     textTransform: 'uppercase',
    //     color: '#010101',
    //   }}
    // >
    //   React homework template
    // </div>
    <>
      <Header />
      <Route path="/" exact>
        <HomePage
          title={textAssets.homePageTitle}
          mainText={textAssets.homePageText}
        />
      </Route>
      <Route path="/users">
        <UsersPage title={textAssets.usersPageTitle} />
      </Route>
      <Route path="/sign up">
        <AddUserFormPage title={textAssets.addUserFormPageTitle} />
      </Route>
    </>
  );
};
