import React from 'react'
import './Register.css';
import {Link} from 'react-router-dom'
function Register() {
  return (
    <div className="container">


    <div  className = 'container' id='left'>
    
    <div className="form-group" >

<img src="/images/lo.png" alt = "alt"/>
</div>
    <div className="form-group" id="feilds">
<input type="text"  id="input_width" className="form-control item" placeholder="Full Name"/>
<i class="fas fa-user-tie"></i>
</div>
<div className="form-group" id="feilds">
<input type="text" id="input_width" className="form-control item"  placeholder="Company name (optional)"/>
<i class="material-icons">business</i>

</div>

<label id='date1'>Date of Birth</label>

<input className="form-control" type="date"  id="example-date-input"/>

<div className="form-group" id="feilds">
<input type="text"  id="input_width" className="form-control item" placeholder="Email Adress"/>
<i className="fas fa-envelope"></i>
</div>
<div className="form-group" id="feilds">
<input type="text" id="input_width" className="form-control item"  placeholder="Notary Comission ID "/>
<i className="fas fa-address-card"></i>
</div>
<label id='date'>Notary Expiration Date</label>
<input className="form-control" type="date"  id="example-date-input"/>

<div className="form-group" id="feilds" >
<input type="text"  id="input_width" className="form-control item"  placeholder="Billing & Mailing Adress"/>
<i className="fas fa-credit-card"></i>
</div>
<p id ="pp">
Are you currently registered as an online notary with the Secratary of State?
</p>
<div className="radio">
  
<form action="#">

<input type="radio" name="gender" value="male"/>    Yes
<Link to='/login' className = 'link'><input type="radio" name="gender" value="female"/>    No</Link>
  </form>
  </div>

<div className="form-group" id="feilds">
<button type="button" className="btn">Register</button>
</div>
    </div>
    <div  className = 'container' id='right'>

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

export default Register
