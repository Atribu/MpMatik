import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom'

const PanelSideBar = () => {
        const dispatch = useDispatch();
    
  return (
    <section>
        <aside>
            <nav>
                <NavLink to="/panel">Panel</NavLink>
                <NavLink to="/panel/bloglar">Bloglar</NavLink>
                <NavLink to="/panel/yeni-blog-ekle">Yeni Blog Ekle</NavLink>
                <NavLink to="/panel/blog-duzenle">Blog Düzenle</NavLink>
            </nav>
        </aside>
        <div>
            <Outlet />
        </div>
    </section>
  )
}

export default PanelSideBar