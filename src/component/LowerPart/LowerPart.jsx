// components/MainPage/Header/LowerPart/LowerPart.jsx
import React from 'react';
import './LowerPart.css';

const LowerPart = () => {
  return (
    <div className="lower-part">
      <div className="background-box">
        <img src="/Icon/backgroundEle.jpg" alt="Background" className="bg-image" />
        
          {/* <div className="OnBanner"> */}
          <div style={{width:'100%', position:'absolute',top:'2px',paddingLeft:'30px',paddingTop:'20px'}} className="profileBanner">
            <div className="AllSiteAndImg">
            <p className="para">All Site Insights</p>
            </div>
            <div style={{ display:'flex',flexDirection:'row', alignItems:'center',justifyContent:'start', gap:'20px',paddingTop:'10px'}} className="ProfileNameImg">
              <div>
              <img src="/Icon/avatar.png" alt=" avatar"/>
              </div>
              <div><p className="textName">Jordan Stevebson</p>
              <p className="textName">Super Admin</p>
              </div>
             <div><img src="/Icon/callEmpty.svg" alt="callIcon" /></div>
              <div><img src="/Icon/chat.svg" alt="" /></div>
              </div>
              
            </div>
      
         <div className="info-cards">
          <div className="card"> <div><img className="BannerIcon" src="/Icon/rabbitIcon.svg" alt="rabbit Icon " /> </div> <div className="hP"><p>24</p><p>Species</p> </div></div>
          <div className="card"> <div><img className="BannerIcon" src="/Icon/animalfoot.svg" alt="animalfoot Icon " /> </div> <div className="hP"><p>234.9k</p><p>Animals</p> </div></div>
          <div className="card"> <div><img className="BannerIcon" src="/Icon/location.png" alt="Location Icon " /> </div> <div className="hP"><p>44</p><p>Sites</p> </div></div>
          <div className="card"> <div><img className="BannerIcon" src="/Icon/enclosure.svg" alt="enclosure Icon " /> </div> <div className="hP"><p>359</p><p>Enclosures</p> </div></div>
        </div>
        {/* </div> */}
        </div>
      </div>
    
  );
};

export default LowerPart;
