import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import ServicesPage from './Pages/ServicesPage';
import AboutUsPage from './Pages/AboutUsPage';
import BlogsPage from './Pages/BlogsPage';

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
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
