import React, { useState } from 'react'
import './Contact.css'
import Swal from 'sweetalert2'


export function Contact() {

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d7787635-1d4e-433e-84c0-a9735c522f33");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent!",
        icon: "success"
        });
    }
  };

    return (
        <>
        <section className="contact">
            <form onSubmit={onSubmit}>
                <h2>Contact Form</h2>

                    <div className="input-box">
                        <label><p><b>Full Name</b></p></label>
                            <input type="text" className="field" placeholder='Enter your name' name='name' required/>
                    </div>

                        <div className="input-box">
                        <label><p><b>Email Address</b></p></label>
                            <input type="email" className="field" placeholder='Enter your email' name='email' required/>
                         </div>

                        <div className="input-box">
                        <label><p><b>Your Message Name</b></p></label>
                            <textarea id="" className="field mess" placeholder='Enter your message' name="message" required></textarea>
                        </div>

                    <div id="form-button">
                    <button type="submit" >Send Message</button>
                    </div>
            </form>
        </section>
        </>
    )
}