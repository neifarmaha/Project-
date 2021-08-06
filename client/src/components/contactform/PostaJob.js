import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegistreE } from "../../js/actions";
import Mouse from "../mouse/Mouse";
import "./postajob.css";
 

const PostaJob = () => {
  const [website, setWebsite] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // const loginExistedUser = (e) => {
  //   e.preventDefault();
  //   dispatch(Login_E({ email, password }));
  // };
  const { usersE ,loading } = useSelector(
    (state) => state
  );

  const reg = () => {
    dispatch(RegistreE({website, companyName, phonenumber, location, email, password}))
  }
console.log(website)
console.log(companyName)
console.log(phonenumber)
console.log(location)
console.log(email)
console.log(password)
  return (
    <div>
      <Mouse/> 
      {loading?(
        <h1>loadigin...</h1>) :(
          //   usersE ?(
          //     <h1>loadigin...</h1>)
          // :(

           
    <div className="postj">
      

      

      <div class="row">
        <div>
          <div>
            <h1>Create an Employer Account</h1>
            <h2> Tell Us About Your Company </h2>
            <div id="signInForm">
              <div>
                <form method="post">
                  <div className="name ">
                    <input
                      type="text"
                      name="org_name"
                      className="orgname"
                      onChange={(e) => setCompanyName(e.target.value)}
                      value={companyName}
                      placeholder="  Company Name"
                      required
                    />
                  </div>

                  <div className="email ">
                    <input
                      name="email"
                      type="email"
                      class="Email_hint"
                      placeholder="    Email Address"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <h6>
                      {" "}
                      Candidates that apply to the job , their CV will be sent
                      to this email
                    </h6>
                  </div>

                  <div>
                    <input
                      type="text"
                      className="phonenumber"
                      name="phonenumber"
                      placeholder="Phone Number"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phonenumber}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="location"
                      name="location"
                      placeholder="Location"
                      onChange={(e) => setLocation(e.target.value)}
                      value={location}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="website"
                      name="website"
                      placeholder="Company Website (optional)"
                      onChange={(e) => setWebsite(e.target.value)}
                      value={website}
                    />
                  </div>

                  <div className="password">
                    <input
                      name="password"
                      type="password"
                      class="Pass_hint"
                      placeholder="    Create Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div>
                    <input
                      href=" "
                      name="submitted"
                      type="submit"
                      value="Get started"
                      className="butn"
                      onClick={reg}
                    />
                  </div>
                  {/* <div>
                    <button  type="submit" onClick={reg}>insc</button>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span class="dot"> </span>
    </div>
     )}
     </div>
  );
};

export default PostaJob;
