
import React from 'react';
// import SideBar from '../SideBar/SideBar';
// import MainPage from '../../pages/MainPage/MainPage';
// import SideBar from './components/SideBar/SideBar';


import SideBar from '../SideBar/SideBar';
// import MainPage from './components/MainPage/MainPage';
import MainPage from '../../pages/MainPage/MainPage';
import './ProjectMain.css';

const ProjectMain = () => {
  return (
    <>
      <div className="app-container">
        {/* <p>dwuixbywibcyi</p> */}
        <div className="SideBarDesign"> <SideBar /></div>
        <div className="MainPageDegisn"><MainPage /> </div>
      </div>
    </>
  );
};

export default ProjectMain;
