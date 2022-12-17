import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  // if (isAuthenticated) {
  //   return <Redirect to='/dashboard' />;
  // }

  return (
    <Fragment>
    
     
    <div id="jumbotron">
    	
      <h3>SignUp to Upload </h3>

      <br/>

      <button className="btn btn-success"   onclick="openForm()"><Link to ="/register"><i class="fa fa-user-plus" ></i> Register</Link></button>
      <br/>
      <br/>

      <li> <Link to="/login">Sign In <i class="fa fa-user"></i> </Link>  </li>
     

    </div>
    {/* <footer style={{ textAlign: "center",
  //  position: "fixed",
   left: "0",
   bottom: "0",
   width: "100%",
  padding: "3px",
  marginTop:"20px",
  backgroundColor: "#8FBC8F",
  color: "white"}}>
     
  <p>Degined And Devloped By :<br/>
  	&copy;
  <a to="www.facebook.com/careerniketan"> Career Niketan</a></p>
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
