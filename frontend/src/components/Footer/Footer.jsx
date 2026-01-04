import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footerContent">
            <div className="footerContentLeft">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius quaerat tenetur quia, repellat blanditiis iste veritatis sapiente. Impedit soluta incidunt repellat cum minima illo velit architecto labore nobis a!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>
            <div className="footerContentCenter">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footerContentRight">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-12-123-45-789</li>
                    <li>support@tomato.com</li>
                </ul>
            </div>
        </div>
      <hr />
      <p className="footer-copyright">
        CopyRight 2024 ©️ Tomato.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer
