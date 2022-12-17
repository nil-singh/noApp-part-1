import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import nil from './nil.jpg'
import div from './div.jpg.jpg'
import sam from './sam.jpg.jpg'

const Landing = ({ isAuthenticated }) => {
  // if (isAuthenticated) {
  //   return <Redirect to='/dashboard' />;
  // }

  return (
    <Fragment>
   
<div className="about-section">
  <h1>Our Vision</h1>
  <p>Our Vision is to help COVID-19 Patients connect with plasma donars it would work as Link bridge between them.</p>
  <p>The purpose of this website is to fill the deficit of life-saving plasma required for thousand of critically ill patients</p>
</div>

<h2 style={{textAlign:"center"}}>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      {/* <img src="nil" alt="Nilesh" style={{width:"100%"}}/> */}
      <img src={nil} style={{width:"100%" ,height: "369px"}}></img>
      <div className="container about">
        <h2> Nilesh</h2>
        <p className="title">Web-Developer </p>
        <p>A small contribution from my side to this pandemic <br/> world, hope  my this effort will be helpful for the society.</p>
        <p>Currently pursing B-tech in Computer Science <br/>  & Engineering from <i><b>Bhagalpur College of <br/>Engineering, Bhagalpur.</b> </i></p>
        <h5>Get Connect on Socail Media</h5>
        <button className="btn btn-primary"><Link to="www.facebook.com/nilkom.in" target="_blank"><span style={{color:"white"}}>Facebook</span></Link></button>
        <button className="btn btn-danger"> <Link to="www.Instagram.com/nilsingh_" target="_blank"><span style={{color:"white"}}>Instagram</span></Link></button>

        
      </div>
    </div>
  </div>

  
  
  <div className="column">
    <div className="card">
      {/* <img src="/w3images/team3.jpg" alt="Sammy" style={{width:"100%"}}/> */}
      <img src={sam} style={{width:"100%"}}></img>
      <div className="container about">
        <h2>Sammy</h2>
        <p className="title">MBBS-Student</p>
        <p>Anybody can save life, just a small step to bring the <br/>life back to vitality Hope! Hope! and Be Positive</p>
        <p>Currently pursuing MBBS from <i><b> Moti lal Nehru Medical </b><br/></i> College and Hospital, Prayagraj</p>
        <h5>Get Connect on Socail Media</h5>
        <br/>
        <button className="btn btn-primary" ><Link to="!="><span style={{color:"white"}}>Instagram</span></Link></button>
        <button className="btn btn-danger"> <Link to="!="><span style={{color:"white"}}>Instagram</span></Link></button>

    
      </div>
    </div>
  </div>
</div>

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
