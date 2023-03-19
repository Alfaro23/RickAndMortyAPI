import { Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Character from './pages/character/Character';
import Login from './pages/login/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/heroes' element={<Main />}/>
      <Route path='/heroes/:id' element={<Character />}/>
    </Routes>
  );
}

export default App;
