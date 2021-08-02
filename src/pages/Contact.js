import React from 'react';
import '../App.css';
import emailjs from 'emailjs-com';




export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_grg125k', 'template_19ruejo', e.target, 'user_2WJp3NxrfSZ3fxOIIc44R')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
          <h2> Contact us</h2>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
