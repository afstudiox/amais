import React from 'react';
import Routers from './components/Routers';
import MyProvider from './context/MyProvider';

function App() {
  return (
  <MyProvider>
    <Routers />
  </MyProvider>
  );
};


export default App;
