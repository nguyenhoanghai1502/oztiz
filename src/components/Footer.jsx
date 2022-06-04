import React from 'react'
import '../styles/components/_footer.scss'
function Footer() {
  return (
    <div className="footer__home__container">
      <div className="content__container">
        <div className="footer__about">
            <h2 className="about__title">About</h2>
            <p className="about__content">Ortiz is the best and popular real estate<br />  to you how all this mistaolt cing pleasure <br/> and praising ained wasnad pain was prexplain</p>
        </div>
        <div className="footer__popular">
            <h2 className="popular__title">Popular Post</h2>
            <h3 className="popular__one">Duplex Villa Design</h3>
            <p className="popular__content__one">Lorem ipsum dolor sit amet, tur acinglit sed do eius</p>
            <h3 className="popular__one">Duplex Villa Design</h3>
            <p className="popular__content__one">Lorem ipsum dolor sit amet, tur acinglit sed do eius</p>
        </div>
        <div className="footer__contact">
            <h2 className="contact__title">Contact Us</h2>
            <div className="contact__icon">
                <i class="fa-solid fa-location-dot"></i>
                <p className="address">256, 1st AVE, Manchester <br />125 , Noth England</p>
            </div>
            <div className="contact__icon">
            <i class="fa-solid fa-phone"></i>
                <p className="address">Telephone : +88 (012) 356 958 45 <br />Telephone : +88 (012) 356 958 45</p>
            </div>
            <div className="contact__icon">
            <i class="fa-solid fa-earth-americas"></i>
                <p className="address">Email : info@example.com <br />Web : www.example.com</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
