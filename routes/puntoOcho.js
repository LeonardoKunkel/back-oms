const express = require('express'),
                {verificarToken} = require('../server/middlewares/auth'),
                Puntoocho = require('../models/puntoochoModel')
                router = express.Router();

router.post('/create', [verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let newPuntoocho = {
        politica: body.politica,
        identificacioPeligros:body.identificacioPeligros,
        objetivosMetas:body.objetivosMetas,
        funcionesResponsabilidades:body.funcionesResponsabilidades,
        copetenciaPersonal:body.copetenciaPersonal,
        comunicacionParticipacion:body.comunicacionParticipacion,
        controlDocumentos:body.controlDocumentos,
        mejoresPracticas:body.mejoresPracticas,
        controlActividades:body.controlActividades,
        integridadMecanica:body.integridadMecanica,
        seguridadContratistas:body.seguridadContratistas,
        respuestasEmergencias:body.respuestasEmergencias,
        monitoreoVerificacion:body.monitoreoVerificacion,
        auditorias:body.auditorias,
        investigacionAccidente:body.investigacionAccidente,
        revisionResultados:body.revisionResultados,
        informeDesempeño:body.informeDesempeño,
        receocionAutotanque:body.receocionAutotanque,
        despachoProductos:body.despachoProductos,
        lineasElectricas:body.lineasElectricas,
        lineasProducto:body.lineasProducto,
        fuentesIgnicion:body.fuentesIgnicion,
        trabajoEscaleras:body.trabajoEscaleras,
        trabajoAreasConfinadas:body.trabajoAreasConfinadas,
        permisoTrabajoPeligroso:body.permisoTrabajoPeligroso,
        administracionCambioTecnologia:body.administracionCambioTecnologia,
        mantenimientoDispensarios:body.mantenimientoDispensarios,
        mantenimientoTanques:body. mantenimientoTanques,
        mantenimientoElectricos:body.mantenimientoElectricos,
        mantenimientoEdificios:body.mantenimientoEdificios,
        mantenimientoDrenajes:body.mantenimientoDrenajes,
        mantenimientoMaquinas:body.mantenimientoMaquinas,
        planesEmergencia:body.planesEmergencia,
        metodologiaArbolFallas:body.metodologiaArbolFallas,
        procedimientoPracticas:body.procedimientoPracticas,
        listaDocumentosInternos:body.listaDocumentosInternos,
        solicitudCambios:body.olicitudCambios,
        listaDistribucionDocumentos:body.listaDistribucionDocumentos,
        listaComunicacion:body.listaComunicacion,
        quejasSugerencias:body.quejasSugerencias,
        evaluacionAspectoAmbiental:body.evaluacionAspectoAmbiental,
        evaluacionRiesgos:body.evaluacionRiesgos,
        resultadoAnalisisRiesgos:body.resultadoAnalisisRiesgos,
        listadoRiesgosAspectosAmbientales:body.listadoRiesgosAspectosAmbientales,
        objetivosMetaIndicadores:body.objetivosMetaIndicadores,
        matrizResponsabilidad:body.matrizResponsabilidad,
        perfilPuestoTrabajo:body.erfilPuestoTrabajo,
        detaccionNecesidadesCapacitacion:body.detaccionNecesidadesCapacitacion,
        programaCapacitacion:body.programaCapacitacion,
        listadoCodigosEstandares:body.listadoCodigosEstandares,
        administracionCambioTecnologia:body.administracionCambioTecnologia,
        programacionMantenimiento:body.programacionMantenimiento,
        listadoEquipoCritico:body.listadoEquipoCritico,
        listadoRequisitosLegales:body.listadoRequisitosLegales,
        anexoSeguridadContratistas:body.anexoSeguridadContratistas,
        actaIntegracionBrigadas:body.actaIntegracionBrigadas,
        programaSimulacros:body.programaSimulacros,
        planeacionSimulacros:body.planeacionSimulacros,
        EvaluacionSimulacros:body.EvaluacionSimulacros,
        programaMonitoreoMedicion:body.programaMonitoreoMedicion,
        resultadosMonitoreoParametros:body.resultadosMonitoreoParametros,
        evaluacionCumplimientoRequisitos:body.evaluacionCumplimientoRequisitos,
        resultadosMonitoreosParametrosDesempeño:body.resultadosMonitoreosParametrosDesempeño,
        evaluacionCumplimientoRequisitosLegales:body.evaluacionCumplimientoRequisitosLegales,
        planAtencion:body.planAtencion,
        programaAuditorias:body.programaAuditorias,
        planAuditoria:body.planAuditoria,
        informeAuditoria:body.informeAuditoria,
        planAtencionHallazgos:body.planAtencionHallazgos,
        revisionDireccion:body.revisionDireccion,
        inspeccionTanques:body.inspeccionTanques,
        pruebaOperativa:body.pruebaOperativa,
        inspeccionDispensarios:body.inspeccionDispensarios,
        inspeccionAccesorios:body.inspeccionAccesorios,
        inspeccionInstalaciones:body.inspeccionInstalaciones,
        programaLimpieza:body.programaLimpieza,
        inspeccionMensual:body.inspeccionMensual,
        inspeccionSeñalamiento:body.inspeccionSeñalamiento,
        permisoTrabajoPeligroso2:body.permisoTrabajoPeligroso2,
        formatoAcr:body.formatoAcr,
        entrevistaPersonal:body.entrevistaPersonal,
        comprobacionHipotesis:body.comprobacionHipotesis,
        recomendaccionIcr:body.recomendaccionIcr,
        estadisticaInsidencias:body.estadisticaInsidencias,
        codificacion:body.codificacion,
        nombreDocumento:body.nombreDocumento,
        elementoSistema:body.elementoSistema,
        nombreSolicitante:body.nombreSolicitante,
        fecha:body.fecha,
        procedimientoSistema:body.procedimientoSistema,
        formatoSistema:body.formatoSistema,
        procedimientoEspecifico:body.procedimientoEspecifico,
        formatoOperativo:bodyformatoOperativo,
        origenCambio:body.origenCambio,
        sugerencia:body.sugerencia,
        recomendaccionIcr2:body.recomendaccionIcr2,
        cambioTecnologia:body.cambioTecnologia,
        hallazgoAuditoria:body.hallazgoAuditoria,
        accionMejora:body.accionMejora,
        cambioProceso:body.cambioProceso,
        estadoActual:body.estadoActual,
        cambioPropuesto:body.cambioPropuesto,
        aceptada:body.aceptada,
        rechazada:body.rechazada,
        fechaEntrega:body.fechaEntrega,
        nombreDocumento2:body.nombreDocumento2,
        codigo:body.codigo,
        fechaDocumento:body.fechaDocumento,
        fechaDocumentoSustituye:body.fechaDocumentoSustituye,
        nombrePersonaFirma:body.nombrePersonaFirma




    }

    Puntoocho.create(newPuntoocho, (err,newPuntoocho) => {
        if (err) {
            res.json({
                message: 'Error al guardar Punto Ocho',
                err
            })
        }
        newPuntoocho.save();
        res.json({
            ok:true,
            newPuntoocho
        })
    })
})

router.get('/:id', [verificarToken], (req, res) => {
    const id = req.params.id;
    Puntoocho.findById(id)
            .exec((err, puntoochoDB) => {
                if (err) {
                    return res.status(500).json({
                        message: 'no se pudo cargar el punto dos',
                        err
                    })
                }
                res.json({
                    ok:true,
                    puntoochoDB
                })
            })
})
