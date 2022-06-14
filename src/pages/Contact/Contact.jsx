import React from 'react'
import "../../styles/contact/_contactpage.scss";
import Footer from "../../components/Footer";
function Contact() {
  return (
    <div>
        <div className="contact__container">
        <div className="contact__header">
          <div className="contact__header__infor">
            <div className="contact__header__infor-title">
              <h3 className="contact__title__header">GET IN <br /><h2>TOUCH</h2></h3>
              <p className="contact__title__lead">Ortiz is the best theme for elit, sed do eiusmod tempor dolor sit ame tse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud exercitation oris nisi</p>
            </div>
            <div className="contact__header__infor-contact">
              <div className="contact__header__icon">
                  <i class="fa-solid fa-location-dot"></i>
                  <p className="contact__text">256, 1st AVE, Manchester <br />125 , Noth England</p>
              </div>
              <hr />
              <div className="contact__header__icon">
              <i class="fa-solid fa-phone"></i>
                  <p className="contact__text">Telephone : +88 (012) 356 958 45 <br />Telephone : +88 (012) 356 958 45</p>
              </div>
              <hr />
              <div className="contact__header__icon">
              <i class="fa-solid fa-earth-americas"></i>
                  <p className="contact__text">Email : info@example.com <br />Web : www.example.com</p>
              </div>
            </div>
          </div>
          <div className="contact__header__form">
            <h2 className="form__title">
              Leave a Message
            </h2>
            <form className="form__input__fields" action="/">
              <div className="input__name__email">
                <input type="text" className="form__input__text" name="name" placeholder="Your Name ..."/>
                <input type="email" name="email" className="form__input__text" placeholder="Your Email ..."/>
              </div>
              <textarea name="message" className="form__input__message" id="message" placeholder="Your Message ..."></textarea>
              <br />
              <input type="submit" className="form__input__button"/>
            </form>
          </div>
        </div>
      </div>

  </div>
    
   
  )
}

export default Contact
