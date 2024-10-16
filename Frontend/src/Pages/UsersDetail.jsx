import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "../Styles/BlogDetay.scss";

const UsersDetail = () => {
    const { id } = useParams();  
    const navigate = useNavigate();  
    const [user, setUser] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    accessLevel: ''
    });

    const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/user/${id}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'User verisi alınamadı');
        }

        setUser(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => {  

      return {
        ...prevUser,
        [name]: value,
      };
    });
  };


  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/user/duzenle/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user), // User verilerini günceller
      });

      const data = await response.json();

      if (data.success === false) {
        console.log("Güncelleme başarısız");
        return;
      }

      alert("User başarıyla güncellendi!");
      navigate('/panel/users'); 
    } catch (err) {
      console.log("Hata:", err.message);
    }
  };

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;
   

  return (
    <div className="detay-div">
      <div className="div-ic">
        <h1>User Düzenle</h1>
        <form className="blog-form" onSubmit={handleUpdate}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Access Level</label>
            <input
              type="text"
              name="accessLevel"
              value={user.accessLevel}
              onChange={handleChange}
            />
          </div>


          <button type="submit" className="update-button">Güncelle</button>
        </form>
      </div>
    </div>
  )
}

export default UsersDetail
