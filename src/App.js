//import logo from './logo.svg';
import HomePage from './pages/HomePage';
import CreateTodo from './pages/CreateTodo';
import RegisterPage from './authentication/RegisterPage';
import Login from './authentication/Login';


//Authentication URLS


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import "./App.css";
import ReportPage from './pages/ReportPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/login' element={<Login />} />
          <Route path='/reports' element={<ReportPage />} />
          <Route path='/create-todo' element={<CreateTodo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
