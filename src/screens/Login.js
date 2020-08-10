import React from 'react'
import './Login.css';
function Login() {
  return (
    <div className="container">


    <div  className = 'container' id='right2'>

    
    <div   className='nechykaro'>


    <div className="form-group" >

    <img src="/images/lo.png" alt = "alt"/>
    </div>
    <div className="form-group" id="feilds">
    <input type="text"  id="input_width" className="form-control item" placeholder="Email Adress"/>
    <i className="fas fa-envelope"></i>
    </div>
    <div className="form-group" id="feilds">
    <input type="password" id="input_width" className="form-control item"  placeholder="Passowrd"/>
    <i className="fas fa-address-card"></i>
    </div>
    <div className="form-group" id="feilds">
    <button type="button" className="btn">Login</button>
    </div>

    </div>

    

</div>


















    <div  className = 'container' id='left1'>

    <div className="rightside">
    <h3>Register</h3>
    <label  id ="rightsidelable">
    Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or some different stuff.
    </label>
    <img src="/images/law.png" alt = "alt"/>
    </div>


    
    </div>

	
	
  </div>

  )
}

export default Login
