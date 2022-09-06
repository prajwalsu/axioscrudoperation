import logo from './logo.svg';
import './App.css';
import AddProducts from './components/AddProducts';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Products/>
      <AddProducts/>
  
    </div>
  );
}

export default App;
