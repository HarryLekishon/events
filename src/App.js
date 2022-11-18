import './App.css';
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Books from './pages/Books';
import BookDetail from './pages/BookDetail';


function App() {
  return (
    <div>
      {/* <Header/> */}
      <Routes>
        <Route path='/addbook' element={<Dashboard />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path="/" element={<Books />}/>
        <Route path="/books/:id" element={<BookDetail />} exact />
        <Route/>
        <Route/>
      </Routes>
      <ToastContainer />
      
    </div>
  );
}

export default App;
