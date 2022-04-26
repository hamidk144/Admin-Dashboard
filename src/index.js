import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DarkModeProvider } from './Context/DarkModeContext';
import { AuthContextProvider } from './Context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


