import React from 'react'
import { Link } from 'react-router-dom'
Link

const Footer = () => {
  return (
    <div style={{height:'300px'}} className='mt-5 container w-100'>
      <div className='d-flex justify-content-between'>
        {/* intro */}
        <div style={{width:'400px'}}>
          <h5><i class="fa-solid fa-music me-3"></i>
          Media Player</h5>
          <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        {/* links */}
        <div className='d-flex flex-column'>
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Landing page</Link>
          <Link to={'/home'} style={{textDecoration:'none', color:'white'}}>Home page</Link>
          <Link to={'/history'} style={{textDecoration:'none', color:'white'}}>Watch History page</Link>
        </div>
        {/* guides */}
        <div className='d-flex flex-column'>
          <h5>Guides</h5>
          <a style={{textDecoration:'none', color:'white'}} target='blank'  href="https://react.dev/" >React</a>
          <a style={{textDecoration:'none', color:'white'}} target='blank'  href="https://react-bootstrap.netlify.app/">React Bootstrap</a>
          <a style={{textDecoration:'none', color:'white'}} target='blank' href="https://www.npmjs.com/package/react-router-dom">React Router</a>
        </div>
        {/* contact */}
        <div className='d-flex flex-column'>
          <h5>Contact Us</h5>
          <div className='d-flex'>
              <input type="text" placeholder='enter your email here..' className='form-control me-2' />
              <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='d-flex justify-content-between mt-3'>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://en.wikipedia.org/wiki/Twitter"><i class="fa-brands fa-twitter"></i></a>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://github.com/"><i class="fa-brands fa-github"></i></a>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://www.call.com/"><i class="fa-solid fa-phone"></i></a>
          </div>
        </div>
      </div>
      <p className='text-center mt-3'>Copyright &copy;  May 2024 Batch, Media Player. Build with React.</p>
    </div>
  )
}

export default Footer