const   express = require('express'),
        bcrypt  = require('bcrypt'),
        Usuario    = require('../models/UsuarioModel'),
        { verificarToken, verificaAdmin } = require('../server/middlewares/auth'),
        router  = express.Router();

router.post('/create', function (req, res) {
    let body = req.body;
    let newUser = new Usuario({
        username: body.username,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role 
    })

    newUser.save((err, userStored)=>{

        if(err) {
            return res.status(400).json({
                message: 'Error al crear un usuario',
                err
            })
        }

        res.json({
            ok: true,
            usuario: userStored
        })
    })
})

module.exports = router;