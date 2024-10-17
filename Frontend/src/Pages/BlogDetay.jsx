import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "../Styles/BlogDetay.scss";

const BlogDetay = () => {
  const { url } = useParams();  
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ID'ye göre blog verisini backend'den çekme
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

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='detay-div'>
     <div className='div-ic'>
     <h1>Blog Detayları</h1>
      <form className="blog-form">
        <div className="form-group">
          <label>Başlık:</label>
          <input type="text" value={blog.title} readOnly />
        </div>

        <div className="form-group">
          <label>Alt Başlık:</label>
          <input type="text" value={blog.subTitle} readOnly />
        </div>

        {/* Diğer alt başlıklar */}
        {[...Array(4)].map((_, i) => (
          <div className="form-group" key={i}>
            <label>{`Alt Başlık ${i + 1}:`}</label>
            <input type="text" value={blog[`subTitle${i + 1}`]} readOnly />
          </div>
        ))}

        <div className="form-group">
          <label>İçerik Başlığı:</label>
          <input type="text" value={blog.contentTitle} readOnly />
        </div>

        <div className="form-group">
          <label>İçerik Alt Başlığı:</label>
          <input type="text" value={blog.contentSubTitle} readOnly />
        </div>

        {/* İçerik alt başlıkları */}
        {[...Array(4)].map((_, i) => (
          <div className="form-group" key={i}>
            <label>{`İçerik Alt Başlık ${i + 1}:`}</label>
            <input type="text" value={blog[`contentSubTitle${i + 1}`]} readOnly />
          </div>
        ))}

        <div className="form-group">
          <label>URL:</label>
          <input type="text" value={blog.url} readOnly />
        </div>

        <div className="form-group">
          <label>Yazar:</label>
          <input type="text" value={blog.author} readOnly />
        </div>

        <div className="form-group">
          <label>Thumbnail:</label>
          <img src={blog.thumbnail} alt="thumbnail" className="thumbnail-image" />
        </div>
      </form>
     </div>
    </div>
  );
};

export default BlogDetay;
