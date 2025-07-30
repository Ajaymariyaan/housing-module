// import React from "react";
// import './MainPage.css'
// // import MainHeader from "../MainHeader/MainHeader";
// import Header from "../Header/Header";

// function MainPage(){
// return(
//     <>
//     <div><Header/></div>
    
//     {/* <div className="MainPage">
//         <div className="ModuleList"></div>
//         <div className="MainDashboard" >
          
//             <div><Header/></div>
//             <div></div>
//         </div>
        
//     </div> */}


//     </>
// )

// }

// export default MainPage;





// components/MainPage/MainPage.jsx
import React from 'react';
// import Header from './Header/Header';
// import Table from './Table/Table';
import './MainPage.css';
// import Header from '../Header/Header';
// import Header from '../Header/Header';
// import Table from '../../component/Table1/Tablee';
import Header from '../Header/Header';
import Table from '../../component/Table1/Table';






const MainPage = () => {
  return (
    <>
    <div style={{backgroundColor:'#EFF5F2'}} className="main-content">
      <Header />
      <Table />
    </div>
    </>
  );
};

export default MainPage;
