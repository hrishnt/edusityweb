import React from 'react'
import "./ContactStyles.css"
import mailicon from "../assests/mail-icon.png"
import phoneicon from "../assests/phone-icon.png"
import locationicon from "../assests/location-icon.png"
import whitearrow from "../assests/white-arrow.png"

export default function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "c5388256-eeb1-42c3-a013-b9233a55fc17");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
      <div className="contactcol">
        <h3>Send us a message <img src={mailicon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={mailicon} alt="" /> sharmahrishant90@gmail.com</li>
            <li><img src={phoneicon} alt="" /> +977 9800000000</li>
            <li><img src={locationicon} alt="" /> San Marcos, Texas, United States </li>
        </ul>
      </div>
      <div className="contactcol">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name' required/>
            <label>Phone no</label>
            <input type="tel" name="phone" placeholder='Enter Your Mobile number' required />
            <label>Write your message here</label>
            <textarea name="message"  rows="6" placeholder='Enter Your Message' required></textarea>
            <button type='submit' className='btn darkbtn'>Submit now <img src={whitearrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}
