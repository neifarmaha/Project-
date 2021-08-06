import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import "./contactF.css";
import Mouse from "../mouse/Mouse";

const ContactF = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let firstNameS = document.getElementById("firstname");
    let lastNameS = document.getElementById("lastname");
    let emailS = document.getElementById("email");
    let messageS = document.getElementById("message");
    let formMess = document.querySelector(".formMessage");

    const isEmail = () => {
      let isMail = document.getElementById("not-mail");
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (email.match(regex)) {
        isMail.style.display = "none";
        return true;
      } else {
        isMail.style.display = "block";
        isMail.style.animation = "dongle 1s";
        setTimeout(() => {
          isMail.style.animation = "none";
        }, 1000);
        return false;
      }
    };

    if (firstName && lastName && isEmail() && message) {
      firstNameS.classList.remove("red");
      lastNameS.classList.remove("red");
      emailS.classList.remove("red");
      messageS.classList.remove("red");

      formMess.innerHTML = "Message en cours d'envoi...";
      formMess.style.background = "#00c1ec";
      formMess.style.opacity = "1";

      emailjs
        .send(
          
          "service_sr9mzsh",
          
          "template_nr47kdn",
          {
            firstName,
            lastName,
            email,
            message,
          },
         
          process.env.REACT_APP_EMAILJS_KEY
        )
        .then(
          () => {
            formMess.innerHTML =
              "Message envoyé ! Je vous recontacterai dès que possible.";

            document.getElementById("firstname").classList.remove("error");
            document.getElementById("lastname").classList.remove("error");
            document.getElementById("email").classList.remove("error");
            document.getElementById("message").classList.remove("error");
            setFirstName("");
            setLastName("");
            setEmail("");
            setMessage("");

            setTimeout(() => {
              formMess.style.opacity = "0";
            }, 5000);
          },
          (err) => {
            console.log(err);
            formMess.style.background = "rgb(253, 87, 87)";
            formMess.innerHTML =
              "Une erreur s'est produite, veuillez réessayer.";
          }
        );
    } else {
      formMess.innerHTML = "Merci de remplir correctement les champs requis *";
      formMess.style.background = "rgb(253, 87, 87)";
      formMess.style.opacity = "1";

      if (!firstName) {
        firstNameS.classList.add("error");
      }
      if (!lastName) {
        lastNameS.classList.add("error");
      }
      if (!email) {
        emailS.classList.add("error");
      }
      if (!message) {
        messageS.classList.add("error");
      }
    }
  };

  const invalid = true;

  return (
    <div>
      <Mouse/>
    <form className="contact-form">
      <h1 className="titre">Contact Us</h1>
      <div className="form-content">
        <div>
        <input
          className="Fnamehint"
          name="name"
          type="text"
          required
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Firstname *"
          value={firstName}
        />
        </div>
        <div>
        <input
          className="Lnamehint"
          name="name"
          type="text"
          required
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Lastname *"
          value={lastName}
        />
        </div>
        <div className="email-content">
          
          <input
            className="mailhint"
            type="mail"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="    Email *"
            value={email}
          />
          { invalid && <label id="not-mail">Email invalid</label>}
        </div>
        <textarea
          className="messagehint"
         
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
          required
        />
      </div>
      <input
        className="formButton hover"
        type="submit"
        value="envoyer"
        onClick={(e) => handleSubmit(e)}
      />
      <div className="formMessage"></div>
    </form>
    
    </div>
  );
};

export default ContactF;
