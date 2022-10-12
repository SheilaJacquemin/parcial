const User = require("../models/users.model");
const generarJWT = require("../helpers/generator_jwt");
const bcrypt = require('bcrypt');


const ctrlLogin = {};

ctrlLogin.iniciarSesion = async (req, res) => {

    const { username, password } = req.body;

    try {
        // Buscar si el usuario pertenece a nuestro sistema
        const user = await User.findOne({ username });

        if (!user) {
            return res.json({
                ok: false,
                msg: 'Error al autenticarse' - 'Usuario no encontrado'
            });
        }

        if (!user.isActive) {
            return res.json({
                ok: false,
                msg: 'Error al autenticarse' - 'Usuario inactivo'
            });
        }

        // Verificar la contraseña
        const validPassword = bcrypt.compareSync(password, user.password);

        if (!validPassword) {
            return res.json({
                ok: false,
                msg: 'Error al autenticarse' - 'Contraseña incorrecta'
            });
        }

        // Generar el token
        const token = await generarJWT({ uid: user._id })

        return res.json({ token });
    } catch (error) {
        return res.json({ msg: 'Error al iniciar sesión' });
    }
};

module.exports = ctrlLogin;