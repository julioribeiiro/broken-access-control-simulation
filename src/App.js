import Home from './pages/home'
import LoginPage from './pages/login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
      <Router >
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/logged' element={<Home />} />
          </Routes>
      </Router>
  );
}

export default App;
