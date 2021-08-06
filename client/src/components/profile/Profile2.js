import React from "react";
import "./profile.css";
import SearchJob from "../searchjob/SearchJob";
import Mouse from "../mouse/Mouse";

const Profile2 = () => {
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
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M16 4H8a1 1 0 00-1 1v1h10V5a1 1 0 00-1-1zm-1.5 10a.5.5 0 01.09 1H9.5a.5.5 0 010-1zM20 7H4a1 1 0 00-1 1v6a1 1 0 001 1h3.28l.5 2h8.44l.5-2H20a1 1 0 001-1V8a1 1 0 00-1-1zM6.5 16H4v3a1 1 0 001 1h14a1 1 0 001-1v-3h-2.5l-.5 2H7zM16 3a2 2 0 012 2v1h2a2 2 0 012 2v6a2 2 0 01-1 1.73V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-3.27A2 2 0 012 14V8a2 2 0 012-2h2V5a2 2 0 012-2z"></path>
              </svg>
            </span>
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
          <a className ="dropbtn" href=" ">
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

      <div className="cardprofile">
        <div>
          <div>
            <span>
              <svg width="48" height="48" viewBox="0 0 48 48">
                <g fill="#C4C7CC" transform="translate(3.5 3.21)">
                  <path d="M20.5 40.79c-11.046 0-20-8.954-20-20 0-11.045 8.954-20 20-20s20 8.955 20 20c0 11.046-8.954 20-20 20z"></path>
                </g>
                <path
                  fill="#FFF"
                  d="M36.71 38.123A18.93 18.93 0 0124 43a18.93 18.93 0 01-12.71-4.877C13.51 33.327 18.367 30 24 30c5.633 0 10.489 3.327 12.71 8.123zM24 28a8 8 0 110-16 8 8 0 010 16z"
                ></path>
              </svg>
            </span>
          </div>
          <h3>{   }</h3>
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M5 3h10V2a1 1 0 00-1-1H6a1 1 0 00-1 1v1zm11 0h2a2 2 0 012 2v6a2 2 0 01-1 1.732V16a2 2 0 01-2 2H3a2 2 0 01-2-2v-3.268A2 2 0 010 11V5a2 2 0 012-2h2V2a2 2 0 012-2h8a2 2 0 012 2v1zM2 13v3a1 1 0 001 1h14a1 1 0 001-1v-3h-2.5l-.5 2H5l-.5-2H2zm3.78 1h8.44l.5-2H18a1 1 0 001-1V5a1 1 0 00-1-1H2a1 1 0 00-1 1v6a1 1 0 001 1h3.28l.5 2zm1.72-3h5a.5.5 0 110 1h-5a.5.5 0 110-1z"></path>
            </svg>

            <strong>
              <a className="addj" href=" ">Add Job Title</a>
            </strong>
          </div>
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 10a7 7 0 00-14 0c0 3.484 2.298 7.071 7 10.741 4.702-3.67 7-7.257 7-10.741zm-7 12c-5.333-4-8-8-8-12a8 8 0 1116 0c0 4-2.667 8-8 12zm0-10a2 2 0 110-4 2 2 0 010 4zm0 1a3 3 0 100-6 3 3 0 000 6z"></path>
            </svg>

            <strong>
              <a className="addj" href=" " data-test="profile-header-add-location">
                Add Location
              </a>
            </strong>
          </div>
        </div>
        <div>
          <div>
            <strong>Find the job you'll love</strong>
          </div>

          <div>
            {/* <strong>Great! We have your resume on file</strong> */}
            <div className="fbtn">
              <button className="finishbtn" onClick={() => {window.location.href="/profile1"}}>
                 Finish Your Profile 
              </button>
            </div>
          </div>
          <div>
            <strong>Don't want to fill-in manually?</strong>

            {/* <div>
              <a href=" ">
                <strong>Upload Resume</strong>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile2;
