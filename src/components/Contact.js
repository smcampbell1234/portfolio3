import React, {useState} from 'react';

const Contact = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")

  return (
    <React.Fragment>
      <div id="contact" className="section-header-wrapper">
        <div className="section-header">Contact</div>
        <div className="section-subheader"></div>
      </div>
      <div className="contact-wrapper">
        <div className="contact-google-map_wrapper">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="contact-google-iframe"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=point+loma+san+diego&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </div>
        <div className="contact-form">
          <form>
            <div className="contact-form-title">
              Hire Me
            </div>
            <div className="contact-form-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a justo et nisl pretium bibendum vel et nisi. Etiam libero felis, tincidunt sed mi sit amet, condimentum ornare risus. Sed ac dapibus lacus, lob
            </div>
            <div>
              <label htmlFor="name" className="contact-form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="contact-form-input"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email" className="contact-form-label">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="contact-form-input"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="message" className="contact-form-label">
                Message
              </label>
              <input
                type="text"
                id="email"
                className="contact-form-input"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="contact-form-submit"
            >
              Submit
            </button>
          </form>


        </div>
      </div>
    </React.Fragment>

  )
}

export default Contact;