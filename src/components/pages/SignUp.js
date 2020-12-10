import React, {Component} from 'react'
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../App.css'
import './SignUp.css'
import {Redirect } from 'react-router-dom'
//import axios from 'axios'

import PropTypes from 'prop-types';

class SignUp extends Component{
    state = {
        username: '',
        password: '',
        email: ''
      };
    
      handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
          const newState = { ...prevstate };
          newState[name] = value;
          return newState;
        });
      };
     
    render(){
        if(!this.props.logged_in){
        if(!this.props.search){
        return (
        
                <div className="sign--up">
                  <h1 className="text-center">Registration form</h1>
                  <hr/>
                  <form className="form-group text-center" onSubmit={e => this.props.handle_signup(e, this.state)}>                     
                  <div className="row">
                  <div className="col-lg-12">
                  <label className="font-weight-bold">Username:</label>
                  <input type="text" id="userNameSignUp" name="username" value={this.state.username} onChange={this.handle_change}
                  className="form-control" placeholder="Enter your Username......"/>
                                               
                  </div>
                  </div> 
                                      
                  <label className="font-weight-bold">Email</label>
                  <input type="email" id="emailSignUp" name="email" value={this.state.email} onChange={this.handle_change}
                  className="form-control" placeholder="Enter your Email....."/>
                
                                     
                  <div className="row">
                  <div className="col-lg-6">
                  <label className="font-weight-bold">Password:</label>
                  <input type="password" id="passwordSignUp" name="password" value={this.state.password} onChange={this.handle_change}
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
                    else{
                      return <Redirect to={'/search?key=' + this.props.search}/>
                    }
        }
        else{
          return <Redirect to='/' />
        }
    }
}

SignUp.propTypes = {
  handle_signup: PropTypes.func.isRequired,
  logged_in: PropTypes.bool.isRequired,
  search: PropTypes.string.isRequired,
};
export default SignUp

 
// class SignUp extends Component {
//     constructor(props){
//         super(props)

//         this.state = {
//             username: '',
//             email: '',
//             password: ''
//         }
//     }
//     passwordHash = require('password-hash')
//     my_data = []
//     link_url = []
//     componentDidMount()
//     {
//         axios({
//             method:'GET',
//             url: this.link_url,
//             data: this.state
//         })
//         .then(reponse => {
//             this.my_data = reponse
//             console.log(reponse)
//         })
//         .catch(error => {
//             console.log(error)
//         })
    
//     }
    
//     changeHandler = e =>  {
//         this.setState({[e.target.name]: e.target.value})
        
//     }
//     check_state = false
//     submitHandler = e => {
//         e.preventDefault()
//         console.log(this.state)
//         this.link_url = "http://127.0.0.1:8000/check_exist_user/" + this.state.username;

        

//         axios({
//             method:'GET',
//             url: this.link_url,
//             data: this.state
//         })
//         .then(reponse => {
//             if(reponse['data'])
//             {
//                 console.log("Account exist")
//             }
//             else
//             {
//                 this.state.password = this.passwordHash.generate(this.state.password)
//                 console.log(this.state.password)
//                 axios({
//                 method:'POST',
//                 url: "http://localhost:8000/api/add_user/",
//                 data: this.state
//                 })
//                 .then(reponse => {
//                     console.log(reponse)
//                 })
//                 .catch(error => {
//                     console.log(error)
//                 })   
//             }
//         })
//         .catch(error => {
//             console.log(error)
//         })



//        // console.log(this.my_data)
//         // axios({
//         //     method:'POST',
//         //     url: "http://localhost:8000/api/add_user/",
//         //     data: this.state
//         // })
//         // .then(reponse => {
//         //     console.log(reponse)
//         // })
//         // .catch(error => {
//         //     console.log(error)
//         // })

//     }

//     render() {
//         const {username, email, password} = this.state
//         return (
        
//             <div className="sign--up">
//                         <h1 className="text-center">Registration form</h1>
//                         <hr/>
//                         <form className="form-group text-center" onSubmit = {this.submitHandler}>
                          
//                             <div className="row">
//                                 <div className="col-lg-12">
//                                     <label className="font-weight-bold">Username:</label>
//                                     <input type="text" id="userNameSignUp" name="username" value={username} onChange={this.changeHandler}
//                                     className="form-control" placeholder="Enter your Username......"/>
                                   
//                                 </div>
//                             </div> 
                          
//                             <label className="font-weight-bold">Email</label>
//                             <input type="email" id="emailSignUp" name="email" value={email} onChange={this.changeHandler}
//                             className="form-control" placeholder="Enter your Email....."/>
    
                         
//                             <div className="row">
//                                 <div className="col-lg-6">
//                                     <label className="font-weight-bold">Password:</label>
//                                     <input type="password" id="passwordSignUp" name="password" value={password} onChange={this.changeHandler}
//                                     className="form-control" placeholder="Enter new Password......"/>
//                                 </div>
//                                 <span id="security-password"></span>
//                                 <div class="col-lg-6">
//                                     <label className="font-weight-bold">Re-type Password:</label>
//                                     <input type="password" id="rePasswordSignUp" name="s_R_password" className="form-control" placeholder="Enter Password again......"/>
//                                 </div>
//                             </div>
//                             <br />
//                             <select id="genderSignUp" name="s_gender"  onChange={this.changeHandler}
//                             className="form-control form-control-lg" >
//                                 <option>Male</option>
//                                 <option>Female</option>
//                                 <option>Other</option>
//                             </select>
//                             <br />
//                             <p>
//                                 <span id="alert-box"></span>
//                             </p>
//                            <input type="submit" name="submit" value="Submit" className="btn btn-primary btn-block btn-lg"/>
//                        </form>
//             </div>
//         )
//     }
   
// }

// export default SignUp
