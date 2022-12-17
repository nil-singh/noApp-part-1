import React, { Fragment, useEffect ,useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
   const [profileSearch,setProfileSearch] = useState("");
  let  upDatedProfiles = profiles;
   const handleProfileSearch = (e) =>{
         setProfileSearch(e.target.value);
        //  console.log(profileSearch);
   }
//   let upDatedProfiles = profiles.filter((profile)=>{
//     if(profile.district.includes(profileSearch)){
//         return profile;
//     }
// })
var newProfile = [];
if(profiles != undefined) profiles.map(profile =>{
  if( profile.district.startsWith(profileSearch)  || profile.pinCode.startsWith(profileSearch)){
  // console.log(profile.user);
  newProfile =[...newProfile,profile];
  console.log(newProfile);
}
})
const initialState = {
  bloodGroup:'',
};
const [formData, setFormData] = useState(initialState);
const {
  bloodGroup,
  
} = formData;

console.log(bloodGroup);
let finalProfile = newProfile;
if(bloodGroup != ""){
finalProfile =[];
 newProfile.map(profile =>{
   console.log(profile.bloodGroup)
  if( profile.bloodGroup == bloodGroup){
  // console.log(profile.user);
  finalProfile =[...finalProfile,profile];
  // console.log(newProfile);
}
})
} 
const onChange = (e) =>
  setFormData({ ...formData, [e.target.name]: e.target.value });
  


  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <b>Search By District or By PinCode</b>
          <input type="text" value={profileSearch} onChange={ handleProfileSearch} style={{margin:"7px",padding:"5px"}}></input>
         
          {/* <div className="form-group"> */}
           
          <span style={{whiteSpace: "nowrap"}}><b>Choose BloodGroup</b></span> &nbsp;  &nbsp; &nbsp;
          <select name="bloodGroup" value={bloodGroup} onChange={onChange}>
            <option value="">* Select Blood Group</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
           
        {/* </div> */}
          <h1 className='large text-primary'>Donar</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop' /> Browse and connect with
            Donars
          </p>
          <div className='profiles'>
            {finalProfile.length > 0 ? (
              finalProfile.map(profile => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No Donar found based on your search...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
