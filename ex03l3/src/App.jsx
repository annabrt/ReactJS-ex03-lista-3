import ComponenteCondicional from './components/ComponenteCondicional'
import './App.css'

const App = () => {
  return (
    <div>
      <h1>Renderização Condicional</h1>
      <ComponenteCondicional isVisible={true} />
      <ComponenteCondicional isVisible={false} />
    </div>
  );
};

export default App;
