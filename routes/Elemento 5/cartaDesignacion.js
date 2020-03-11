const express = require('express'),
      cartaDesignacion = require('../../models/Elemento5/cartaDesignacionModel'),
      {verificarToken} = require('../../server/middlewares/auth'),
      router = express.Router();

      //Crear en la base de datos
      router.post('/create',[verificarToken],(req,res)=>{
          const body = req.body;
          console.log(body);
          let newDatos ={
            nombre:body.nombre,
            nombreEstacion:body.nombreEstacion,
            correo:body.correo,
            telefono:body.telefono,
            estado:body.estado,
            ciudad:body.ciudad,
            colonia:body.colonia,
            cp:body.cp,
            calle:body.calle

          }

          cartaDesignacion.create(newDatos,(err,crearCartaDesignacion)=>{
              if(err){
                  res.status(400).json({
                      message:'Error al crear la carta designacion',
                      err
                  })
                  res.json({
                      ok:true,
                      crearCartaDesignacion
                  })
              }
          })
          
      })

      module.exports = router;