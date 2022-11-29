import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import CustomNavbar from "../components/customNavbar/CustomNavbar"
import HomePage from "../pages/HomePage"

const CustomRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default CustomRoutes