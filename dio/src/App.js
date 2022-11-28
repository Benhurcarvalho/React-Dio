import { BrowserRouter, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
// import Login from './Pages/Login/Login';

function App() {


  return (
    <div>
      <Home />
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
