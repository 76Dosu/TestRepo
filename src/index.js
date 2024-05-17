import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

//page
import MainPage from './component/page/MainPage';
import DailyWrite from './component/page/DailyWrite';
import DailyManage from './component/page/DailyManage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route index element={<MainPage />}></Route>
            <Route path="/write" element={<DailyWrite />}></Route>
            <Route path="/manage" element={<DailyManage />}></Route>
        </Routes>
    </BrowserRouter>
);