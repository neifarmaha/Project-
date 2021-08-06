import React from "react";
import Mouse from "../mouse/Mouse";
import "./profile.css";

const Profile1 = () => {
  return (
    <div>
      <Mouse/>
      <div>
        <button className="backBtn"  onClick={() => {window.location.href="/profile2"}}>
          <svg height="15" viewBox="0 0 10 13" width="24">
            <path
              stroke-width="2"
              d="M9 1L2 6.5 9 12"
              fill="none"
              stroke="#0C4085"
            ></path>
          </svg>

          <span className="back">Back</span>
        </button>
      </div>
      <div>
        <div className="information" >
          <h1 id="start"> Upload Your CV </h1>
          <p id="p"> Suported file types are PDF </p>
        </div>

        <div>
          <div>
            <div>
              <label data-test="selectFileBtn" for="resumeSelect"></label>
            </div>
          </div>
          <div>
            <div className="uploadcv">
              <label for="resumeSelect">
                {/* <span>Select File</span> */}
                <input type="file" name="resumeSelect" />
                <div>
                  <svg
                    className="img"
                    width="71"
                    height="90"
                    viewBox="0 0 91 90"
                  >
                    <path
                      d="M70 71.286a1 1 0 012 0v8.572c0 5.317-5.086 9.761-10.786 9.761H10.16C4.562 89.62 0 85.257 0 79.858V17.381c0-5.4 4.562-9.762 10.16-9.762h39.789a1 1 0 110 2H10.16C5.647 9.62 2 13.106 2 17.381v62.477c0 4.274 3.647 7.761 8.16 7.761h51.054c4.651 0 8.786-3.613 8.786-7.761v-8.572zm-57-36.7h34a1 1 0 010 2H13a1 1 0 110-2zm0 12h46a1 1 0 010 2H13a1 1 0 110-2zm0 12h46a1 1 0 010 2H13a1 1 0 110-2zm0 12h46a1 1 0 010 2H13a1 1 0 110-2zm59-67.22v57.22a1 1 0 11-2 0V3.463L53.371 20.092a1 1 0 11-1.414-1.414L70.342.293a1 1 0 011.414 0l18.385 18.385a1 1 0 01-1.414 1.414L72 3.365z"
                      fill="#1861BF"
                    ></path>
                  </svg>
               <div className="upload">
                  <a href="">Drag and drop or select a file to upload</a>
                  </div>
                  <div> 
                  <a href="">Choose a File to Upload</a>
                </div>
                </div> 
              </label>
            </div>
          </div>

          {/* <button className="uploadbtn" data-test="uploadResumeBtn">
            Upload CV
          </button> */}
        </div>
      </div>
    </div>
  );
};
export default Profile1;
