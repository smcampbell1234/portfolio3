import React, {useState, useRef} from 'react';
// import emailjs from 'emailjs-com"'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")
  const form = useRef();

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function  sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_9rm3tcv', form.current, 'xgVsjCcLllpwdV2-c')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    // e.target.reset()
  }
  // function handleSubmit(e) {
  //   // e.preventDefault();
  //   alert("send email is currently not hooked up. Please send me direct by email: seanmc2009@gmail.com, Thank You.")
  //   // fetch("/", {
  //   //   method: "POST",
  //   //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //   //   body: encode({ "form-name": "contact", name, email, message }),
  //   // })
  //   //   .then(() => alert("Message sent!"))
  //   //   .catch((error) => alert(error));
  // }

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
          {/*<div className="contact-info-box-left">*/}
          {/*  <div className="contact-info-txt">seanmc2009@gmail.com</div>*/}
          {/*  <div className="contact-info-txt">San Diego, CA</div>*/}
          {/*</div>*/}
        </div>
        <div className="contact-form">
          <form
            // netlify
            ref={form}
            name="contact"
            // onSubmit={handleSubmit}
            // action="POST"
            // data-netlify="true"
            // netlify-honeypot="true"
            onSubmit={sendEmail}
          >
            {/*<div type="hidden">*/}
            {/*  <input name="bot-field" />*/}
            {/*</div>*/}
            {/*<input type="hidden" name="form-name" value="contact" />*/}
            <div className="contact-form-title">
              Hope To Hear From You
            </div>
            <div className="contact-form-subtitle">
              {/*Thank you for visiting my portfolio. Please feel free to contact me anytime, either through this form or directly to seanmc2009@gmail.com.*/}
              Thank you for visiting my portfolio. Please feel free to contact me anytime.
            </div>
            {/*<div className="contact-info-box-right">*/}
            {/*  <div className="contact-info-txt">seanmc2009@gmail.com</div>*/}
            {/*  <div className="contact-info-txt">San Diego, CA</div>*/}
            {/*</div>*/}
            <br />
            <br />
            <br />
            <div style={{textAlign:"center", fontSize:"1.6rem",fontWeight:"bold"}}>
              seanmc2009@gmail.com
            </div>
            {/*<div>*/}
            {/*  <label htmlFor="name" className="contact-form-label">*/}
            {/*    Name*/}
            {/*  </label>*/}
            {/*  <input*/}
            {/*    type="text"*/}
            {/*    id="name"*/}
            {/*    className="contact-form-input"*/}
            {/*    onChange={(e) => setName(e.target.value)}*/}
            {/*    name="name"*/}
            {/*  />*/}
            {/*</div>*/}

            {/*<div>*/}
            {/*  <label htmlFor="email" className="contact-form-label">*/}
            {/*    Email*/}
            {/*  </label>*/}
            {/*  <input*/}
            {/*    type="text"*/}
            {/*    id="email"*/}
            {/*    className="contact-form-input"*/}
            {/*    onChange={(e) => setEmail(e.target.value)}*/}
            {/*    name="email"*/}
            {/*  />*/}
            {/*</div>*/}

            {/*<div>*/}
            {/*  <label htmlFor="message" className="contact-form-label">*/}
            {/*    Message*/}
            {/*  </label>*/}
            {/*  <textarea*/}
            {/*    type="text"*/}
            {/*    id="email"*/}
            {/*    className="contact-form-input contact-message"*/}
            {/*    onChange={(e) => setEmail(e.target.value)}*/}
            {/*    name="message"*/}
            {/*  />*/}
            {/*</div>*/}
            {/*<button*/}
            {/*  type="submit"*/}
            {/*  className="contact-form-submit"*/}
            {/*>*/}
            {/*  Submit*/}
            {/*</button>*/}
          </form>


        </div>
      </div>
    </React.Fragment>

  )
}

export default Contact;