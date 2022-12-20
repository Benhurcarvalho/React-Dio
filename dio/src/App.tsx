import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Feed from './Pages/Feed/Feed';

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={ <Home/> } />
          <Route path={'/login'} element={ <Login/> } />
          <Route path={'/feed'} element={ <Feed/> } /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
