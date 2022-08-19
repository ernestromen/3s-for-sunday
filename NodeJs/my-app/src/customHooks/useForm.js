import { useState } from 'react';

const UseForm =()=> {

    const [formData, setFormData] = useState({
        name:'',
        company:'',
        email:'',
        password:'',
      });

   

    const handlechange = (e)=>{
        e.preventDefault();
      
        const {name,value} = e.target;
   
        setFormData(state=>({...state,[name]:value}));
        
      
      }
      return [formData,handlechange,setFormData];

}

export default UseForm
