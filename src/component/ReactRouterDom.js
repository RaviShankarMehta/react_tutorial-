import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import About from "./About"
import Channel from "./Channel"
import Contact from "./Contact"
import Filter from "./Filter"
import Home from "./Home"
import Login from "./Login"
import NavBar from "./Navbar"
import Other from "./Other"
import PageNotFound404 from './PageNotFound404'
import Protect from "./Protect"
import User from "./User"
function ReactRouterDom(){
    return(
        <BrowserRouter>
        {/* <NavBar/> */}
        <Routes>
            <Route path="/" element={<Protect Component={Home}/>}></Route>
            <Route path="/login" element={<Login/>}></Route>

            <Route path="/about" element={<Protect Component={About}/>}></Route>
            <Route path="/*" element={<PageNotFound404/>}></Route>
            <Route path="/user/:name" element={<User></User>}></Route>
            <Route path="/*" element={<Navigate to={'/'}/>}></Route>
            <Route path="/filter" element={<Protect Component={Filter}/>}></Route>
            <Route path="/contact/" element={<Contact/>}></Route>
            <Route path="channel" element={<Channel/>}></Route>
            <Route path="other" element={<Other/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default ReactRouterDom