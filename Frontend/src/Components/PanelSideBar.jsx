import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { logOutError, logOutStart, logOutSuccess } from "../redux/userSlice";
import "../Styles/Panel.scss";
import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useSelector } from 'react-redux';

const PanelSideBar = () => {
  const [isBlogMenuOpen, setIsBlogMenuOpen] = useState(false);
  const { activeUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLogOut = async () => {
    dispatch(logOutStart());
    const response = await fetch("/api/giris/cikis");
    const data = await response.json();
    if (data.success === false) {
      dispatch(logOutError(data.message));
      return;
    }
    dispatch(logOutSuccess(data));
  };

  return (
    <section className="SideBar">
      <aside>
        <nav>
          <NavLink to="/panel">Panel</NavLink>
          <div
            className="menu-item"
            onClick={() => setIsBlogMenuOpen(!isBlogMenuOpen)}
          >
            <span>Bloglar</span>
            <span className="menu-icon">
              {isBlogMenuOpen ? <FaChevronDown /> : <FaChevronRight />}
            </span>
          </div>
          <div className={`submenu ${isBlogMenuOpen ? "open" : ""}`}>
            <div>
              <NavLink to="/panel/yeni-blog-ekle">Yeni Blog Ekle</NavLink>
            </div>
            <div>
              <NavLink to="/panel/bloglar/duzenle">Blog Düzenle</NavLink>
            </div>
          </div>

          <NavLink to="/panel/users">Kullanıcıları Yönet</NavLink>
          <NavLink to="/panel/yeni-sayfa-ekle">Sayfa Ekle</NavLink>
          <NavLink to="/panel/formlar">Formlar</NavLink>
          <NavLink to="/panel/basic-formlar">Basic Formlar</NavLink>
          <NavLink to={`/panel/profil-duzenle/${activeUser._id}`}>Profil Düzenle</NavLink>
          <a href="#" onClick={handleLogOut}>
            Çıkış Yap
          </a>
        </nav>
      </aside>
      <div className="SideBar-div">
        <Outlet />
      </div>
    </section>
  );
};

export default PanelSideBar;
