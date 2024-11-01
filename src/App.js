import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <TodoWrapper />
      <div className="container">
      <Carousel/></div>
    </div>
  );
}

export default App;
