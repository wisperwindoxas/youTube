import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {Context} from './Components/context'

function Main () {
  const [showNavBar, setShowNavbar] = React.useState(false)
  return (
    <Context.Provider value={{showNavBar, setShowNavbar}}>
      <Router>
        <App />
    </Router>
    </Context.Provider>
  )
}

ReactDOM.render(

    <Main/>

 ,
  document.getElementById('root')
);

