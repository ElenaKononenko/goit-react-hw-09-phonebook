import React, { Component, lazy, Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Container from './components/Container/Container';
import authOps from './redux/auth/auth-operations';
import AppBar from './components/AppBar/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { Spinner } from 'react-bootstrap';
import './index.css';

const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const ContactsView = lazy(() => import('./views/ContactsView/ContactsView'));
const LoginView = lazy(() => import('./views/LoginView/LoginView'));
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'));

class App extends Component {
  componentDidMount() {
    this.props.onCurrentUser();
  }
  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<Spinner animation="border" variant="info" />}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              restricted
              component={RegisterView}
              redirectTo="/contacts"
            />
            <PublicRoute
              path="/login"
              restricted
              component={LoginView}
              redirectTo="/contacts"
            />
            <PrivateRoute
              path="/contacts"
              component={ContactsView}
              redirectTo="/login"
            />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = { onCurrentUser: authOps.getCurrentUser };

export default connect(null, mapDispatchToProps)(App);
