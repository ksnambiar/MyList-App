import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import AppBarNext from './Components/AppBar';
import SampleRoute from './Components/SampleRoute';
import { BrowserRouter as Router,Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <Router>
<div className="App">
      <AppBarNext />
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="sampleRoute" element={<SampleRoute />} />
        </Route>
      </Routes>
    </div>
    </Router> 
  );
}

export default App;
