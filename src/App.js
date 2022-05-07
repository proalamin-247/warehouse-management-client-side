import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import { Route, Router, Routes } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs';
import ManageItem from './Pages/ManageItem/ManageItem';
import AddItem from './Pages/AddItem/AddItem';
import MyItem from './Pages/MyItem/MyItem';
import Login from './Pages/Login/Login';
import AllItem from './Pages/AllItem/AllItem'
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Login/Register/Register';
import ForgetPassword from './Pages/Login/ForgetPassword/ForgetPassword';
import ProtectedRoutes from './Pages/Login/ProtectedRoutes/ProtectedRoutes';
import UpdateItem from './Pages/UpdateItem/UpdateItem';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/allitem' element={<AllItem></AllItem>}></Route>
        <Route path='/item/:itemId' element={
          <ProtectedRoutes>
            <UpdateItem></UpdateItem>
          </ProtectedRoutes>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/manageitem' element={<ManageItem></ManageItem>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/myitems' element={<MyItem></MyItem>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/forgetpassword' element={<ForgetPassword></ForgetPassword>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
