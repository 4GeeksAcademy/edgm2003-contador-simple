import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
let contadorSegundos = 0;

setInterval(() => {
    root.render(
        <React.StrictMode>
            <Home seconds={contadorSegundos} />
        </React.StrictMode>
    );
    contadorSegundos++;
}, 1000);