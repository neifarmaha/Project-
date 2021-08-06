import React from "react";
import { BrowserRouter,   Route, Switch } from "react-router-dom";

import "./App.css";
import HomeB from "./components/acceuil/HomeB";
 
 
import PostaJob from './components/contactform/PostaJob';
import RegisterForm from "./components/contactform/RegisterForm";
import SignIn from "./components/contactform/SignIn";
import Test from "./components/contactform/Test";
import ContactF from "./components/feedback/ConatactF";
import Profile from "./components/profile/Profile";
import Profile1 from "./components/profile/Profile1";
import Profile2 from "./components/profile/Profile2";
 import {GetAuth} from "./js/actions";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
     
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/postajob">
            <PostaJob/>
          </Route>
          {/* <Route path="/test" component={Test} /> */}
          <Route path="/registerform">
            <RegisterForm/>
          </Route>
          <Route path="/contactF">
            <ContactF/>
          </Route>
          
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/profile1">
            <Profile1/>
          </Route>
          <Route path="/profile2">
            <Profile2/>
          </Route>
          <Route path="/">
            <HomeB />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
