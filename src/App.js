import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Header from './Shared/Header';
import AcademyDetails from './components/Pages/Academy/AcademyDetails';
import AddAcademy from './components/Pages/Academy/AddAcademy/AddAcademy';
import UpdateAcademy from './components/Pages/Academy/AddAcademy/UpdateAcademy/UpdateAcademy';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import RequireAuth from './Shared/RequireAuth';
import AddRecord from './components/Pages/Players/PlayerProfile/AddRecord';
import Players from './components/Pages/Players/Players';
import PlayerDetails from './components/Pages/Players/PlayerDetails/PlayerDetails';
import PracticeTime from './components/Pages/PracticeSchedule/PracticeTime';
import UpdateProfile from './components/Pages/UpdateProfile/UpdateProfile';
import Dashboard from './components/Pages/Profile/Dashboard';
import Footer from './Shared/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element ={<Home></Home>}></Route>
        <Route path='/players' element ={<Players></Players>}></Route>
        <Route path='/academy/:id' element ={<AcademyDetails></AcademyDetails>}></Route>
        <Route path='/practice' element ={<PracticeTime></PracticeTime>}></Route>
        <Route path='/player/:id' element ={<PlayerDetails></PlayerDetails>}></Route>
        <Route path='/updateprofile/:id' element ={<UpdateProfile></UpdateProfile>}></Route>
        <Route path='/update/:id' element ={<UpdateAcademy></UpdateAcademy>}></Route>
        <Route path='/addacademy' element ={<RequireAuth>
          <AddAcademy></AddAcademy>
        </RequireAuth>}></Route>
        <Route path='/login' element ={<Login></Login>}></Route>
        <Route path='/register' element ={<Register></Register>}></Route>
        <Route path='/dashboard' element ={
        <RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>
        }></Route>
        <Route path='/add-record' element ={<RequireAuth><AddRecord></AddRecord></RequireAuth>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
