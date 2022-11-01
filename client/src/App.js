import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Home from "./pages/home/Home.jsx"
import Single from "./pages/single/Single.jsx"
import Write from "./pages/write/Write";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context)
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path='/' element={user ? <Home /> : <Home/>} />
        <Route path='/login' element={user ? <Home /> : <Login />} />
        <Route path='/register' element={user ? <Home/> : <Login />} />
        <Route path='/settings' element={user ? <Settings /> : <Login/>} />
        <Route path='/write' element={user ? <Write /> : <Login/>} />
        <Route path='/post/:postId' element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
