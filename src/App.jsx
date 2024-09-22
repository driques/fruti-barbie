import React, { useRef } from 'react';
import "./App.css"
const TransferenciaFormulario = () => {
  const formRef = useRef();

  const handleCopy = () => {
    const textToCopy = formRef.current.innerText;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('Datos copiados al portapapeles');
      })
      .catch(err => {
        console.error('Error al copiar: ', err);
      });
  };

  return (
    <div className='container'>
      <h1>Frutillas B&B ❤️</h1>
      <h2>Datos de Transferencia</h2>
      <form ref={formRef} style={{ border: '1px solid #ccc', padding: '10px' }}>
        <div>
          <label>Nombre:</label>
          <p>Diego Riquelme</p>
        </div>
        <div>
          <label>Cuenta:</label>
          <p>Corriente</p>
        </div>
        <div>
          <label>Número de Cuenta:</label>
          <p>123123</p>
        </div>
        <div>
          <label>Email:</label>
          <p>correo@correo.cl</p>
        </div>
      </form>
      <button onClick={handleCopy}>Copiar Datos</button>
    </div>
  );
};

export default TransferenciaFormulario;
