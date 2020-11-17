import React, {Component} from 'react'
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../App.css'
import './SignUp.css'
import axios from 'axios'


 
class SignUp extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    changeHandler = e =>  {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios({
            method:'POST',
            url: "http://localhost:8000/api/add_user/",
            data: this.state
        })
        .then(reponse => {
            console.log(reponse)
        })
        .catch(error => {
            console.log(error)
        })

    }

    render() {
        const {username, email, password} = this.state
        return (
        
            <div className="sign--up">
                        <h1 className="text-center">Registration form</h1>
                        <hr/>
                        <form className="form-group text-center" onSubmit = {this.submitHandler}>
                          
                            <div className="row">
                                <div className="col-lg-12">
                                    <label className="font-weight-bold">Username:</label>
                                    <input type="text" id="userNameSignUp" name="username" value={username} onChange={this.changeHandler}
                                    className="form-control" placeholder="Enter your Username......"/>
                                   
                                </div>
                            </div> 
                          
                            <label className="font-weight-bold">Email</label>
                            <input type="email" id="emailSignUp" name="email" value={email} onChange={this.changeHandler}
                            className="form-control" placeholder="Enter your Email....."/>
    
                         
                            <div className="row">
                                <div className="col-lg-6">
                                    <label className="font-weight-bold">Password:</label>
                                    <input type="password" id="passwordSignUp" name="password" value={password} onChange={this.changeHandler}
                                    className="form-control" placeholder="Enter new Password......"/>
                                </div>
                                <span id="security-password"></span>
                                <div class="col-lg-6">
                                    <label className="font-weight-bold">Re-type Password:</label>
                                    <input type="password" id="rePasswordSignUp" name="s_R_password" className="form-control" placeholder="Enter Password again......"/>
                                </div>
                            </div>
                            <br />
                            <select id="genderSignUp" name="s_gender"  onChange={this.changeHandler}
                            className="form-control form-control-lg" >
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
   
}

export default SignUp
