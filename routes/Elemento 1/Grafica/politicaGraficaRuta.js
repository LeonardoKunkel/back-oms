const express = require('express'),
      politicaGrafica = require('../../../models/Elemento1/Grafica/SeleccionPoliticaModel'),
      {verificarToken} = require('../../../server/middlewares/auth'),
      router = express.Router();

      //Crear en la base de datos
    router.post('/create',(req,res)=>{
        const body = req.body;
        console.log(body);
        let newSelecionPoliticaGrafica = {
            selecionPolitica: body.selecionPolitica
        }

        politicaGrafica.create(newSelecionPoliticaGrafica,(err, crearPoliticaGrafica)=>{
            if (err) {
                res.status(400).json({
                    message:'Error al guardar el valor de la grafica',
                    err
                })
            }
            res.json({
                ok:true,
                crearPoliticaGrafica
            })
        })
    });

    //Consultar en la base de datos
    router.get('/',(req,res) =>{
        politicaGrafica.find().exec((err,findPoliticaGrafica) =>{
            if(err){
               res.status(400).json({
                 message:'No se pudo traer politica',
                 err
               })
            }
            res.status(200).json({
                ok:true,
                findPoliticaGrafica
            })

        })
    })
    module.exports = router;