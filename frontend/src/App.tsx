import React from 'react';
import CardContainer from 'container/CardContainer';
import Navigation from 'components/Navigation';
import { BrowserRouter, Route } from 'react-router-dom';
import About from 'pages/About';

import './App.css';


function App() {

  const showBuyModalWindow = () => {

  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation showModalWindow={() => {}}/>
        <div className='container pt-4 mt-4'>
              <Route exact path="/" render={() => <CardContainer location='cards.json'  isPromo={false} showBuyModal={showBuyModalWindow} />} />
              <Route path="/promos" render={() => <CardContainer location='promos.json' isPromo={true} showBuyModal={showBuyModalWindow}/>} />
              <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
