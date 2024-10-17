import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../Styles/ProfilEditor.scss"

const ProfilEditor = () => {

    const { id } = useParams();
    const [user, setUser] = useState({
        username: '',
        name: '',
        email: '',
        password: ''
    });
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const [wait, setWait] = useState(false);
    const [loading, setLoading] = useState(true);

    const getUserDetail = async () => {
        try {
          const response = await fetch(`/api/user/getirbir/${id}`);
          const data = await response.json();
      
          if (!response.ok || data.success === false) {
            setError(data.message || 'Kullanıcı bilgileri alınamadı.');
            return;
          }
          if (data.data) {
            setUser((prevUser) => ({
              ...prevUser,
              ...data.data,
            }));
          } else {
            setUser((prevUser) => ({
              ...prevUser,
              ...data,
            }));
          }
        } catch (error) {
          setError('Sunucudan veri alınırken bir hata oluştu.');
        } finally {
          setLoading(false);
        }
      };
      

    useEffect(()=>{
        getUserDetail();
    },[])

    const handleUserChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const handleUserSubmit = async (e) => {
        e.preventDefault();
        setWait(true);
        setError(null);
        setSuccess(null);
        try {
            const response = await fetch (`/api/user/guncelle/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const data = await response.json();
            if (!data.success) {
                setError(data.message || "Güncelleme Başarısız");
            } else {
                setSuccess("Güncelleme Başarılı");
            }
        } catch (error) {
            console.error("Güncelleme Hatası:", error);
            setError("Güncelleme Sırasında Bir Hata Oluştu");
        } finally {
            setWait(false);
        }
    }
    console.log(user)
    return (
        <section className="profil-editor">
          <h1>Profil Düzenle</h1>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
          {wait && <p className="wait-message">Bekleyiniz..</p>}
          <form onSubmit={handleUserSubmit} className="profil-form">
            <label htmlFor="username">Kullanıcı Adı</label>
            <input
              id="username"
              type="text"
              name="username"
              value={user.username || ""}
              onChange={handleUserChange}
            />
    
            <label htmlFor="name">Adınız Soyadınız</label>
            <input
              id="name"
              type="text"
              name="name"
              value={user.name || ""}
              onChange={handleUserChange}
            />
    
            <label htmlFor="email">E-posta Adresiniz</label>
            <input
              id="email"
              type="text"
              name="email"
              value={user.email || ""}
              onChange={handleUserChange}
            />
    
            <label htmlFor="password">Parola</label>
            <input
              id="password"
              type="text"
              name="password"
              value={user.password || ""}
              onChange={handleUserChange}
            />
    
            <button type="submit">{wait ? "Bekleyiniz.." : "Kaydet"}</button>
          </form>
        </section>
      );
    };
    
    export default ProfilEditor;