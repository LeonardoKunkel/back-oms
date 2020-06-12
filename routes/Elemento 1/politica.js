const express = require('express'),
      politicas= require('../../models/Elemento1/elementoUnoModel'),
      {verificarToken} = require('../../server/middlewares/auth'),
      router = express.Router();

            //Crear en la base de datos
      router.post('/create',[verificarToken],(req,res)=>{
        const body = req.body;
        console.log(body);
        let newPolitica ={
            politica: body.politica
        }

        politicas.create(newPolitica,(err, crearPolitica)=>{
            if (err){
                res.status(400).json({
                    message:'Error al guardar politica',
                    err
                })
            }
            res.json({
                ok:true,
                crearPolitica
            })
        })
        
      })

            //Consultar en la base de datos
       router.get('/',[verificarToken],(req,res) =>{
           politicas.find().exec((err,findPolitica)=>{
               if(err){
                  res.status(400).json({
                    message:'No se pudo traer politica',
                    err
                  })
               }
               res.status(200).json({
                   ok:true,
                   findPolitica
               })
           })
       })

            //Actualizar en la base de datos
        
        router.put('/:id',[verificarToken],function(req,res){
            let id = req.params.id;
            const body = req.body;
            const UpdateCuerpo = {
                politica: body.politica
            }

            politicas.findByIdAndUpdate(id,body,{new: true, runValidators: true},(err,usuarioDB)=>{
                //Muestra lo modificado
                if(err){
                    return res.status(400).json({
                        ok:false,
                        err
                    });
                }
                res.json({
                    ok:true,
                    politics: usuarioDB
                });
            })
        }) 

        router.get('/:id',(req, res) =>{
            let id = req.params.id;
            politicas.findById(id,(err, newFindPolitica) =>{
                if (err) {
                    res.status(404).json({
                        ok:false,
                        message:'No se encontro la politica con el id',
                        err
                    })
                }
                res.status(200).json({
                    newFindPolitica
                })
            })
        })
      module.exports = router;