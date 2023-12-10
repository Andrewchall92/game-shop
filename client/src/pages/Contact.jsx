import { useState } from "react";
import "../styles/Contact/styles.css";
import { validateEmail } from "../utils/helpers";


function Contact() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      // Based on the input type, we set the state of either email, username, and password
      if (inputType === "email") {
        setEmail(inputValue);
      } else if (inputType === "userName") {
        setUserName(inputValue);
      } else {
        setMessage(inputValue);
      }
    };
  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();

      // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
      if (!validateEmail(email) || !userName || !message) {
        setErrorMessage("🤔 No Email entered 🤔");
        if (!userName || !message) {
          setErrorMessage("🤔 No username entered 🤔");
          if (!message) {
            setErrorMessage("🤔 No Message entered 🤔");
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
          }
        }
      }
  
      // If everything goes according to plan, we want to clear out the input after a successful registration.
      setUserName("");
      setMessage("");
      setEmail("");
      // setformInfo({email: "",userName: "",password: "",errorMessage: "" })
    };
  
    return (
      <div id="contactBg">
        <div className="container text-center">
          <h2>😁 Send us a message 😁</h2>
          <div id="contactCard" >
          <form className="form" onSubmit={handleFormSubmit} >
            <div className="container text-left">
              Name:
              <input style={{ height: "30px" }}
                value={userName}
                name="userName"
                onChange={handleInputChange}
                type="text"
                placeholder="Enter your name here"
              />
              Email:
              <input style={{ height: "30px" }}
                value={email}
                name="email"
                onChange={handleInputChange}
                // onChange={orThisWayForAll}
                type="email"
                placeholder="Enter your email here"
              />
              Message:
              <br></br>
              <textarea id="w3review" rows="4" 
                value={message}
                name="message"
                onChange={handleInputChange}
                // onChange={orThisWayForAll}
                type="message"
                placeholder="Enter a short message here"
              />
            </div>
            <button type="submit" id="btnContact">
              Send Message
            </button>
            
  
            {errorMessage && (
              <div>
                <h3 className="error-text">{errorMessage}</h3>
              </div>
            )}
          </form>
        </div>
      </div>
      </div>

    );
  }

export default Contact;