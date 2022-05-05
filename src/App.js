import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import ReportPage from './components/ReportPage';
import Tester from './components/Tester';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NoMatch />} />
        <Route path='create-report' element={<ReportPage/>} />
        <Route path='tester' element={<Tester/>} />
      </Routes>
    </div >
  );
}

export default App;
