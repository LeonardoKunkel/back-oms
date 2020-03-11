const express = require('express'),
      objetivosMetas= require('../../models/Elemento4/objetivosMetasIndicadoresModel'),
      {verificarToken} = require('../../server/middlewares/auth'),
      router = express.Router();

      //Crear en la base de datos//Crear en la base de datos
      router.post('/create',[verificarToken],(req,res)=>{
        const body = req.body;
        console.log(body);
        let newObjetivos = {
          reduccionGeneracionResiduos : body.reduccionGeneracionResiduos,
          reduccionConsumoAgua:body.reduccionConsumoAgua,
          reduccionConsumoEnergia : body.reduccionConsumoEnergia,
          cumplimientoProgramaMantenimiento :body.cumplimientoProgramaMantenimiento,
          mejorarActividadesSimulacros: body.mejorarActividadesSimulacros,
          incrementarCapacitaciones: body.incrementarCapacitaciones,
          mejorarServicioAtencionCliente:body.mejorarServicioAtencionCliente,
          incrementarVentaAnualmente: body.incrementarVentaAnualmente
            
        }

      objetivosMetas.create(newObjetivos,(err,crearObjetivos)=>{
          if (err) {
              res.status(400).json({
                  message:'Error al guardar las metas objetivos',
                  err
              })
          }
          res.json({
              ok:true,
              crearObjetivos
          })
      })
        
    })

    //Consultar en la base de datos

    router.get('/',[verificarToken],(req,res) =>{
      objetivosMetas.find().exec((err,findMetas)=>{
        if(err){
          res.status(400).json({
            message:'No se pudo consultar'
          })
        }
        res.status(200).json({
          ok:true,
          findMetas
         })

      })
    })

    module.exports = router;