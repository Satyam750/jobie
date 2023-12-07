import React from "react";
import "./profile.css";
import eye from "../../assets/eye 1.png"
import chat from "../../assets/ic_chat.png"
import bg from "../../assets/suitcase 1.png"
import replay from "../../assets/reply 1.png"
import cal from "../../assets/calendar.png"
import phone from "../../assets/telephone 1.png"

const ProfileV = () => {
  return (
    <div className="ProfileV">

      <div className="pv-top-line">
      <div className="pv-top-first">
        <div className="pv-1">
          <h3 className="pv-h3">Profile Viewed</h3>
          <h1 className="pv-h1">456K</h1>
        </div>
        <div className="pv-2">
          <img className="pv-img-1" src={eye} alt="" />
          <div className="pv-icon">
          <span>+24%</span>
          <p>than last month</p>
          </div> 
        </div>
      </div>

      <div className="pv-top-mid">
        <div className="pv-1-1">
          <h3>unread Messages</h3>
          <h1>28</h1>
        </div>
        <div className="pv-1-2">
          <img className="pv-img-2" src={chat} alt="" />
          <span>Go to Message</span>
        </div>
      </div>

      <div className="pv-top-low">
        <div className="pv-2-1">
          <h3>Application</h3>
          <h1>651</h1>
        </div>
        <img src={bg} alt="" />
      </div>
      </div>
        
        <div className="pv-last">  
      <div className="pv-last-1">
        <div className="pv-tag-1">
          <h3>App. Answered</h3>
          <h1>24</h1>
        </div>
        <img src={replay} alt="" />
      </div>

      <div className="pv-last-2">
        <div className="pv-last-2-1">
          <h3>Interviewed</h3>
          <h1>261</h1>
        </div>
        <img src={cal} alt="" />
      </div>

      <div className="pv-last-3">
        <div className="pv-last-3-1">
          <h3>Hire</h3>
          <h1>69</h1>
        </div>
        <img src={phone} alt="" />
      </div>

        </div>
     
    </div>
  );
};

export default ProfileV;
