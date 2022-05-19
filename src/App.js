// Must run the following command to enable routes: npm i -D react-router-dom.
// Import routes to set components as pages on navigation.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Login and general container components.
import './App.css';
import { Container } from './components/container/Container.jsx'
import { SignIn } from './components/sign-in/SignIn.jsx';

function App() {
  return (
    <>
      <Router>
        {/* Routes is embedded in the app div and   */}
        <div className="App">
          <Routes>
            {/* Pass the path and element the corresponding component that would be rendered to a full page as props */}
            <Route path="/" element={<SignIn />} />
            <Route path="/chat/:id" element={<Container />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
