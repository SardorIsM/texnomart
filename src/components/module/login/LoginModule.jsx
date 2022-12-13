import React, { useState } from 'react'
import './LoginModule.css'
import { TiDeleteOutline } from 'react-icons/ti'
import { auth } from '../../../firebase/config';
import { useNavigate } from 'react-router-dom';
// import { NavLink } from 'react-router-dom'

const LoginModule = ({ isLoginModuleActive, setIsLoginModuleActive }) => {

    const [loginBackGround, setLoginBackGround] = useState({ backgroundColor: "#fff" })
    const [signupBackGround, setsignupBackGround] = useState({ backgroundColor: "rgb(248, 248, 248)" })
    const [loginVisible, setLoginVisible] = useState({ display: "block" })
    const [signupVisible, setSignupVisible] = useState({ display: "none" })
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const history = useNavigate();
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [possibleError, setPossibleError] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(signupEmail, signupPassword)
            .then(response => {
                if (response) {
                    history("/personal");
                }
            })
            .catch(err => {
                setPossibleError(err.message);
            })
    }

    const loginUser = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(loginEmail, loginPassword)
            .then(response => {if (response) {
                history("/personal");
            }})
            .catch(err => alert(err.message))
    }

    const loginActiveMode = () => {
        setLoginBackGround({ backgroundColor: "#fff" })
        setsignupBackGround({ backgroundColor: "rgb(248, 248, 248)" })
        setLoginVisible({ display: "block" })
        setSignupVisible({ display: "none" })
    }

    const signupActiveMode = () => {
        setsignupBackGround({ backgroundColor: "#fff" })
        setLoginBackGround({ backgroundColor: "rgb(248, 248, 248)" })
        setLoginVisible({ display: "none" })
        setSignupVisible({ display: "block" })
    }
    return (
        <div className={isLoginModuleActive === true ? "loginModule loginModuleActive" : "loginModule"}>
            <div className='loginModuleTopContainer'>
                <div className='loginModuleTopLogin' style={loginBackGround} onClick={loginActiveMode}>
                    Вход
                </div>
                <div className='loginModuleTopSignup' style={signupBackGround} onClick={signupActiveMode}>
                    Регистрация
                </div>
                <TiDeleteOutline className='loginModuleTopIcon' onClick={() => { setIsLoginModuleActive(false) }} />
            </div>
            <div style={loginVisible} className='mainLoginContainer'>
                <form onSubmit={loginUser}>
                    <input placeholder='Введите ваш mail' className='mainLoginEmailInput' type="email" required onChange={e => { setLoginEmail(e.target.value) }} />
                    <input placeholder='Введите ваш пароль' className='mainLoginPasswordlInput' type="password" required minLength={8} onChange={e => { setLoginPassword(e.target.value) }} />
                    <button className='mainLoginButton' type='submit'>Войти</button>
                </form>
            </div>
            <div style={signupVisible} className='mainLoginContainer'>
                {possibleError && <p style={{ color: "red" }}>{possibleError}</p>}
                <form onSubmit={createUser}>
                    <input placeholder='Введите mail' className='mainLoginEmailInput' type="email" required onChange={e => { setSignupEmail(e.target.value) }} />
                    <input placeholder='Введите пароль' className='mainLoginPasswordlInput' type="password" required minLength={8} onChange={e => { setSignupPassword(e.target.value) }} />
                    <button className='mainLoginButton' type='submit'>Зарегистрироваться</button>
                </form>
            </div>
        </div>
    )
}

export default LoginModule