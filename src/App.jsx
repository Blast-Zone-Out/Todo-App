import { Route, BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './Routes';
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  return <div>
  <Router>
  <Navbar />
    <AppRoutes />
    
  </Router>
  </div>;
};

export default App;
