import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Overview from './pages/dashboard/Overview';
import Password from './pages/Password';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/forgot-password' element={<Password />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/overview' element={<Overview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
