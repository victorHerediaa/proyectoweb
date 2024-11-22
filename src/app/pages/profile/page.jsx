//pagina que mostrara el usuario
import React from 'react';
import './Perfil.css';

const Perfil = () => {
    return (
        <div className="perfil-page">
            <header className="perfil-header">
                <h1>Perfil</h1>
            </header>
            <div className="perfil-container">
                <aside className="sidebar">
                    <div className="menu-icon"></div>
                    <div className="menu-icon"></div>
                    <div className="menu-icon"></div>
                </aside>
                <main className="perfil-content">
                    <div className="info">
                        <p><strong>Nombre:</strong></p>
                        <p><strong>Edad:</strong></p>
                        <p><strong>Disciplina:</strong></p>
                    </div>
                    <div className="foto-container">
                        <div className="foto">
                            <p>Foto</p>
                        </div>
                    </div>
                </main>
            </div>
            <footer className="perfil-footer">
                <p>© 2024 AVT WARRIORS. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Perfil;
