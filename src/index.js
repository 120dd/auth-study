import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter , Route , Routes } from "react-router-dom";
import App from './App';
import LoginPage from "./component/loginPage/loginPage";
import SignupPage from "./component/signupPage/signupPage";
import UserInfo from "./component/userInfo";
import { Provider } from 'react-redux'
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}>
                        <Route path="login" element={<LoginPage/>}/>
                        <Route path="signup" element={<SignupPage/>}/>
                        <Route path="userInfo" element={<UserInfo/>}/>
                    </Route>
                    <Route path="*" element={
                        <main>
                            <p>빈 페이지 입니다</p>
                        </main>
                    }/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

