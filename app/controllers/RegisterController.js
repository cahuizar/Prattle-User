var blueprint = require ('@onehilltech/blueprint')
      request =  require ('superagent')
  ;

function RegisterController () {
  blueprint.BaseController.call (this);
}

blueprint.controller (RegisterController);

RegisterController.prototype.completeSignUp = function () {
  return function (req, res) {
  // Error: User is not initialized
  // var user = new User ({
  //   "username" : req.body.username,
  //   "firstName" : req.body.firstName,
  //   "middleName" : req.body.middleName,
  //   "lastName" : req.body.lastName,
  //   "emailAddress" :  req.body.emailAddress,
  //   "password" : req.body.password
  // });
     var user = {
       "firstName" : req.body.firstName,
       "middleName" : req.body.middleName,
       "lastName" : req.body.lastName,
       "emailAddress" :  req.body.emailAddress,
       "password" : req.body.password,
        "handle" : req.body.username,
    };
    console.log('Username: '+user.username);
    console.log('First Name: '+user.firstName);
    console.log('Middle Name: '+user.middleName);
    console.log('Last Name: '+user.lastName);
    console.log('Email: '+user.emailAddress);
    console.log('Password: '+user.password);
    request
        .post('localhost:5000/api/v1/users')
        .send(user)
        .end(function (err, resp){
          if(err){
            console.log(err);
          }
          else{
            return res.render('/dashboard', {});
          }
        });
  };

};

module.exports = RegisterController;
