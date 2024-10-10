import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "../Styles/BlogDetay.scss";

const BlogDuzenle = () => {
  const { url } = useParams(); 
  const navigate = useNavigate();  
  const [blog, setBlog] = useState({
    title: '',
    subTitle: '',
    contentTitle: '',
    contentSubTitle: '',
    url: '',
    author: '',
    thumbnail: '',
   
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  String.prototype.turkishtoEnglish = function () {
    return this.replaceAll('Ğ','g')
        .replaceAll('Ü','u')
        .replaceAll('Ş','s')
        .replaceAll('I','i')
        .replaceAll('İ','i')
        .replaceAll('Ö','o')
        .replaceAll('Ç','c')
        .replaceAll('ğ','g')
        .replaceAll('ü','u')
        .replaceAll('ş','s')
        .replaceAll('ı','i')
        .replaceAll('ö','o')
        .replaceAll('ç','c');
  };

  useEffect(() => {
  
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blog/${url}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Blog verisi alınamadı');
        }

        setBlog(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [url]);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setBlog((prevBlog) => {
      // Eğer değişen alan title ise, url'yi de güncelle
      if (name === "title") {
        return {
          ...prevBlog,
          [name]: value,
          url: value.toLocaleLowerCase("en-US").split(" ").join("-").turkishtoEnglish()
        };
      }
  
      // Diğer alanlar için sadece mevcut değeri güncelle
      return {
        ...prevBlog,
        [name]: value,
      };
    });
  };
  

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/blog/duzenle/${url}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blog), // Blog verilerini günceller
      });

      const data = await response.json();

      if (data.success === false) {
        console.log("Güncelleme başarısız");
        return;
      }

      alert("Blog başarıyla güncellendi!");
      navigate('/panel/bloglar'); // Güncelleme sonrası bloglar sayfasına yönlendirme
    } catch (err) {
      console.log("Hata:", err.message);
    }
  };

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="detay-div">
      <div className="div-ic">
        <h1>Blog Düzenle</h1>
        <form className="blog-form" onSubmit={handleUpdate}>
          <div className="form-group">
            <label>Başlık:</label>
            <input
              type="text"
              name="title"
              value={blog.title}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Alt Başlık:</label>
            <input
              type="text"
              name="subTitle"
              value={blog.subTitle}
              onChange={handleChange}
            />
          </div>

          {/* Diğer alt başlıklar */}
          {[...Array(4)].map((_, i) => (
            <div className="form-group" key={i}>
              <label>{`Alt Başlık ${i + 1}:`}</label>
              <input
                type="text"
                name={`subTitle${i + 1}`}
                value={blog[`subTitle${i + 1}`] || ''}
                onChange={handleChange}
              />
            </div>
          ))}

          <div className="form-group">
            <label>İçerik Başlığı:</label>
            <input
              type="text"
              name="contentTitle"
              value={blog.contentTitle}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>İçerik Alt Başlığı:</label>
            <input
              type="text"
              name="contentSubTitle"
              value={blog.contentSubTitle}
              onChange={handleChange}
            />
          </div>

          {/* İçerik alt başlıkları */}
          {[...Array(4)].map((_, i) => (
            <div className="form-group" key={i}>
              <label>{`İçerik Alt Başlık ${i + 1}:`}</label>
              <input
                type="text"
                name={`contentSubTitle${i + 1}`}
                value={blog[`contentSubTitle${i + 1}`] || ''}
                onChange={handleChange}
              />
            </div>
          ))}

          <div className="form-group">
            <label>URL:</label>
            <input
              type="text"
              name="url"
              value={blog.url}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Yazar:</label>
            <input
              type="text"
              name="author"
              value={blog.author}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Thumbnail:</label>
            <input
              type="text"
              name="thumbnail"
              value={blog.thumbnail}
              onChange={handleChange}
            />
            <img
              src={blog.thumbnail}
              alt="thumbnail"
              className="thumbnail-image"
            />
          </div>

          <button type="submit" className="update-button">Güncelle</button>
        </form>
      </div>
    </div>
  );
};

export default BlogDuzenle;
