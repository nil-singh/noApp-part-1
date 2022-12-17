import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
//   if (isAuthenticated) {
//     return <Redirect to='/dashboard' />;
//   }

  return (
    <Fragment>
     
   {/* <footer style={{ textAlign: "center",
  padding: "3px",
  backgroundColor: "#8FBC8F",
  color: "white"}}>
  <p>Degined And Devloped By :<br/>
  	&copy;
  <a href="www.facebook.com/careerniketan"> Career Niketan</a></p>
    </footer> */}

</Fragment>
  
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
