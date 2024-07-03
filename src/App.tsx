import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routes } from './routes';

const AppRoutes = () => {
  const routing = useRoutes(routes);
  return routing;
};

function App() {
  return (
    <BrowserRouter basename="/WebAR/dist">
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
