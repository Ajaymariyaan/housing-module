import React from "react";
import './Profile.css'

function ProfileUpperPart(){
    return(<>
    <div className="upperImageMain" > 
        <div className="upperImage">
            <img src="/Icon/fullscreen.png" alt="fullscreen"/>

        </div>
        <div className="upperImage" >
             <img src="/Icon/notification.png" alt="notification"/>
        </div>
        <div className="upperImage">
             <img src="/Icon/fullscreen.png" alt="avatar"/>
        </div>
    </div>
    </>)

}
export default ProfileUpperPart;