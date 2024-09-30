import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginError, loginStart, loginSuccess } from '../redux/userSlice';
import "../Styles/LoginRegister.scss";

const Login = () => {
    const [form, setForm] = useState({});
    const wait = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginStart());
        const response = await fetch("/api/giris/giris", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form)
        });
        const data = await response.json();
        if (data.success === false) {
            dispatch(loginError(data.message));
            alert(data.message);
            return;
        }
        dispatch(loginSuccess(data));
        navigate("/panel");
    };

    return (
        <section className='LoginRegister'>
            
            <form onSubmit={handleSubmit}>
            <h1>Giriş Yap</h1>
                <label htmlFor='username'>Kullanıcı Adı</label>
                <input id='username' type='text' name='username' onChange={handleChange} />

                <label htmlFor='password'>Şifre</label>
                <input id='password' type='password' name='password' onChange={handleChange} />

                <button type='submit'>{ wait ? "Giriş Yap" : "Lütfen Bekleyin.."}</button>
            </form>
        </section>
    );
};

export default Login;
