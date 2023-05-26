const { Schema, model } = require('mongoose');

const MensajesSchema = Schema(
	{
		fechaPublicacion: {
			type: Date,
			default: Date.now(),
		},
		contenido: {
			type: String,
			require: true,
		},
		nombre: {
			type: String,
			require: true,
		},
	},
);

module.exports = model('Mensajes', MensajesSchema);