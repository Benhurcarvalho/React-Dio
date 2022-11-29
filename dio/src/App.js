import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={'/login'} element={ <Login/> }></Route>
          <Route path={'/'} element={ <Home/> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
