// components/MainPage/Header/UpperPart/UpperPart.jsx
import React from 'react';
// import ProfileImage from './ProfileImage';
// import HousingPara from './HousingPara';
import ProfileImage from '../ProfileImage/ProfileImage';
import './UpperPart.css';
// import ProfilePic from '../ProfilePic/ProfilePic';
// import HousingPara from '../HousingPara/HousingPara';

const UpperPart = () => {
  return (
    // <div className="upper-part">
    //   <HousingPara />
    //   <ProfileImage />
    // </div>

    <>
    <div className="upperMain">

      <div className="upperImageMain">
        <div className="upperImage">
            <img   src="/Icon/fullscreen.svg" alt="fullscreen"/>

        </div>
        <div className="upperImage" >
             <img   src="/Icon/notification.svg" alt="notification"/>
        </div>
        <div className="upperImage">
          {/* <ProfilePic/> */}
             <img   className="img1" src="/Icon/avatar.png" alt="avatar"/>
        </div>
      </div>

      <div>
        <p className="hous-site"> Housing / Sites</p>


      </div>








    </div>


    </>
  );
};

export default UpperPart;
