
import React from 'react';
import './SideBar.css';
import Search1 from '../Search/Search1';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarList">


      {/* <h2>antz systems</h2>
      <ul>
        <li>Dashboard</li>
        <li>Sites</li>
        <li>Clusters</li>
        <li>Sections</li>
        <li>Enclosures</li>
      </ul> */}
      {/* <div ><p className="AntzSystem">antz systems</p> </div> */}
      <div className="logoAntzFont">
        <img style={{width:'40px',height:'40px'}} src="/Icon/AntzLogo.svg" alt="logo" />
        <img style={{width:'80px',height:'36px'}} src="/Icon/antzSystem.png" alt=" antzSystem" />
        <img style={{width:'22px',height:'22px',paddingLeft:'90px'}} src="/Icon/menuArrow.svg" alt="arrow" />
      </div>
      <div><Search1/></div>
    
      <div className="list">HOUSING</div>
      <div><ul>
        <li>DASHBOARD</li>
        <li>SITES</li>
        <li>CLUSTERS</li>
        <li>SECTION</li>
        <li>ENCLOSURES</li>
      </ul> </div>
      
      </div>
      





    </div>
  );
};

export default SideBar;
