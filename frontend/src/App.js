import { Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import MainContainer from './components/MainContainer';
import Welcome from './components/Welcome';
import ChatArea from './components/ChatArea';
import CreateGroup from './components/CreateGroup';
import Users from './components/Users';
import Groups from './components/Groups';

function App() {
  return (
    <div className='App'>
      {/* <MainContainer/> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />}></Route>
          <Route path="chat" element={<ChatArea />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="groups" element={<Groups />}></Route>
          <Route path="create-groups" element={<CreateGroup />}></Route>
        </Route>
      </Routes>
      {/* <Login/> */}
    </div>
  );
}

export default App;
