import React , {useState}from "react";
 
import "./signin.css";
 
import { Login_E} from "../../js/actions"
import { useDispatch, useSelector } from "react-redux";
import Mouse from "../mouse/Mouse";
 


const SignIn = () => {
   
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginExistedUser = (e) => {
      e.preventDefault();
      dispatch(Login_E({ email, password }));
    };
    const { isAuth } = useSelector(
      (state) => state
    );
  return (
   
    <div class="row">
       <Mouse/>
      <div>
        <div class="login_panel_body">
          <h1>Sign In</h1>
          <div id="signInForm">
            <div>
              <form action="/login"   method="post">
                <div id="btn_block">
                  <ul class="border-tabs login_toggle">
                    <li>
                      <a  className="login"href="" id="members_btn">
                        I'm an Employer
                      </a>
                    </li>
                    <li>
                      <a  className="login" href="" id="candidates_btn">
                        I'm a Job Seeker
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="email ">
                  <input
                    name="email"
                    type="email"
                    class="email_hint"
                    placeholder="    Email Address"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                  />
                </div>

                <div className="password">
                  <input
                    name="password"
                    type="password"
                    class="pass_hint"
                    placeholder="    Password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                  />
                </div>

                <div>
                  <input
                    name="submitted"
                    type="submit"
                    value="Sign In"
                    className="btn"
                    // onClick={loginExistedUser}
                    onClick={() => {window.location.href="/profile2"}}
                  />
                </div>
              </form>
            </div>
          </div>
          <div class="login_links">
             

            <p class="signup_link_jobseeker">
              New to .......? <a className ="new" href="/registerform">
              Create a job seeker profile 
              </a>
            </p>

            <p class="signup_link_employer">
              New to ..... ? <a className ="new" href="/postajob">Post a job</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
