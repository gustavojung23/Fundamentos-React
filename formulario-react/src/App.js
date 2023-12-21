import './App.css';
import Formulario from './components/Formulario/Formulario.jsx';

function App() {
  return (
    <div>
      <h2>Formulário React</h2>
      <Formulario user={{ name: "", email: ""}} />
    </div>
  );
}

export default App;
