import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import './SignIn.css'


function SignIn() {
    return (
        
            <div className="login-container">
                  <form className="login-form" method="POST">
                      <h1>Login</h1>
                      <h6>Fill your account into this form to login</h6>
                      <hr/>
                      <div className="form-group">
                          <input type="text" className="form-control" name="l_username" placeholder="Username" />
                      </div>
                      <br/>
                      <div class="form-group">
                          <input type="password" className="form-control" name="l_password" placeholder="Password" />
                          {/* <p id="text_box" style="color: red;">{{default}}</p> */}
                      </div>
                      <br/>
                      <div className="forgot-link">
                          <div className="form">
                              <input type="checkbox" name="remember" value=""/>
                              <label for="remember">Remember your account</label>
                          </div>
                          <p>
                              <Link to="#">Forgot Password?</Link>
                          </p>
                      </div>
                      <button type="submit" className="btn mt-5 btn-custom btn-primary btn-block rounded-pill btn-lg login-button">Login</button>
                      <p className="mt-3 font-weight-normal">Don't have an account <Link to="/sign-up"><strong className="text-primary" data-toggle="modal" data-target="#sign-up">Register now</strong></Link></p>
                  </form>
              </div>

        
    )
}

export default SignIn
