import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { loginError, loginStart, loginSuccess } from '../redux/userSlice';

const Login = () => {
    const [form, setForm] = useState({});

    const [wait, setWait] = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginStart());
        const response = await fetch("/Backend/giris/giris", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form)
        });
        const data = await response.json();
        if(data.success===false) {
            dispatch(loginError(data.message));
            Error(data.message);
            return;
        }
        dispatch(loginSuccess(data));
        navigate("/panel")
    }
  return (
    <section>
        <h1>Giriş Yap</h1>
        <form>
            <label htmlFor='username'>Kullancı Adı</label>
            <input id='username' type='text' name='username' />

            <label htmlFor='username'>Şifre</label>
            <input id='password' type='password' name='password' />

            <button type='submit'>{ wait ? "Bekleyiniz..." : "Giriş Yap" }</button>
        </form>
    </section>
  )
}

export default Login