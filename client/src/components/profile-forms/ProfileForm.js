import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const initialState = {
  c_name: '',
  phoneNum: '',
  c_email: '',
  url: ''

};

const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState(initialState);

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    c_name,
    phoneNum,
    c_email,
    url

  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, profile ? true : false);
  };

  return (
    <Fragment style={{ textAlign: "center" }}>
      <h1 className="large text-primary" style={{ textAlign: "center" }}>Upload / Edit</h1>
      <p className="lead">
        <i className="fas fa-user" style={{ textAlign: "center" }} /> Add some changes
      </p>
      <small >* = required field</small>
      <div class="container contact">
        <form className="form" onSubmit={onSubmit}>

          <div className="form-group">
            <input
              type="text"
              placeholder="Contact Name"
              name="c_name"
              value={c_name}
              onChange={onChange}
            />
            {/* <small className="form-text">Date when you got recovered from <b>COVID-19 </b>19-07-2020</small> */}
          </div>


          <div className="form-group">
            <input
              type="text"
              placeholder="phone Number"
              name="phoneNum"
              value={phoneNum}
              onChange={onChange}
            />
            {/* <small className="form-text">Date when you got recovered from <b>COVID-19 </b>19-07-2020</small> */}
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email Id"
              name="c_email"
              value={c_email}
              onChange={onChange}
            />
            {/* <small className="form-text">Date when you got recovered from <b>COVID-19 </b>19-07-2020</small> */}
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Linkeldn Url"
              name="url"
              value={url}
              onChange={onChange}
            />
            {/* <small className="form-text">Date when you got recovered from <b>COVID-19 </b>19-07-2020</small> */}
          </div>


          <input type="submit" className="btn btn-primary my-1" />
          <Link className="btn btn-light my-1" to="/dashboard">
            Go Back
          </Link>
        </form>
      </div>
    </Fragment>
  );
};

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(ProfileForm)
);
