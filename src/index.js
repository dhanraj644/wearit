import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './componets/context/ShopContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <ShopContextProvider>
    <App />
  </ShopContextProvider>
  
);

reportWebVitals();
