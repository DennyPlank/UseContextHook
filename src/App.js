import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Profile } from './Profiles/Profile'
import { Profiles } from './Profiles/Profiles'
import { Route, Routes } from 'react-router';
import Navbar from './NavBar';

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </div>
  );
}

export default App;
