const User = require('../models/user');

exports.signup =(req,res)=>{
    
    User.findOne({email: req.body.mail})
    .exec((error, user)=> {
        console.log('hii....');
        if(user) return res.status(400).json({
            message: 'User already registerd'
        });
        const {
            firstName,
            lastName,
            email,
            hash_password
        } = req.body;
        const _user = new User({
            
            firstName,
            lastName,
            email,
            hash_password,
            username: Math.random().toString()
         });

            _user.save((err, data)=> {
                console.log('hii 2....',err);
            if(err){
                return res.status(400).json({
                    message: 'something went worng'
                });
            }    

            if(data){
                return res.status(201).json({
                    user: 'User created Successfully.....'
                    
                });
            }
            });
    }); 
}