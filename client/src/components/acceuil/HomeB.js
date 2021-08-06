import React from "react";
import DynamicText from "../dynamictext/DynamicText";
import "./homeB.css";
import Cont from "./Cont";
import Footer from "../footer/Footer";
import Mouse from "../mouse/Mouse";
import Feedback from "../feedback/FeedBack";
// import { Link } from "react-router-dom";
// import SearchJob from "../searchjob/SearchJob";

// import { Link } from "react-router-dom";

// import Scroll from "../scroll/Scroll";
// import SocialNetwork from "../socialnetwork/SocialNetwork";

const HomeB = () => {
  return (
    <main className="back">
      <Mouse />
      <div className="navBar">
      <ul className="contact">
        <li className="contactItem contactItemRightBorder">
          <a href="/postajob">Post a Job</a>
        </li>
        <li className="contactItem">
          <a href="/login">Sign in</a>
        </li>

        <li className="contactItem">
          <a href="/signup">Sign up</a>
        </li>
      </ul>
      </div>
      {/* <SocialNetwork/> */}
      <div>
        <h1 className="title">Find The Job</h1>
        <h2><DynamicText /></h2>
      </div>
      <h5 id="description">
        {" "}
        Millions of people are searching for jobs, interships, salary
        information, company reviews and interview questions.{" "}
      </h5>
      <h5 id="description1">
        {" "}
        We'll help you get recruited by reaching out when jobs match your
        profile
      </h5>
      <h5 id="description2"> What job are you looking for next ?</h5>
       
      <h5 id="description4"> Welcome to our World ! Let’s begin the adventure</h5>
      <Cont />
      
      {/* <Scroll /> */}
      <Footer />
      <Feedback />
      {/*        
        <Link to="/contactF"/>
       </Feedback> */}
    </main>
  );
};

export default HomeB;
