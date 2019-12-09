const mongoose = require('mongoose'),
        moment = require('moment');

const evaluacionRiesgosSchema = new mongoose.Schema({
    F1: {
        type:Number,
        required:true,
        default:false
    },
    C1: {
        type:Number,
        required:true,
        default:false
    },
    R1: {
        type:Number,
        required:true,
        default:false
    },
    F2: {
        type:Number,
        required:true,
        default:false
    },
    C2: {
        type:Number,
        required:true,
        default:false
    },
    R2: {
        type:Number,
        required:true,
        default:false
    },
    F3: {
        type:Number,
        required:true,
        default:false
    },
    C3: {
        type:Number,
        required:true,
        default:false
    },
    R3: {
        type:Number,
        required:true,
        default:false
    },
    F4: {
        type:Number,
        required:true,
        default:false
    },
    C4: {
        type:Number,
        required:true,
        default:false
    },
    R4: {
        type:Number,
        required:true,
        default:false
    },
    F5: {
        type:Number,
        required:true,
        default:false
    },
    C5: {
        type:Number,
        required:true,
        default:false
    },
    R5: {
        type:Number,
        required:true,
        default:false
    },
    F6: {
        type:Number,
        required:true,
        default:false
    },
    C6: {
        type:Number,
        required:true,
        default:false
    },
    R6: {
        type:Number,
        required:true,
        default:false
    },
    F7: {
        type:Number,
        required:true,
        default:false
    },
    C7: {
        type:Number,
        required:true,
        default:false
    },
    R7: {
        type:Number,
        required:true,
        default:false
    },
    F8: {
        type:Number,
        required:true,
        default:false
    },
    C8: {
        type:Number,
        required:true,
        default:false
    },
    R8: {
        type:Number,
        required:true,
        default:false
    },
    F9: {
        type:Number,
        required:true,
        default:false
    },
    C9: {
        type:Number,
        required:true,
        default:false
    },
    R9: {
        type:Number,
        required:true,
        default:false
    },
    F10:{
        type:Number,
        required:true,
        default:false
    },
    C10:{
        type:Number,
        required:true,
        default:false
    },
    R10:{
        type:Number,
        required:true,
        default:false
    },
    F11:{
        type:Number,
        required:true,
        default:false
    },
    C11:{
        type:Number,
        required:true,
        default:false
    },
    R11:{
        type:Number,
        required:true,
        default:false
    },
    F12:{
        type:Number,
        required:true,
        default:false
    },
    C12:{
        type:Number,
        required:true,
        default:false
    },
    R12:{
        type:Number,
        required:true,
        default:false
    },
    F13:{
        type:Number,
        required:true,
        default:false
    },
    C13:{
        type:Number,
        required:true,
        default:false
    },
    R13:{
        type:Number,
        required:true,
        default:false
    },
    F14:{
        type:Number,
        required:true,
        default:false
    },
    C14:{
        type:Number,
        required:true,
        default:false
    },
    R14:{
        type:Number,
        required:true,
        default:false
    },
    F15:{
        type:Number,
        required:true,
        default:false
    },
    C15:{
        type:Number,
        required:true,
        default:false
    },
    R15:{
        type:Number,
        required:true,
        default:false
    },
    F16:{
        type:Number,
        required:true,
        default:false
    },
    C16:{
        type:Number,
        required:true,
        default:false
    },
    R16:{
        type:Number,
        required:true,
        default:false
    },
    F17:{
        type:Number,
        required:true,
        default:false
    },
    C17:{
        type:Number,
        required:true,
        default:false
    },
    R17:{
        type:Number,
        required:true,
        default:false
    },
    F18:{
        type:Number,
        required:true,
        default:false
    },
    C18:{
        type:Number,
        required:true,
        default:false
    },
    R18:{
        type:Number,
        required:true,
        default:false
    }

})
module.exports = mongoose.model('Evaluacion Riesgos',evaluacionRiesgosSchema);
