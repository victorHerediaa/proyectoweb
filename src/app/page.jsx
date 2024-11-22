//LOGIN DE AQUI DEBE DE REDIRIGIR SEGUN EL USUARIO

import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="login-page">
            <header className="header">
                <h1>AVT WARRIORS</h1>
            </header>
            <div className="login-container">
                <h2>Iniciar Sesión</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Usuario:</label>
                        <input type="text" id="username" placeholder="Ingrese su usuario" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" placeholder="Ingrese su contraseña" />
                    </div>
                    <button type="submit" className="login-button">Entrar</button>
                </form>
            </div>
            <footer className="footer"></footer>
        </div>
    );
};

export default Login;
