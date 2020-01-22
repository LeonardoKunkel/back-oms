const mongoose = require('mongoose'),
        moment = require('moment');

const evaluacionRiesgosSchema = new mongoose.Schema({
    F1: {
        type:Boolean,
        required:true,
        default:false
    },
    C1: {
        type:Boolean,
        required:true,
        default:false
    },
    R1: {
        type:Boolean,
        required:true,
        default:false
    },
    F2: {
        type:Boolean,
        required:true,
        default:false
    },
    C2: {
        type:Boolean,
        required:true,
        default:false
    },
    R2: {
        type:Boolean,
        required:true,
        default:false
    },
    F3: {
        type:Boolean,
        required:true,
        default:false
    },
    C3: {
        type:Boolean,
        required:true,
        default:false
    },
    R3: {
        type:Boolean,
        required:true,
        default:false
    },
    F4: {
        type:Boolean,
        required:true,
        default:false
    },
    C4: {
        type:Boolean,
        required:true,
        default:false
    },
    R4: {
        type:Boolean,
        required:true,
        default:false
    },
    F5: {
        type:Boolean,
        required:true,
        default:false
    },
    C5: {
        type:Boolean,
        required:true,
        default:false
    },
    R5: {
        type:Boolean,
        required:true,
        default:false
    },
    F6: {
        type:Boolean,
        required:true,
        default:false
    },
    C6: {
        type:Boolean,
        required:true,
        default:false
    },
    R6: {
        type:Boolean,
        required:true,
        default:false
    },
    F7: {
        type:Boolean,
        required:true,
        default:false
    },
    C7: {
        type:Boolean,
        required:true,
        default:false
    },
    R7: {
        type:Boolean,
        required:true,
        default:false
    },
    F8: {
        type:Boolean,
        required:true,
        default:false
    },
    C8: {
        type:Boolean,
        required:true,
        default:false
    },
    R8: {
        type:Boolean,
        required:true,
        default:false
    },
    F9: {
        type:Boolean,
        required:true,
        default:false
    },
    C9: {
        type:Boolean,
        required:true,
        default:false
    },
    R9: {
        type:Boolean,
        required:true,
        default:false
    },
    F10:{
        type:Boolean,
        required:true,
        default:false
    },
    C10:{
        type:Boolean,
        required:true,
        default:false
    },
    R10:{
        type:Boolean,
        required:true,
        default:false
    },
    F11:{
        type:Boolean,
        required:true,
        default:false
    },
    C11:{
        type:Boolean,
        required:true,
        default:false
    },
    R11:{
        type:Boolean,
        required:true,
        default:false
    },
    F12:{
        type:Boolean,
        required:true,
        default:false
    },
    C12:{
        type:Boolean,
        required:true,
        default:false
    },
    R12:{
        type:Boolean,
        required:true,
        default:false
    },
    F13:{
        type:Boolean,
        required:true,
        default:false
    },
    C13:{
        type:Boolean,
        required:true,
        default:false
    },
    R13:{
        type:Boolean,
        required:true,
        default:false
    },
    F14:{
        type:Boolean,
        required:true,
        default:false
    },
    C14:{
        type:Boolean,
        required:true,
        default:false
    },
    R14:{
        type:Boolean,
        required:true,
        default:false
    },
    F15:{
        type:Boolean,
        required:true,
        default:false
    },
    C15:{
        type:Boolean,
        required:true,
        default:false
    },
    R15:{
        type:Boolean,
        required:true,
        default:false
    },
    F16:{
        type:Boolean,
        required:true,
        default:false
    },
    C16:{
        type:Boolean,
        required:true,
        default:false
    },
    R16:{
        type:Boolean,
        required:true,
        default:false
    },
    F17:{
        type:Boolean,
        required:true,
        default:false
    },
    C17:{
        type:Boolean,
        required:true,
        default:false
    },
    R17:{
        type:Boolean,
        required:true,
        default:false
    },
    F18:{
        type:Boolean,
        required:true,
        default:false
    },
    C18:{
        type:Boolean,
        required:true,
        default:false
    },
    R18:{
        type:Boolean,
        required:true,
        default:false
    }

})
module.exports = mongoose.model('Evaluacion Riesgos',evaluacionRiesgosSchema);
