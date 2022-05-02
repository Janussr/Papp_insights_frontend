import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import NoMatch from './components/NoMatch';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div >
  );
}

export default App;
