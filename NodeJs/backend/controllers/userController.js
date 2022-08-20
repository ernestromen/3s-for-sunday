const {User} = require('../models/User');


  class userController{
    
    store(data){
         new User().storeUserData(data);
     }

  }
  
 


module.exports ={
userController
}