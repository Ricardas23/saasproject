import React, {useEffect} from 'react'
import Zoom from 'react-reveal/Zoom'; 
import Fade from "react-reveal/Fade"
const IndexPage = () => {


  // useEffect(()=>{
  //   AOS.init({duration: 2000})
  // }, [])

  return (
    <main>
    <header>
      <Zoom>
      <div className='Header-wrapper'>
        <div className='Header-intro-text animation'>
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
        <div className='section-about-text'>
          <h2>Its very helpful for operating system</h2>
          <div className='section-pros'>
          <img src={require("../Images/VectorBrown.png")} alt=''/>
            <h3>Ultra fast & Secure</h3>
            <p>LoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLoremLorem</p>
          </div>
          <div className='section-pros'>
          <img src={require("../Images/VectorGreen.png")} alt=''/>
            <h3>Allows customization</h3>
            <p>LoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLoremLorem</p>
          </div>
          <div className='section-pros'>
            <img src={require("../Images/VectorBlue.png")} alt=''/>
            <h3>Smart contract</h3>
            <p>LoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLoremLorem</p>
          </div>
        </div>
      </div>

    </section>

    <section className='section-container-features'>
      <div className='section-features-wrapper'>
        <div className='section-features-text'>
        <h2>We Provide best Feature for customer</h2>
        </div>
        <div className='features-container'>
          <div className='features-card'>
            <div className='circle red'>
            <img src={require("../Images/Group388.png")} alt=''/> 
            </div>
            <h3>Clean Code</h3>
            <p>Lorem LoremLoremvvvvvLoremLoremLorem</p>
            <button className='arrow-button'>See More<span className='arrow'></span></button>
          </div>

          <div className='features-card'>
            <div className='circle yellow'>
            <img src={require("../Images/Group392.png")} alt=''/>
            </div>
            <h3>Data Analytic</h3>
            <p>Lorem LoremLoremvvvvvLoremLoremLorem</p>
            <button className='arrow-button'>See More<span className='arrow'></span></button>
          </div>

          <div className='features-card'>
            <div className='circle green'>
            <img src={require("../Images/Group393.png")} alt=''/>
            </div>
            <h3>Fully Secured</h3>
            <p>Lorem LoremLoremvvvvvLoremLoremLorem</p>
            <button className='arrow-button'>See More<span className='arrow'></span></button>
          </div>

          <div className='features-card'>
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
        <div className='section-pricing-text'>
          <h3>Choose your best pricing plan</h3>
        </div>
        <div className='pricing-card'></div>
        <div className='pricing-card'></div>
        <div className='pricing-card'></div>

      </div>
    </section>
    </Fade>
    </main>
  )
}

export default IndexPage