
import Header_component from "./components/Header_component.jsx";
import Footer_component from "./components/Footer_component.jsx";

import About_page from "./pages/About_page.jsx";

import Home from "./pages/home.jsx";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

import UserHome from "./pages/UserHome.jsx";
import Contact_page from "./pages/Contact_page.jsx";
import HrHome from "./pages/HrHome.jsx";
import AdminHome from "./pages/AdminHome.jsx";
import EmpHome from "./pages/EmpHome.jsx";


import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Header_component></Header_component>
            <Routes>
                <Route path="/home" element={<home></home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/userhome" element={<UserHome></UserHome>}></Route>
                <Route path="/about" element={<About_page></About_page>}></Route>
                <Route path="/contact" element={<Contact_page></Contact_page>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/hrHome" element={<HrHome/>}></Route>
                <Route path="/emphome" element={<EmpHome/>}></Route>
                <Route path="/adminhome" element={<AdminHome/>}></Route>
            </Routes>
            <Footer_component></Footer_component>
        </div>
    );
}

export default App;