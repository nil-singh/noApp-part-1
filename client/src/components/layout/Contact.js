import React, { Fragment,useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import nil from './nil.jpg'
import div from './div.jpg.jpg'
import sam from './sam.jpg.jpg'
const initialState = {
    name:'',
    email:'',
    mobileNo:'',
    Subject:''
}
const Landing = ({ isAuthenticated }) => {
  // if (isAuthenticated) {
  //   return <Redirect to='/dashboard' />;
//   // }
//   const [formData, setFormData] = useState(initialState);
//   const onChange = (e) =>
//   setFormData({ ...formData, [e.target.name]: e.target.value });

// const onSubmit = (e) => {
//   e.preventDefault();
//   createProfile(formData, history, profile ? true : false);
// };
  return (
    <Fragment>
    
<h3 style={{textAlign: "center"}}> <b>  Drop your query here </b> 
  </h3>
 <h4  style={{textAlign: "center"}}> Or Call Us at  <a href="tel:8809-7777-98">8809-7777-98 </a></h4>
<br/>
<div class="container contact">
<form  >
    <label for="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Your name.."/> 
    <label for="email">Email Id</label>
    <input type="text" name="email" id="email" placeholder="Email id"/> <br/>

    <label for="phone"><b>Mobile No</b></label>
  <input type="text" id="phone" name="phone" placeholder="Mobile No" pattern="[0-9]{10}" required/> <br/>

      

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.."  style={{height:"200px"}}></textarea>

    <input type="submit" value="Submit"  style={{float:"left"}} ></input>
    <br/>
</form>
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
