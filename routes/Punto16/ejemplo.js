const express = require('express'),
      var1 = require('../models/Elemento1'),
      {verificarToken} = require('../server/middlewares/auth'),
      router = express.Router();

router.post('/create',[verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let var2 = {
        texto:body.texto,
    }

    var1.create(var2,(err,var2Bd) => {
        if (err) {
            res.status(400).json({
                message: 'error al crear punto16',
                err
            })
        }

        res.json({
            ok:true,
            var2Bd
        })
    })
})


router.get('/', [verificarToken], (req,res) => {
    var1.find().
    exec((err,var3) => {
        if (err) {
            res.status(400).json({
                message: 'error al traer los Aspectos',
                err
            })
        }

        res.json({
            ok:true,
            var3
        })
    })
})

module.exports = router;