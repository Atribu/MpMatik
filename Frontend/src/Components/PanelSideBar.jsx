import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom'
import { logOutError, logOutStart, logOutSuccess } from '../redux/userSlice';
import "../Styles/Panel.scss"

const PanelSideBar = () => {
        const dispatch = useDispatch();

        const handleLogOut = async () => {
            dispatch(logOutStart());
            const response = await fetch("/api/giris/cikis");
            const data = await response.json();
            if (data.success===false){
                dispatch(logOutError(data.message));
                return;
            }
            dispatch(logOutSuccess(data));
        }
    
  return (
    <section className='SideBar'>
        <aside>
            <nav>
                <NavLink to="/panel">Panel</NavLink>
                <NavLink to="/panel/bloglar">Bloglar</NavLink>
                <NavLink to="/panel/yeni-blog-ekle">Yeni Blog Ekle</NavLink>
                <NavLink to="/panel/blog-duzenle">Blog Düzenle</NavLink>
                <a href='#'onClick={handleLogOut}>Çıkış Yap</a>
            </nav>
        </aside>
        <div>
            <Outlet />
        </div>
    </section>
  )
}

export default PanelSideBar