import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { Container } from './components/container/Container.jsx'
import { Login } from './components/login/login';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/chat/:id" element={<Container />} />
            </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
