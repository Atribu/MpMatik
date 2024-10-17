import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Bloglar.scss"; 
import { useSelector } from 'react-redux';

const Formlar = () => {
  const [list, setList] = useState([]);
  const { activeUser } = useSelector((state) => state.user);

  const getFormList = async () => {
    const response = await fetch("/api/form/liste");
    const data = await response.json();

    if (data.success === false) {
      return;
    }

    setList(data); // Blog listesini doldur
  };

  const handleBlogDelete = async (id) => {
    if (!activeUser || activeUser.accessLevel > 1) {
      alert("Bu işlemi yapmak için yetkiniz yok!");  
      return;
    }

    try {
        const response = await fetch (`/api/form/delete/${id}`, {
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


useEffect(() => {
  getFormList(); // Component yüklendiğinde blogları al
}, []);
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
            <th>ürün</th>
            <th>tüketim</th>
            <th>araç</th>
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
              <td>{item.selectedProduct}</td>
              <td>{item.selectedTuketim}</td>
              <td>{item.selectedVehicle}</td>
              <td>{item.createdAt}</td>
              <td>
                 <Link to={`${item._id}`} className="buttonGörüntüle">
                  Görüntüle
                </Link>

                <button className='buttonSil' type='button' onClick={()=>handleBlogDelete(item._id)}>Sil</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Formlar;