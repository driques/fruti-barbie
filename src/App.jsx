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
          <p>Barbara Riquelme</p>
        </div>
        <div>
          <label>Banco:</label>
          <p>Estado</p>
        </div>
        <div>
          <label>Cuenta:</label>
          <p>Rut</p>
        </div>
        <div>
          <label>Número de Cuenta:</label>
          <p>21.748.551-7</p>
        </div>
        <div>
          <label>Email:</label>
          <p>riquelmebars@gmail.cl</p>
        </div>
      </form>
      <button onClick={handleCopy}>Copiar Datos</button>
    </div>
  );
};

export default TransferenciaFormulario;
