import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Bloglar.scss"; // SCSS dosyasını bağladık

const BasicFormlar = () => {
  const [list, setList] = useState([]);

  const getFormList = async () => {
    const response = await fetch("/api/basic-contact/liste");
    const data = await response.json();

    if (data.success === false) {
      return;
    }

    setList(data); // Blog listesini doldur
  };

  useEffect(() => {
    getFormList(); // Component yüklendiğinde blogları al
  }, []);


  const handleBlogDelete = async (id) => {
    try {
        const response = await fetch (`/api/basic-contact/delete/${id}`, {
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
console.log(list);

  return (
    <div className="blog-list-container"> {/* Genel tabloyu saran container */}
      <table className="blog-table"> {/* Blog tablosu */}
        <thead>
          <tr className="table-head">
            <th>ID</th>
            <th>İsim</th>
            <th>email</th>
            <th>phone</th>
            <th>şehir</th>
            <th>mesaj</th>
            <th>zaman</th>
            <th>Aksiyonlar</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item._id} className="table-row"> {/* Her blog için tablo satırı */}
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.selectedCity}</td>
              <td>{item.mesaj}</td>
              <td>{item.createdAt}</td>
              <td>
                {/* <Link to={`${item.url}`} className="buttonGörüntüle">
                  Görüntüle
                </Link>
                
                
                 <Link to={`/panel/bloglar/blog-duzenle/${item.url}`} className="buttonDüzenle">
                  Düzenle
                </Link> */}

                <button className='buttonSil' type='button' onClick={()=>handleBlogDelete(item._id)}>Sil</button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BasicFormlar;