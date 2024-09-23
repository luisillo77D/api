import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/app.js';

const Index = () => {
  return (
    <div>
      <App />
    </div>
  );
};

//usamos createRoot para renderizar la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
