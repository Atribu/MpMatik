import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BlogDuzenle = () => {
  const { id } = useParams();  // URL'den id parametresini alıyoruz
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getBlogList = async () => {
    const response = await fetch(`/api/blog/${id}`);
    const data = await response.json();

    // Eğer veri başarılı bir şekilde döndüyse direkt setList yapabilirsiniz
    setList(data);
}
useEffect(() => {
  getBlogList();
}, [])


  useEffect(() => {
    // ID'ye göre blog verisini backend'den çekme
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blog/${id}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Blog verisi alınamadı');
        }

        setForm(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Formu gönderme işlemi burada yapılacak
  };

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        id="title"
        value={form.title || ''}
        onChange={handleFormChange}
      />
      <input
        type="text"
        id="content"
        value={form.content || ''}
        onChange={handleFormChange}
      />
      <button type="submit">Güncelle</button>
    </form>
  );
};

export default BlogDuzenle;
