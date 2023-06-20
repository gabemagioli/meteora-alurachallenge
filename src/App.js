import './App.css';
import Header from './components/header/Header';
import Produtos from './components/produtos/Produtos';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Produtos/>
      <Footer/>
    </div>
  );
}

export default App;
