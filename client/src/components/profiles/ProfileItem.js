import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    c_name,
    phoneNum,
    c_email,
    url,
  }
}) => {
  return (
    <div className='profile bg-light' style={{
      margin: "10px 30px",
      padding: "10px 30px",
      background: "#eee",
      borderRadius: "20px", float: "left"
    }}>
      <img src={avatar} alt='' className='round-img' />
      <div>
        {/* <h2>{name}</h2> */}
        <p>
          Blood Group {c_name}
        </p>


      </div>
      <p> {phoneNum}</p>
      <p> {c_email}</p>
      <p><h4>Mob:-{url}</h4></p>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
