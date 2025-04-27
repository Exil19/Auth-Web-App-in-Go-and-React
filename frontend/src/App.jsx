import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </Router>
      </div>
    </>
  )
}

export default App
