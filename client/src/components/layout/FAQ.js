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
    
	  <section id="header" className="jumbotron text-center">
          <h3 className="display-3"><b>Frequently Asked Question</b></h3>
      </section>

  
<div className="container">
 <div className="row">
     <div className="col-lg-4">
<div className="card" style={{width: "18rem"}}>

<div className="card-body">
    <h5 className="card-title"> <b> How your Plasma helps </b></h5>
    <p className="card-text"> When you recover from COVID-19, you develop antibodies against the virus, which are present in your plasma. This is known as convalescent plasma. By pooling together convalescent plasma from many recovered donors and concentrating these antibodies into a potential therapy, we may be able to help people at risk for serious complications from COVID-19 better fight the disease.
    </p>

</div>
 
 </div> 
</div>
{/* ================= */}
<div className="col-lg-4">
<div className="card" style={{width: "18rem"}}>

<div className="card-body">
    <h5 className="card-title"> <b> What is Convalescent Plasma? </b> </h5>
    <p className="card-text"> Convalescent plasma is the liquid part of blood that is collected from patients who have recovered from the novel coronavirus disease, COVID-19, caused by the virus SARS-CoV-2. COVID-19 patients develop antibodies in the blood against the virus. Antibodies are proteins that might help fight the infection. Convalescent plasma is being investigated for the treatment of COVID-19 because there is no approved treatment for this disease and there is some information that suggests it might help some patients recover from COVID-19.
    </p>
</div>
 </div> 
</div>
{/* ============== */}
<div className="col-lg-4">
<div className="card"  style={{width: "18rem"}}>

<div className="card-body">
    <h5 className="card-title"> <b>I Have Fully Recovered From COVID-19. Am I Eligible to Donate Plasma? </b> </h5>
    <p className="card-text"> People who have fully recovered from COVID-19 for at least two weeks are encouraged to consider donating plasma, which may help save the lives of other patients. COVID-19 convalescent plasma must only be collected from recovered individuals if they are eligible to donate blood. Individuals must had a prior diagnosis of COVID-19 documented by a laboratory test and meet other donor criteria. Individuals must have complete resolution of symptoms for at least 28 days prior to donation. A negative lab test for active COVID-19 disease is not necessary to qualify for donation.
    </p>
    

</div>
 
 </div> 
</div>
{/* ================ */}
<div className="col-lg-4">
<div className="card" style={{width: "18rem"}}>

<div className="card-body">
    <h5 className="card-title"> <b>I Haven’t Had COVID-19. What Can I Do to Help?</b> </h5>
    <p className="card-text"> You can consider donating blood! One blood donation can save up to three lives. The COVID-19 pandemic has caused unprecedented challenges to the Country blood supply. Donor centers have experienced a dramatic reduction in donations due to the implementation of social distancing and the cancellation of blood drives. Blood is needed every day to provide lifesaving treatments to a variety of patients. You can help ensure that blood continues to be available for patients by finding a blood donor center near you to schedule your donation.
    </p>
    
</div>
 
 </div> 
</div>

<div className="col-lg-4">
<div className="card" style={{width: "18rem"}}>

<div className="card-body">
    <h5 className="card-title"> <b> What data do the DONAR need to provide for credential verification </b> </h5>
    <p className="card-text"> The website contains the personal details of the patients. Recently, India banned dozens of apps which were harnessing personal information of users for their gains. When asked how the website would ensure the safety of the users’ data, we will only demand the minimum required credentials of a user. Simply the names, blood group, contact number and city of residence to build a profile required from users. The website will demand no sensitive information of a user. It is the intermediary between the patient and the donor. 
    </p>
</div>
 
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
