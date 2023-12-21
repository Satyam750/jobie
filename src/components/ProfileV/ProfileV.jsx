import React from "react";
import "./profile.css";
import eye from "../../assets/eye 1.png"
import chat from "../../assets/ic_chat.png"
import bg from "../../assets/suitcase 1.png"
import replay from "../../assets/reply 1.png"
import cal from "../../assets/calendar.png"
import phone from "../../assets/telephone 1.png"

import { FaEye } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";
import { FaSuitcase } from "react-icons/fa";
import { IoArrowUndo } from "react-icons/io5";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { PiCarFill } from "react-icons/pi";
import { FaGooglePlay } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

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
          <FaEye className="pv-img-1"/>
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
        <IoLogoWechat className="pv-img-2"/>
          <span>Go to Message</span>
        </div>
      </div>

      <div className="pv-top-low">
        <div className="pv-2-1">
          <h3>Application</h3>
          <h1>651</h1>
        </div>
        <FaSuitcase className="pv-top-low-img"/>
      </div>
      
      
      </div>
        
        <div className="pv-last">  
      <div className="pv-last-1">
        <div className="pv-tag-1">
          <h3>App. Answered</h3>
          <h1>24</h1>
        </div>
       <IoArrowUndo className="pv-last-1-img"/>
      </div>

      <div className="pv-last-2">
        <div className="pv-last-2-1">
          <h3>Interviewed</h3>
          <h1>261</h1>
        </div>
        <BsCalendarDateFill className="pv-last-2-img"/>
      </div>

      <div className="pv-last-3">
        <div className="pv-last-3-1">
          <h3>Hire</h3>
          <h1>69</h1>
        </div>
        <FaPhone className="pv-last-3-img"/>
      </div>

        </div>

        <div className="pv-last">  
      <div className="pv-last-1 cars">
        <div className="pv-tag-1">
          <h3>Cars as Need</h3>
          <h1>240</h1>
        </div>
        <PiCarFill className="car" />
      </div>

      <div className="pv-last-2 googleplay">
        <div className="pv-last-2-1">
          <h3>Download on Play</h3>
          <h1>876K</h1>
        </div>
       <FaGooglePlay className="google"/>
      </div>

      <div className="pv-last-3 XT">
        <div className="pv-last-3-1">
          <h3>Followers on X</h3>
          <h1>79k</h1>
        </div>
        <BsTwitterX className="X" />
      </div>

        </div>
     
    </div>
  );
};

export default ProfileV;
