const express = require('express'),
      asamCuatro = require('../../../models/Elemento2/aspectosAmbientales/asamCuatroModel'),
      {verificarToken} = require('../../../server/middlewares/auth'),
      router = express.Router();
      
router.post('/create', [verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);
    
    let newAsamCuatro = {
        F30: body.F30,
        F31: body.F31,
        F32: body.F32,
        F33: body.F33,
        N30: body.N30,
        N31: body.N31,
        N32: body.N32,
        N33: body.N33,
        M30: body.M30,
        M31: body.M31,
        M32: body.M32,
        M33: body.M33,
        VT30: body.VT30,
        VT31: body.VT31,
        VT32: body.VT32,
        VT33: body.VT33,
    }
    newAsamCuatro.create(newAsamCuatro,(err,crearAsamcuatro) => {
        if(err) {
            res.status(400).json({
                message: 'error al crear',
                err
            })
        }
        res.json({
            ok: true,
            crearAsamcuatro
        })
    })
    
    router.get('/',[verificarToken],(req,res) => {
        asamCuatro.find().exec((err,findAsamcuatro) => {
            if(err) {
                res.status(400).json({
                    message: 'Error al traer',
                    err
                })
            }
            res.json({
                ok: true,
                findAsamcuatro
            })
        })
    })
})
module.exports = router;