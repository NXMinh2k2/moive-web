import './App.css';
import Contents from './components/Contents/Contents';
import Intro from './components/Intro/Intro';
import Menu from './components/Menu/Menu';
import MoviesDetail from './components/MoviesDetail/MoviesDetail';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Contents />
      <Menu />
      <MoviesDetail />
    </div>
  );
}

export default App;
