import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Homepage from './client/pages/Homepage';
import ContactPage from './client/pages/ContactPage';
import AboutUsPage from './client/pages/AboutUsPage';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/about" element={<AboutUsPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;