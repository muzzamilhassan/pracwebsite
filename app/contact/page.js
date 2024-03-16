import Button from "../components/button/Button";
import Header from "../components/header/Header";
import Input from "../components/input/Input";
import React from 'react'

const Contact = () => {
  return (
    <>
      <Header title="Contact" />
      <section  className="loacation">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52923.623480389804!2d72.9265714!3d33.999559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de4d486960e829%3A0x24811f20485d53f5!2sHar%C4%ABpur%2C%20Haripur%2C%20Khyber%20Pakhtunkhwa!5e0!3m2!1sen!2s!4v1710572712517!5m2!1sen!2s" width="600" height="450"></iframe>
      </section>


      <section className="contact-us">
        <div className="row">
          <div className="content-col">
            <div>
              <i className="fa fa-home"></i>
              <span>
                <h5>NH9 Road, ABC Building</h5>
                <p>Ghaziabad, Uttar Pradesh, IN</p>
              </span>
            </div>
            <div>
              <i className="fa fa-phone"></i>
              <span>
                <h5>+91 7445546525</h5>
                <p>Monday To Saturday, 9AM To 6PM</p>
              </span>
            </div>
            <div>
              <i className="fa fa-envelope"></i>
              <span>
                <h5>xyz@email.com</h5>
                <p>Email Us Yor Query</p>
              </span>
            </div>
          </div>
          <div className="content-col">
            <form>
              <Input type="text" place="Enter Name" />
              <Input type="email" place="Enter Email" />
              <Input type="text" place="Enter Subject"/>
              <textarea rows="8" placeholder="Message" required></textarea>

              <Button text="Send Message" />
              {/* <button type="submit" className="hero_btn btn">Send Message</button> */}
            </form>
          </div>
        </div>
      </section>

    </>
  )
}

export default Contact