import { Route } from 'react-router-dom';
import * as textAssets from '../assets/textVariables.js';
import routes from '../routes/routes.js';
import Header from '../layouts/Header';
import HomePage from '../pages/HomePage.jsx';
import UsersPage from '../pages/UsersPage';
import SignUpPage from '../pages/SignUpPage';
import '../styles/main.scss';

export const App = () => {
  return (
    <>
      <Header />
      <Route path={routes.home} exact>
        <HomePage
          title={textAssets.homePageTitle}
          mainText={textAssets.homePageText}
        />
      </Route>
      <Route path={routes.users}>
        <UsersPage title={textAssets.usersPageTitle} />
      </Route>
      <Route path={routes.sign_up}>
        <SignUpPage title={textAssets.signUpPageTitle} />
      </Route>
    </>
  );
};
