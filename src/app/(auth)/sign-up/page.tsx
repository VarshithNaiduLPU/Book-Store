import LeftAuth from '@/components/LeftAuth/page'
import React from 'react'

const signup = () => {
  return (
    <>
      <LeftAuth name="Sign up" salutation="WELCOME"/>
      <div className="right">
        <div className='form'>
          <div className="form-top">
            <div className="form-head">
              <span>YOUR ACCOUNT</span>
              <span className='logo'>FOLIO</span>
            </div>
            <form action="#">
              <label htmlFor="email">
                EMAIL
                <input id='email' type="text" />
              </label>
              <label htmlFor="password">
                PASSWORD
                <input id='password' type="password" />
              </label>
              <label htmlFor="cpassword">
                CONFIRM PASSWORD
                <input id='cpassword' type="text" />
              </label>
              <button type="submit">Sign Up</button>
            </form>
          </div>
          <div className="form-bottom">
            <hr />
            <div className="bottom-data">
              <span>HAVE AN ACCOUNT</span>
              <span className='link'><a href="log-in">Log in</a></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default signup