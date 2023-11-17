const { Router } = require('express');
const route = Router();

// Importar los controladores
const { getDenuncia, postDenuncia, putDenuncia, deleteDenuncia } = require('../controlador/denuncia');

// Rutas para listar todos los datos, agregar, editar y eliminar
route.get('/', getDenuncia);
route.post('/', postDenuncia);
route.put('/', putDenuncia);
route.delete('/', deleteDenuncia);

// Ruta para consultar un dato (aquí deberías especificar un identificador, por ejemplo, un ID de usuario)
route.get('/consultarUsuario', (req, res) => {
    res.json({
        msg: 'Consultar Datos de Usuario'
    });
});

// Puedes tener rutas específicas para agregar, editar y eliminar datos individuales
route.post('/agregar', (req, res) => {
    res.json({
        msg: 'Dato agregado exitosamente'
    });
});

route.put('/editar', (req, res) => {
    res.json({
        msg: 'Dato editado exitosamente'
    });
});

route.delete('/eliminar', (req, res) => {
    res.json({
        msg: 'Dato eliminado exitosamente'
    });
});

module.exports = route;
