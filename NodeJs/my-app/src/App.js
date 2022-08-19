import { useEffect, useState } from 'react';
import './App.css';
import UseForm from './customHooks/useForm';
import UseValidate from './customHooks/useValidate';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import pdt from './images/Group 1359.png';
import pdt2 from './images/Group 76637.png';
import '@fortawesome/fontawesome-free/js/all.js';


const App = () => {
const [formData,handlechange,setFormData] = UseForm();
const [validate,errors,setErrors] = UseValidate();
const [isSubmit,setIsSubmit] = useState(false);
const[networkOkMsg,setNetworkOkMsg ] = useState(false);
const[networkErrorMsg,setNetworkErrorMsg ] = useState(false);
const [showPassword, setShowPassword] = useState(false);

const handleSubmit = (e)=>{
  e.preventDefault();
  setIsSubmit(true);
  validate(formData);
  // e.target.reset();
}

useEffect(()=>{
if(Object.values(errors).join('').length === 0 && isSubmit){
let url = 'http://localhost:4000/';
axios.post(url,formData)
  .then(function (response) {
    // handle success
    if(response.statusText === 'OK'){
      setNetworkOkMsg(true);
      setNetworkErrorMsg(false);
    }else{
      setNetworkErrorMsg(true);
      setNetworkOkMsg(false);
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error,'error');
  })

  setIsSubmit(false);

setTimeout(() => {
  window.location.reload(true);
  
}, 800);
}
},[errors,isSubmit,formData]);


//Hide networks messages after 2 seconds in ui
useEffect(()=>{
setTimeout(() => {
      setNetworkOkMsg(false);
      setNetworkErrorMsg(false);
}, 3000);
},[networkOkMsg,networkErrorMsg])


const handleEye = (e) =>{
  !showPassword ? setShowPassword(true) : setShowPassword(false);
}

return (
<div className="App input-group  justify-content-center">
  <div className='container-fluid'>
    <div className='row'>
     <div style={{'backgroundImage': 'url("'+pdt2+'")','height':'768px'}} className='col-md-3 col-12 order-md-1 order-2'></div>

      <div id="formDiv"  className='formDiv col-xl-6 col-lg-7 col-md-8 col-12  order-md-2 order-1'>
       <div className='container'>
        <div className="row mt-3 mb-5">
          <div style={{'zIndex':'999'}} className= "ps-0 col-6 text-start">
            <div id ="firstcircule">1</div>
            </div>
          <div className = "col-6 text-end justify-content-end d-flex">
          <div id="secondcircule">2</div>
          </div>
          <div id="middlestick" className='col-12'></div>
          <div class="col-6 ps-0 text-start registration" >registration</div>
          <div class="col-6 text-end finish" >finish</div>
        </div>
    
      </div>
      
    <form id="mainform"  onSubmit={handleSubmit}> 
      {/* network errors display */}
      {networkOkMsg ? <h1 style={{'width':'100%','margin':'auto','backgroundColor':'green','color':'white','marginTop':'10px','paddingBottom':'5px','border':'3px solid black','marginBottom':'20px'}}>Post request successful</h1>:''}
      {networkErrorMsg ? <h1 style={{'width':'30%','margin':'auto','backgroundColor':'red','color':'white','marginTop':'10px','paddingBottom':'5px','border':'3px solid black'}}>Post request unsuccessful</h1>:''}
        <img style={{'width':'10%','display':'flex'}} src={pdt}/>

        <h1 style={{'color':'#172354','textAlign':'left'}}>Welcome to intego B2B console</h1>
        <p style={{'textAlign':'left'}}>Lorem ipsum dolor suet amet, consetetur sodpcing eltor,sed diam nonmy eirmod tempor invdunt<br/>utllabore et dolore magna aluqyuyam</p>
        <div className="row">
        <div class="col-6">
        <label style={{'display':'flex'}}>Admin email</label>
        <input
        className="form-control" 
        onChange={handlechange}
        id="email"
        type="text"
        name="email"
        />
        {errors.email ? <div style={{'color':'red','textAlign':'left'}}><span>{errors.email}</span></div>:''}
        </div>

        <div class="col-6">
        <label style={{'display':'flex'}}>Company name</label>
        <input
        className="form-control" 
        onChange={handlechange}
        id="company"
        name="company"
        type="text"/>
        {errors.company ? <div style={{'color':'red','textAlign':'left'}}><span>{errors.company}</span></div>:''}
      </div>

      <div class="col-6">
      <label style={{'display':'flex','marginTop':'40px'}}>Admin name</label>
        <input
        id="name"
        className="form-control" 
        onChange={handlechange}
        type="text"
        name="name"
        />
        {errors.name ? <div style={{'color':'red','textAlign':'left'}}><span>{errors.name}</span></div>:''}
      </div>
      <div class="col-6">
      <label style={{'display':'flex','marginTop':'40px'}}>Admin password</label>
      <input
      className="form-control" 
      onChange={handlechange}
      id="password"
      name="password"
      type={showPassword ? 'text' : 'password'}/>
              <div onClick={handleEye} class="justify-content-end d-flex"><i  class="fas fa-eye-slash" id="eye"></i></div>
      {errors.password ? <div style={{'color':'red','textAlign':'left'}}><span>{errors.password}</span></div>:''}
    </div>
  </div>
      <div className='row'>
        <div className='col-6 d-md-block d-none'></div>
        <div className='col-md-6 col-12 d-flex justify-content-md-end justify-content-center'>
        <input className=' mb-md-0 mb-3 submitBtn border border-dark' type="submit" value="Next"/>
      </div>
      </div>
    </form>
  </div>
      <div className='col-xl-4 col-lg-3 col-2 d-md-block d-none order-md-3 order-3'></div>
    </div>
  </div>
</div>
  );

}




export default App;
