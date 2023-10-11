import React from 'react'
import { Link } from 'react-router-dom'
const Toolbar = () => {
  return (
    <div className='Toolbar'>
        <div className='Toolbar-wrapper'>
            <div className='Toolbar-img-wrapper'>
               <img src={require("../Images/Group 368.png")} alt='' />
            </div>
            <div className='Toolbat-link-wrapper'>
        <Link to='/saasproject/'>Home</Link>
        <Link to='/'>Services</Link>
        <Link to='/'>Pricing</Link>
        <Link to='/'>Testimonials</Link>
        <Link to='/'>Blog</Link>
        <button>
            <h3>Free Trial</h3>
        </button>
            </div>


        </div>

    </div>
  )
}

export default Toolbar