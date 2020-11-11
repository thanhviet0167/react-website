import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Submit</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items social'>
            <h2>Social Media</h2>
            <Link id='ins'>Instagram</Link>
            <Link id='fb'>Facebook</Link>
            <Link id='ytb'>Youtube</Link>
            <Link id='tw'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            VEGANIMAL
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>VEGANIMAL © 2020</small>
          <div class='social-icons'>
            <Link class='social-icon-link facebook' id='FB'  target='_blank' aria-label='Facebook'  >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link class='social-icon-link instagram' id='INS' target='_blank' aria-label='Instagram'>
              <i class='fab fa-instagram' />
            </Link>
            <Link class='social-icon-link youtube' id='YTB' target='_blank' aria-label='Youtube' >
              <i class='fab fa-youtube' />
            </Link>
            <Link class='social-icon-link twitter' id="TW" target='_blank' aria-label='Twitter'>
              <i class='fab fa-twitter' />
            </Link>
            <Link class='social-icon-link linkedin' id='LK' target='_blank' aria-label='LinkedIn'>
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

window.onload = function(){
  document.getElementById("fb").onclick = function()
  {
    window.location = "http://www.fb.com"; 
  }
  document.getElementById("ins").onclick = function()
  {
    window.location = "https://www.instagram.com/"; 
  }
  document.getElementById("ytb").onclick = function()
  {
    window.location = "https://www.youtube.com/"; 
  }
  document.getElementById("tw").onclick = function()
  {
    window.location = "https://twitter.com/"; 
  }

  document.getElementById("FB").onclick = function()
  {
    window.location = "http://www.fb.com"; 
  }
  document.getElementById("INS").onclick = function()
  {
    window.location = "https://www.instagram.com/"; 
  }
  document.getElementById("YTB").onclick = function()
  {
    window.location = "https://www.youtube.com/"; 
  }
  document.getElementById("TW").onclick = function()
  {
    window.location = "https://twitter.com/"; 
  }
  document.getElementById("LK").onclick = function()
  {
    window.location = "https://www.linkedin.com/"; 
  }
}



export default Footer;