import React, { useContext, useRef, useState } from 'react'
import "./Contact.css"
// import phone from "./images/phone.png"
import email from "./images/email.png"
import address from "./images/address.png"
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../Context'

const Contact = () => {
  const formRef = useRef()
  const [done,setDone]=useState(false)
  const theme=useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_fysft5m', 'template_fhv854e', formRef.current, 'ReqH0SvRwbyAzvFCN')
      .then((result) => {
        console.log(result.text);
        setDone(true)
      }, (error) => {
        console.log(error.text);
      });
  }
  return (
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Connect</h1>
          <div className="c-info">
            <div className="c-info-item">
              {/* <img src={phone} alt="" className="c-icon" />
              +91 7686 909 555 */}
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={email} alt="" />
              yogeshsumman2001@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={address} alt="" />
              Kolkata,West Bengal
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Name' name="from_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='subject' name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Email' name="user_email" />
            <textarea  style={{backgroundColor: darkMode && "#333"}} yype="text" rows="5" placeholder='message' name='message' />
            <button>Submit</button>
            {done && "Thank You"}
          </form>
        </div>
      </div>

    </div>
  )
}
export default Contact;

