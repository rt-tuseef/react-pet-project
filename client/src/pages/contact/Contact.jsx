import React from 'react';
import "./contact.css"


const ContactPage = () => {
    return (

        <>
            <div className="contact">
                <div className="left">
                    <div className="contactTilte">
                        <h1>Let's chat.</h1>
                        <h4>Tell me about your project. <br></br>
                        Let's create something together.</h4>
                        <div class="contactList">
                            <div class="contactListItem">
                                <i class="fa-solid fa-envelope"></i>
                                <p class="text">me at email@gmail.com</p>
                            </div>
                            <div class="contactListItem">
                                <i class="fa-solid fa-phone"></i>
                                <p class="text">me at +923248823990</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="right">
                    <form className="contactForm">
                        <label>Send us a message</label>                        <br />
                        <br />
                        <input className="contactInput" type="text" placeholder="Name" name="name" autoFocus={true}></input> <br />
                        <br />
                        <input className="contactInput" type="text" placeholder="Email" name="email"></input> <br />
                        <br />
                        <input className="contactInput" type="text" placeholder="Subject" name="subject"></input> <br />
                        <br />
                        <textarea className="contactInput" type="text" defaultValue={""} placeholder="Tell us more" name="description"></textarea> <br />
                        <br />
                        <button class="contactButton" type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ContactPage;
