import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneralPage from "src/components/pages/GeneralPage/GeneralPage";
import LogInPage from "src/components/pages/LogInPage/LogInPage";
import RegisterPage from "src/components/pages/RegisterPage/RegisterPage";

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LogInPage />}/>
                <Route path="/regist" element={<RegisterPage />} />
                <Route path="/general" element={<GeneralPage />} />
            </Routes>
        </BrowserRouter>
    );
};
export default MainRouter;