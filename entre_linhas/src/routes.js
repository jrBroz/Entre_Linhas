import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from './components/LoginPage/Login'
import MainPage from "./Pages/MainPage";
import Cadastro from './components/Register/Cadastro'

const AppRoutes = () => {

    return(
        // Router pra web browsers
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Cadastro" element={<Cadastro/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;