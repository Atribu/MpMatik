import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Bloglar.scss"; // SCSS dosyasını bağladık

const Bloglar = () => {
  const [list, setList] = useState([]);

  const getBlogList = async () => {
    const response = await fetch("/api/blog/liste");
    const data = await response.json();

    if (data.success === false) {
      return;
    }

    setList(data); // Blog listesini doldur
  };

  useEffect(() => {
    getBlogList(); // Component yüklendiğinde blogları al
  }, []);


  const handleBlogDelete = async (id) => {
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
                
                 {/* Düzenle Linki */}
                 <Link to={`/panel/bloglar/blog-duzenle/${item._id}`} className="buttonDüzenle">
                  Düzenle
                </Link>

                <button className='buttonSil' type='button' onClick={()=>handleBlogDelete(item._id)}>Sil</button>
                {/* <button className='buttonSil' type='button' onClick={()=>{
                                const tempList = [...list];
                                tempList.splice(index, 1);
                                setList(tempList)
                            }}>Sil</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bloglar;