import React from 'react';
import {Main} from './App.styles';
import {MainRoutes} from './routes/Main.routes';
import {BrowserRouter} from 'react-router-dom';
import {Header} from './components/Header';

/**
 * Render the base layout with single page aplication router
 * @return {AppComponent}
 */
function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Main>
        <MainRoutes></MainRoutes>
      </Main>
    </BrowserRouter>
  );
};

export default App;
