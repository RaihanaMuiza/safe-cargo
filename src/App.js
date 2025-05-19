import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import ServicesPage from './Pages/ServicesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/services"
          element={<ServicesPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
