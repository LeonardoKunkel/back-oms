const   express = require('express'),
        bcrypt  = require('bcrypt'),
        User    = require('../models/UsuarioModel'),
        jwt     = require('jsonwebtoken'),
        router  = express.Router();

router.post('/', (req, res) => {
    
    let body = req.body;
    console.log(body);

    User.findOne({email: body.email}, (err, userDB) => {
        if(err){
            return res.json({
                err
            });
        }

        if(!userDB){
            return res.json({
                err: {
                    message: 'El email es incorrecto'
                }
            });
        }

        if(!bcrypt.compareSync(body.password, userDB.password)) {
            return res.json({
                err: {
                    message: 'La contraseña es incorrecta'
                }
            });
        }

        let token = jwt.sign({
            user: userDB,   
        },
        process.env.SEED,
        {expiresIn: process.env.CADUCIDAD_TOKEN}
        );

        res.json({
            ok: true,
            token
        });
    });
});

module.exports = router;
