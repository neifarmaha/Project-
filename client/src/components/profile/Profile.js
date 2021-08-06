import React from "react";
import { NavDropdown } from "react-bootstrap";
import Mouse from "../mouse/Mouse";
// import { Link } from "react-router-dom";
import SearchJob from "../searchjob/SearchJob";
import "./profile.css";

const Profile = () => {
  return (
    <div>
      <Mouse/>
      <div>
        <SearchJob />
        <div className="roww">
          <div className="icon2">
            <svg>
              <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 19a8.91 8.91 0 01-5.33-1.75 6 6 0 0110.66 0A8.91 8.91 0 0112 21zm6.11-2.4a7 7 0 00-12.22 0 9 9 0 1112.22 0zM12 6a4 4 0 104 4 4 4 0 00-4-4zm0 7a3 3 0 113-3 3 3 0 01-3 3z"></path>
            </svg>
          </div>
          <div>
            <svg>
              <path d="M17.61 6H6.39a1 1 0 00-.94.65L3 11h3.28a1 1 0 011 .68v.06l.15.45.57 1.72a.13.13 0 00.12.09h7.82a.13.13 0 00.12-.09l.74-2.23a1 1 0 01.95-.68H21l-2.45-4.35a1 1 0 00-.94-.65zM3 17a1 1 0 001 1h16a1 1 0 001-1v-5h-3.21a.1.1 0 00-.09.07l-.7 2.25a1 1 0 01-1 .68H8a1 1 0 01-1-.69l-.7-2.24a.1.1 0 00-.09-.07H3zm19 0a2 2 0 01-2 2H4a2 2 0 01-2-2v-6l2.51-4.7A2 2 0 016.39 5h11.22a2 2 0 011.88 1.3L22 11z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="optionnav">
        <div className="jobbtn">
          <a className ="dropbtn" href="">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M16 4H8a1 1 0 00-1 1v1h10V5a1 1 0 00-1-1zm-1.5 10a.5.5 0 01.09 1H9.5a.5.5 0 010-1zM20 7H4a1 1 0 00-1 1v6a1 1 0 001 1h3.28l.5 2h8.44l.5-2H20a1 1 0 001-1V8a1 1 0 00-1-1zM6.5 16H4v3a1 1 0 001 1h14a1 1 0 001-1v-3h-2.5l-.5 2H7zM16 3a2 2 0 012 2v1h2a2 2 0 012 2v6a2 2 0 01-1 1.73V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-3.27A2 2 0 012 14V8a2 2 0 012-2h2V5a2 2 0 012-2z"></path>
            </svg>

            <b>Jobs</b>
          </a>

          <div id="hoverable-div">
            <ul className="list">
              <li>
                <a href=" ">Job Alerts</a>
              </li>
              <li>
                <a href=" ">Saved</a>
              </li>
              <li>
                <a href=" ">Applications</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="jobbtn">
          <a  className ="dropbtn" href=" ">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M17 10a1 1 0 11-1 1 1 1 0 011-1m-4.5 0a1 1 0 11-1 1 1 1 0 011-1M8 10a1 1 0 11-1 1 1 1 0 011-1m4.5-6C7.78 4 4 7 4 10.66s3.78 6.65 8.5 6.65a.47.47 0 01.39.2l.38.4a8.08 8.08 0 003 1.84A7.26 7.26 0 0116 17a.53.53 0 01.31-.4c2.88-1.14 4.69-3.43 4.69-5.94C21 7 17.22 4 12.5 4m0-1c5.23 0 9.5 3.4 9.5 7.66 0 2.87-2 5.43-5 6.75a6.7 6.7 0 00.47 2.9.5.5 0 01-.57.68 9.12 9.12 0 01-3-1.31 8.91 8.91 0 01-1.3-1.06 4.16 4.16 0 01-.3-.31h-.36a.44.44 0 01-.16.14 7.19 7.19 0 01-3.27 1 4.87 4.87 0 01-.92.78A5.48 5.48 0 015.7 21a.5.5 0 01-.58-.66 3.32 3.32 0 00.1-1.43C3.27 18.15 2 16.65 2 14.94a3.76 3.76 0 011.2-2.69 6.54 6.54 0 01-.2-1.59C3 6.4 7.27 3 12.5 3M3 14.94c0 1.31 1.09 2.53 2.81 3.12a.49.49 0 01.33.35 4.65 4.65 0 01.1 1.36 5.08 5.08 0 00.76-.42 3.91 3.91 0 00.81-.71.47.47 0 01.41-.23 7.34 7.34 0 001.58-.23h-.11a8.74 8.74 0 01-6.22-4.67A2.56 2.56 0 003 14.94"></path>
            </svg>

            <b>Interviews</b>
          </a>
          <div id="hoverable-div">
            <ul className="list">
              <li>
                <a href=" ">Discover Interviews</a>
              </li>
              <li>
                <a href=" ">Add an Interview</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="contacte">
        <div className="h">
          <h1 className="start"> How Would You like to Get Started? </h1>
          <p> to finish your profile. </p>
        </div>
        <div>
          <div>
            <button
              className="cv"
              data-test="resume"
              onClick={() => {
                window.location.href = "/profile1";
              }}
            >
              Upload Your CV
            </button>
          </div>
          <div>
            <button className="cvm">Fill in Manually</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
