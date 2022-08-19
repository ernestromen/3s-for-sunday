import { useState } from 'react';
const UseValidate = ()=> {

    const [errors,setErrors] = useState({
        name:'',
        company:'',
        email:'',
        password:'',
      });

    const validate = (values) =>{
        if(!values.name){
          setErrors(state=>({...state,'name':'name is required'}));
        }else{
          setErrors(state=>({...state,'name':''}));
        }
        

        
        if(!values.company){

          setErrors(state=>({...state,'company':'company is required'}));
        }else{
          setErrors(state=>({...state,'company':''}));
        }

        if(!values.email){

          setErrors(state=>({...state,'email':'wrong email, please try again'}));
        }else{
          setErrors(state=>({...state,'email':''}));
        }


        if(!values.password){

          setErrors(state=>({...state,'password':'password is required'}));
        }else{


          setErrors(state=>({...state,'password':''}));
        }

        
        }


       
        


        return [validate,errors,setErrors];
}

export default UseValidate
