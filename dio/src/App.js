import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Header from './Components/Header/Header';

function App() {


  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          {/* <Route path={'/'} element={ <Home/> }></Route>
          <Route path={'/login'} element={ <Login/> }></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/* 
<Button title='Ficar'/>
<Button title='Sair'/> */
