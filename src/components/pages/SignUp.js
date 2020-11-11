import React from 'react'
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../App.css'
import './SignUp.css'



function SignUp() {
    return (
        
        // <h1 className ='sign-up'>SIGN-UP</h1>
        // <form>
        //     <h1 className = 'sign-up'>SIGN-UP</h1>
        //     <div className='form-group'>
        //         <label>First Name</label>
        //         <input type='text' className='form-control' placeholder='First Name'/>
        //     </div>
        //     <div className='form-group'>
        //         <label>Last Name</label>
        //         <input type='text' className='form-control' placeholder='Last Name'/>
        //     </div>
        //     <div className='form-group'>
        //         <label>Email</label>
        //         <input type='email' className='form-control' placeholder='Email'/>
        //     </div>
        //     <div className='form-group'>
        //         <label>Password</label>
        //         <input type='password' className='form-control' placeholder='Password'/>
        //     </div>
        //     <div className='form-group'>
        //         <label>Confirm Password</label>
        //         <input type='password' className='form-control' placeholder='Confirm Password'/>
        //     </div>
        //     <button className='btn btn-primary btn-block'>Sign up</button>
        // </form>
        <div className="sign--up">
                    <h1 className="text-center">Registration form</h1>
                    <hr/>
                    <form className="form-group text-center" method="POST">
                      
                        <div className="row">
                            <div className="col-lg-12">
                                <label className="font-weight-bold">Username:</label>
                                <input type="text" id="userNameSignUp" name="s_user_name" className="form-control" placeholder="Enter your Username......"/>
                               
                            </div>
                        </div> 
                      
                        <label className="font-weight-bold">Email</label>
                        <input type="email" id="emailSignUp" name="s_email" className="form-control" placeholder="Enter your Email....."/>

                     
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="font-weight-bold">Password:</label>
                                <input type="password" id="passwordSignUp" name="s_password" className="form-control" placeholder="Enter new Password......"/>
                            </div>
                            <span id="security-password"></span>
                            <div class="col-lg-6">
                                <label className="font-weight-bold">Re-type Password:</label>
                                <input type="password" id="rePasswordSignUp" name="s_R_password" className="form-control" placeholder="Enter Password again......"/>
                            </div>
                        </div>
                        <br />
                        <select id="genderSignUp" name="s_gender" className="form-control form-control-lg" >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                        <br />
                        <p>
                            <span id="alert-box"></span>
                        </p>
                       <input type="submit" name="submit" value="Submit" className="btn btn-primary btn-block btn-lg"/>
                   </form>
        </div>
    )
}

export default SignUp
