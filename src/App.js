import React from 'react';
import './App.css';
import Resultado from './components/resultado';
import Teclado from './components/teclado';

function App () {
  const [resultado, setResultado] = React.useState ('');

  const onclick = (buttonClicked) => {
    if (buttonClicked === 'C'){
      backspace()
    }
    else if (buttonClicked === 'CE') {
      reset()
    }
    else if (buttonClicked === '=') {
      calculate()
    }
    else {
      setResultado(resultado + buttonClicked)
    }
  } 
  
  const backspace = () => {
    setResultado('')
  }
  
  const reset = () => {
    setResultado(resultado.slice(0,-1))
  }
  
  const calculate = () => {
    var checkResult = ''
  
    if (resultado.includes('--')){
      checkResult = resultado.replace('--','+');
    } else {
      checkResult = resultado;
    }
  
    setResultado((eval(checkResult) || "" ) + "");
  }

  return (
    <div className="App">
      <header />
      <body>
        <div>
        <Resultado resultado={resultado} />
        <Teclado onClick={onclick}/>
        </div>
      </body>
    </div>
  );
}

export default App;
