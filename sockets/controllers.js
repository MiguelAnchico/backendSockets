let chats = [];

const socketController = (socket, io) => {
    socket.on("welcome", user => {
        // Crea la sala del restaurante o añade el socket
        chats.push(socket);

        socket.name = user.name;

        // Avisar del cambio de la Lista de Usuarios
        const lista = chats.map(client => client.name);
        io.emit("lista-usuarios", lista);

        // Broadcast sobre ingreso de usuario
        socket.broadcast.emit("nuevo-usuario", "El usuario " + socket.name + " ha ingresado a la sala");
    });

    socket.on("message", msg => {
        // Enviar Mensaje
        socket.broadcast.emit("nuevo-usuario", msg);
    });

    const leave = () => {
        let i = 0;
        // Borra el Usuario del Chat
        chats = chats.filter((cliente) => cliente != socket);

        // Avisar del cambio de la Lista de Usuarios
        const lista = chats.map(x => x.name);
        io.emit("lista-usuarios", lista);

        // Broadcast sobre ingreso de usuario
        socket.broadcast.emit("salida-usuario", "El usuario " + socket.name + " se ha desconectado");
    }

    socket.on("disconnect", leave);
};

module.exports = { socketController };