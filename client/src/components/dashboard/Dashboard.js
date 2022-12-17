import React, { Fragment, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';

import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const initialState = {
  c_name: '',
  phoneNum: '',
  c_email: '',
  url: '',

};
const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }

    }
  }, [loading, getCurrentProfile, profile]);

  return (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.c_email}
      </p>

      {profile !== null ? (
        <Fragment>
          Name:- {profile.c_name} <br />
          Phone Number:- {profile.phoneNum} <br />
          Email Id:- {profile.c_email} <br />
          Linkeldn URL:- {profile.url} 
      
          <DashboardActions />


          <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
              {/* <i className="fas fa-user-minus" /> Delete My Account */}
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>Please Upload Your Contact Details</p>
          <Link to="/create-profile" className="btn btn-primary my-3">
            Upload Now
          </Link>

          
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
