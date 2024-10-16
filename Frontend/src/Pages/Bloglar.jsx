import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Bloglar.scss"; // SCSS dosyasını bağladık
import { useSelector } from 'react-redux';

const Bloglar = () => {
  const [list, setList] = useState([]);
  const [user, setUser] = useState();
  const { activeUser } = useSelector((state) => state.user);

  const getBlogList = async () => {
    const response = await fetch("/api/blog/liste");
    const data = await response.json();

    if (data.success === false) {
      return;
    }

    setList(data); 
  };
 
  const getUserInfo = async () => {
    try {
      const response = await fetch("/api/user/me");
      const data = await response.json();
      if (data.success === false) return;
      setUser(data);  
    } catch (error) {
      console.error("Kullanıcı bilgisi alınamadı:", error);
    }
  };


  const handleBlogDelete = async (id) => {
    if (!activeUser || activeUser.accessLevel > 1) {
      alert("Bu işlemi yapmak için yetkiniz yok!");  
      return;
    }

    try {
        const response = await fetch (`/api/blog/delete/${id}`, {
            method: "DELETE"
        }); 
        const data = await response.json();
        
        if (data.success === false) {
            console.log("Hata Var !");
            return;
        }
        
        setList((prev)=> prev.filter((liste) => liste._id !== id));

    } catch (error) {
        console.log(error.message)
    }
}

const handleEditClick = (url) => {
  if (!activeUser || activeUser.accessLevel > 2) {
    alert("Bu blogu düzenlemek için yetkiniz yok!");
    return;
  }
  // Yetkili kullanıcı ise düzenleme sayfasına yönlendirme yap
  window.location.href = `/panel/bloglar/blog-duzenle/${url}`;
};

useEffect(() => {
  getBlogList(); // Component yüklendiğinde blogları al
  getUserInfo(); // Component yüklendiğinde kullanıcıyı al
}, []);
console.log(list);

  return (
    <div className="blog-list-container"> {/* Genel tabloyu saran container */}
      <table className="blog-table"> {/* Blog tablosu */}
        <thead>
          <tr className="table-head">
            <th>ID</th>
            <th>İsim</th>
            <th>Url</th>
            <th>Aksiyonlar</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item._id} className="table-row"> {/* Her blog için tablo satırı */}
              <td>{item._id}</td>
              <td>{item.title}</td>
              <td>{item.url}</td>
              <td>
                <Link to={`${item.url}`} className="buttonGörüntüle">
                  Görüntüle
                </Link>
                
                 {/* Düzenle Linki
                 <Link to={`/panel/bloglar/blog-duzenle/${item.url}`} className="buttonDüzenle">
                  Düzenle
                </Link> */}
                {/* Düzenle Butonu */}
                <button
                  className="buttonDüzenle"
                  type="button"
                  onClick={() => handleEditClick(item.url)}
                >
                  Düzenle
                </button>

                  <button
                    className="buttonSil"
                    type="button"
                    onClick={() => handleBlogDelete(item._id)}
                  >
                    Sil
                  </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bloglar;