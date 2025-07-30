// import React from "react";
// import ProfileUpperPart from "../../view/ProfileUpperPart/Profile";

// function Header(){
//     return(<>
//     <div>
//         <div className="upperPart">
//             <div className="profileIcon">
//                 <ProfileUpperPart/>

//             </div>
//             <div className="housingAndSites">
//                 <div>Housing</div>
//                 <div>/</div>
//                 <div>Sites</div>

//             </div>
//         </div>



//         <div className="lowerPart"></div>
//     </div>
//     </>

//     )
// }
// export default Header;



// components/MainPage/Header/Header.jsx
import React from 'react';
// import UpperPart from './UpperPart/UpperPart';
// import LowerPart from './LowerPart/LowerPart'
import './Header.css';
import LowerPart from '../../component/LowerPart/LowerPart';
import UpperPart from '../../component/UpperPart/UpperPart';

const Header = () => {
  return (
    <div style={{paddingLeft:'20px'}} className="header">
      <UpperPart />
      <LowerPart />
    </div>
  );
};

export default Header;
