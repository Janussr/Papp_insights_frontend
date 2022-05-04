import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Report_page from './components/Report_page';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NoMatch />} />
        <Route path='create-report' element={<Report_page/>} />
      </Routes>
    </div >
  );
}

export default App;
