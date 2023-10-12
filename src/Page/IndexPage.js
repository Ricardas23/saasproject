import React, {useEffect, useState} from 'react'
import Zoom from 'react-reveal/Zoom'; 
import Fade from "react-reveal/Fade"
import {Switch} from "antd"
import { Link } from 'react-router-dom';


const IndexPage = () => {

  const [changePlanPrice, setChangePlanPrice] = useState(false)

  const changePrice = () => {
    changePlanPrice ? setChangePlanPrice(false): setChangePlanPrice(true)
  }

  

  return (
    <main>
    <header>
      <Zoom>
      <div className='Header-wrapper'>
        <div className='Header-intro-text animation font'>
        <h1>Codext one of the best system in SAAS</h1>
        <p>Lorem Lorem LoremLoremLoremLoremLoremLoremLorem <br/>LoremLoremvvvvvLoremLoremLorem</p>
        <button>
          <h3>Try A Live Demo</h3>
        </button>
        </div>

        <div className='primary-header-img animation'>
          <img src={require("../Images/Group 396.png")} alt=''/>
        </div>

      </div>
      </Zoom>
    </header>

    <Fade left>
    <section className='section-about-container'>
      <div className='section-about-wrapper'>
        <div className='section-about-img'>
          <img src={require("../Images/preview 1.png")} alt=''/>
        </div>
        <div className='section-about-text font'>
          <h2>Its very helpful for operating system</h2>
          <div className='section-pros font'>
          <img src={require("../Images/VectorBrown.png")} alt=''/>
            <h3>Ultra fast & Secure</h3>
            <p>LoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLoremLorem</p>
          </div>
          <div className='section-pros font'>
          <img src={require("../Images/VectorGreen.png")} alt=''/>
            <h3>Allows customization</h3>
            <p>LoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLoremLorem</p>
          </div>
          <div className='section-pros font'>
            <img src={require("../Images/VectorBlue.png")} alt=''/>
            <h3>Smart contract</h3>
            <p>LoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLoremLorem</p>
          </div>
        </div>
      </div>

    </section>

    <section className='section-container-features'>
      <div className='section-features-wrapper'>
        <div className='section-features-text font'>
        <h2>We Provide best Feature for customer</h2>
        </div>
        <div className='features-container'>
          <div className='features-card font'>
            <div className='circle red'>
            <img src={require("../Images/Group388.png")} alt=''/> 
            </div>
            <h3>Clean Code</h3>
            <p>Lorem LoremLoremvvvvvLoremLoremLorem</p>
            <button className='arrow-button'>See More<span className='arrow'></span></button>
          </div>

          <div className='features-card font'>
            <div className='circle yellow'>
            <img src={require("../Images/Group392.png")} alt=''/>
            </div>
            <h3>Data Analytic</h3>
            <p>Lorem LoremLoremvvvvvLoremLoremLorem</p>
            <button className='arrow-button'>See More<span className='arrow'></span></button>
          </div>

          <div className='features-card font'>
            <div className='circle green'>
            <img src={require("../Images/Group393.png")} alt=''/>
            </div>
            <h3>Fully Secured</h3>
            <p>Lorem LoremLoremvvvvvLoremLoremLorem</p>
            <button className='arrow-button'>See More<span className='arrow'></span></button>
          </div>

          <div className='features-card font'>
            <div className='circle purple'>
            <img src={require("../Images/Group394.png")} alt=''/>
            </div>
            <h3>24/7 Support</h3>
            <p>Lorem LoremLoremvvvvvLoremLoremLorem</p>
            <button className='arrow-button'>See More<span className='arrow'></span></button>
          </div>
        </div>
      </div>
    </section>

    <section className='section-container-pricing'>
      <div className='section-pricing-wrapper'>
        <div className='section-pricing-text font'>
          <h3>Choose your best pricing plan</h3>
        </div>
        <div className='button-change-plans font'>
          <p>Added for Montly <Switch onClick={changePrice} /> Yearly</p>
        </div>
        <div className='pricing-container'>

        <div className='pricing-card font'>
          <h4>Start-up</h4>
          <h3>{changePlanPrice?  <span>$110/year</span> : <span>$10/mo</span>}</h3>
          <p>Easy Customizible</p>
          <p>Commercial license</p>
          <p>Single user license</p>
          <p>Hotline support 24/7</p>
          <button>Try this package</button>
        </div>

        <div className='pricing-card font'>
          <h4>Classic</h4>
          <h3>{changePlanPrice?  <span>$330/year</span> : <span>$30/mo</span>}</h3>
          <p>Easy Customizible</p>
          <p>Commercial license</p>
          <p>5 user license</p>
          <p>Hotline support 24/7</p>
          <button>Try this package</button>

        </div>

        <div className='pricing-card font'>
          <h4>Premium</h4>
          <h3>{changePlanPrice?  <span>$550/year</span> : <span>$49/mo</span>}</h3>
          <p>Easy Customizible</p>
          <p>Commercial license</p>
          <p>10 user license</p>
          <p>Hotline support 24/7</p>
          <button>Try this package</button>
        </div>
  
        </div>
      </div>
    </section>

    <section className='section-review-container'>
      <div className='review-text font'>
        <h2>Lets see our User's Review</h2>
      </div>
      <div className='section-review-wrapper snaps-inline'>
      <div className='Review-card '>
        <img src='https://avatar.iran.liara.run/public/31' alt=''/>
        <h3>James </h3>
        <p>Labai gera imone labai viskas patiko</p>
      </div>
      <div className='Review-card font'>
        <img src='https://avatar.iran.liara.run/public/3' alt=''/>
        <h3>Andrew </h3>
        <p>Labai gera imone labai viskas patiko</p>
      </div>
      <div className='Review-card font'>
        <img src='https://avatar.iran.liara.run/public/5' alt=''/>
        <h3>Jake </h3>
        <p>Labai gera imone labai viskas patiko</p>
      </div>
      <div className='Review-card font'>
        <img src='https://avatar.iran.liara.run/public/12' alt=''/>
        <h3>Brian </h3>
        <p>Labai gera imone labai viskas patiko</p>
      </div>
      <div className='Review-card font'>
        <img src='https://avatar.iran.liara.run/public/25' alt=''/>
        <h3>James </h3>
        <p>Labai gera imone labai viskas patiko</p>
      </div>
      <div className='Review-card font'>
        <img src='https://avatar.iran.liara.run/public/14' alt=''/>
        <h3>Paul </h3>
        <p>Labai gera imone labai viskas patiko</p>
      </div>
      </div>
    </section>
    <section className='section-latestnews-container'>
      <div className='sectiont-latestnews-wrapper'>
        <div className='latestnews-text'>
          <h2>Latest insights news</h2>
        </div>
        <div className='news-card'>
          <img src={require("../Images/Rectangle33.png")} alt=''/>
          <div className='detail font'>
            <p>Our Creative Team</p>
            <p>17 June, 2021</p>
            <p>by Steve Smith</p>
          </div>
          <div className='about font'>
            <h3>Running remote offsites and onbordings</h3>
            <p>LoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLoremLorem</p>
            <Link to='/'><span>Continue</span></Link>
          </div>
        </div>

        <div className='news-card'>
          <img src={require("../Images/Rectangle33.png")} alt=''/>
          <div className='detail font'>
            <p>Our Creative Team</p>
            <p>17 June, 2021</p>
            <p>by Steve Smith</p>
          </div>
          <div className='about font'>
            <h3>Running remote offsites and onbordings</h3>
            <p>LoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLoremLorem</p>
            <Link to='/'><span>Continue</span></Link>
          </div>
        </div>

      </div>
    </section>

    <footer className='footer-container'>
      <div className='footer-wrapper'>
      <div className='footer-info'>
        <img src={require("../Images/Group 368.png")} alt='logo'/>
        <p>LoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLoremLorem</p>
        <div className='social-logos'>
          <img src={require("../Images/Group351.png")} alt=''/>
          <img src={require("../Images/Group352.png")} alt=''/>
          <img src={require("../Images/Group353.png")} alt=''/>
          <img src={require("../Images/Group360.png")} alt=''/>
        </div>
      </div>

      <div className='footer-nav font'>
        <div className='f-nav'>
        <h3>Resources</h3>
        <ul>
          <li>Services</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>Blog</li>
        </ul>
        </div>
        <div className='f-nav'>
        <h3>Usefull Links</h3>
        <ul>
          <li>Terms of Services</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Contact us</li>
        </ul>
        </div>
      </div>

      <div className='newsletter-container font'>
        <h3>Newsletter</h3>
        <p>Sign up and receive the latest news via email</p>
        <div className='send-email-container font'>
          <input type='text' placeholder='Email address'/>
        <button>Sent</button>
        </div>
      </div>
      </div>
    </footer>

    </Fade>
    </main>
  )
}

export default IndexPage