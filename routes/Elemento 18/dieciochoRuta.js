const express = require ('express'),
      dieciochoModel = require ('../../models/Elemento18/dieciochoModel'),
      { verificarToken } = require ('../../server/middlewares/auth'),
      router = express.Router();
      
router.post('/create', [verificarToken], (req, res) => {
   const body = req.body;
   console.log(body);
   let newDatos = {
    nombre: body.nombre,
    apellido: body.apellido,
    edad: body.edad,
    telefono: body.telefono,
    mail: body.mail
   };
   
   dieciochoModel.create(newDatos, (err, crearDieciocho) => {
    if (err) {
        res.status(400).json ({
            message: 'Error al guardar',
            err
        });
    }
    res.json ({
        ok: true,
        crearDieciocho
    });
   });
});
module.exports = router;
