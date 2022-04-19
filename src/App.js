import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Overview from './pages/dashboard/Overview';
import Password from './pages/Password';
import Signup from './pages/Signup';
import Verify from './pages/Verify';
import Transactions from './pages/dashboard/Transactions';
import Profile from './pages/dashboard/Profile';
import Loan from './pages/dashboard/Loan';
import Cominsoon from './pages/dashboard/Cominsoon';
import Support from './pages/dashboard/Support';
import Bank from './pages/dashboard/Bank';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/forgot-password' element={<Password />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/verify-account' element={<Verify />} />
          <Route path='/overview' element={<Overview />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/loan' element={<Loan />} />
          <Route path='/coming-soon' element={<Cominsoon />} />
          <Route path='/support' element={<Support />} />
          <Route path='/add-account' element={<Bank />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
