// import Button from "./Components/Button/Button";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {


  return (
    <div>
      <h1>
        Hello Word
        {/* <Button title='Entrar'/> */}
      </h1>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={ <Home/> }></Route>
          <Route path={'/login'} element={ <Login/> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/* 
<Button title='Ficar'/>
<Button title='Sair'/> */
