import React from 'react';
import { registerRootComponent } from 'expo';
import Main from './pages/Main'

function App() {
  return (
    <Main></Main>
  );
}

export default registerRootComponent(App)