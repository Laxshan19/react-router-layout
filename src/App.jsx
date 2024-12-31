import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Products from "./pages/Products"; 
import About from './pages/About';
import Contact from './pages/Contact';
import User from './pages/User';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';
import RootLayout from './layout/RootLayout';
import Error from './pages/Error';


function App() {
  const isAuthenticated = true; // Replace with actual authentication logic
  // Provide the router to the application
  return (
    <Routes>
    <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Products />} />
        <Route path="user/:id" element={<User />} />
        
        <Route path="dashboard"  element={ <ProtectedRoute isAuthenticated={isAuthenticated}/>  }/>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error/>} />
      </Route>
      </Routes>
  );
}

export default App;
