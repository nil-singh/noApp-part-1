import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
  

<nav class="navbar navbar-default">
<div class="container">
  <div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navabar" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
       </button>
    <Link to="/" class="navbar-brand"  >noApp Please  </Link>
  </div>
</div>
  
  <div class="collapse navbar-collapse" id="bs-navabar">



<ul class="nav navbar-nav navbar-right">
<li> <Link to="/dashboard">My Account<i class="fa fa-user"></i> </Link>  </li>
  <li><Link onClick={logout} to='#!'>
           
          <span className='hide-sm'>Logout</span>
        </Link>
  </li>
 </ul>
  </div>
{/* </div>  */}
</nav>
  );

  const guestLinks = (
    
    <nav class="navbar navbar-default">
     <div class="container">
     	<div class="navbar-header">
     		<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navabar" aria-expanded="false">
               <span class="sr-only">Toggle navigation</span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
            </button>
     		<Link to="/" class="navbar-brand"  >noApp </Link>
     	</div>
     </div>
       
       <div class="collapse navbar-collapse" id="bs-navabar">

   

    <ul class="nav navbar-nav navbar-right">
    	<li> <Link to="/register"> Sign Up <i class="fa fa-user-plus"></i></Link>  </li>
    	<li> <Link to="/login">Sign In <i class="fa fa-user"></i> </Link>  </li>
    	
    	</ul>
     	</div>
     {/* </div>  */}
    </nav> 
    
  );

  return (
    <Fragment>
    <nav className='navbar bg-dark' >
      
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}
        
   
        </Fragment>
      )}
     
    </nav>
    
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
