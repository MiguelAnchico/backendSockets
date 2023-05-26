const express = require('express');
const Mensaje = require('../Models/MessageScheme');

const obtenerMensajes = async (req, res = express.request) => {
	try {
		const mensajes = await Mensaje.find();

		res.status(200).json({
			ok: true,
			mensajes,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Error Interno',
		});
	}
};

const crearMensaje = async (req, res = express.request) => {
	try {
		let mensaje = new Mensaje(req.body);
		await mensaje.save();

		res.status(200).json({
			ok: true,
			mensaje,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			error,
		});
	}
};

module.exports = {
	obtenerMensajes,
	crearMensaje
};