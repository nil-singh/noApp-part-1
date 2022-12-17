import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Profiles from '../profiles/Profiles';
import PrivateRoute from '../routing/PrivateRoute';
import ProfileForm from '../profile-forms/ProfileForm';

import Dashboard from '../dashboard/Dashboard';
import Landing from '../layout/Landing'
import About from '../layout/About'
import FAQ from '../layout/FAQ'
import Contact from '../layout/Contact'
const Routes = props => {
  return (
    <section className="container">
      <Alert />
      <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/faq" component={FAQ} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={ProfileForm} />
        <PrivateRoute exact path="/edit-profile" component={ProfileForm} />
       
        {/* <Route component={NotFound} /> */}
      </Switch>
    </section>
  );
};

export default Routes;
