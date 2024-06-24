import LeftAuth from '@/components/LeftAuth/page'
import React from 'react'

const login = () => {
  return (
    <>
      <LeftAuth name="Log in" salutation="WELCOME BACK"/>
      <div className="right">
        <div className='form'>
          <div className="form-top">
            <div className="form-head">
              <span>YOUR ACCOUNT</span>
              <span className='logo'>FOLIO</span>
            </div>
            <form action="#">
              <label htmlFor="username">
                USERNAME
                <input id='username' type="text" />
              </label>
              <label htmlFor="password">
                PASSWORD
                <input id='password' type="password" />
              </label>
              <button type="submit">Log In</button>
            </form>
          </div>
          <div className="form-bottom">
            <hr />
            <div className="bottom-data">
              <span>DON'T HAVE AN ACCOUNT</span>
              <span className='link'><a href="sign-up">Sign up</a></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default login