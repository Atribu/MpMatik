import React, { useState } from 'react'
import "../Styles/Panel.scss"
import { app } from '../firebase.js'
import { useSelector } from 'react-redux';

const YeniBlogEkle = () => {

  const {activeUser} = useSelector((state)=>state.user);

  const [form, setFrom] = useState([]);
  const [error, setError] = useState(false);
  const [wait, setWait] = useState(false);
  const [success, setSuccess] = useState(false);
  const [thumbnail, setThumbnail] = useState(undefined);
  const [imageError, setImageError] = useState(false);
  const [progressBar, setProgressBar] = useState(0);

  const handleFormChange = (e) => {
    if(e.target.id=="title")
    setFrom({
      ...form,
      [e.target.id]: e.target.value
    })
  }

  return (
    <section className='blog-section'>
      <h1>Yeni Blog Ekle</h1>
      <form className='blog-form'>
        <div className='Image-Yukle'>
        <label className="Panel-Blog-Yukle-Label" htmlFor="Image">Resim Yükle</label>
          <input className='Panel-Blog-Yukle' type="file" accept='image/*' />
        </div>
        <div className='Panel-Blog-Yukle-Div'>
          <label className="Panel-Blog-Yukle-Label"  htmlFor="title">Başlık</label>
          <input className='Panel-Blog-Yukle' type="text" />

          <label className="Panel-Blog-Yukle-Label"  htmlFor="title">İçerik</label>
          <input className='Panel-Blog-Yukle' type="text" />

        </div>  
        <div>  
          <label className="Panel-Blog-Yukle-Label"  htmlFor="title">Alt Başlık</label>
          <input className='Panel-Blog-Yukle' type="text" />
          
          <label className="Panel-Blog-Yukle-Label"  htmlFor="title">İçerik</label>
          <input className='Panel-Blog-Yukle' type="text" />
        </div>  
        <div>
          <label className="Panel-Blog-Yukle-Label" htmlFor="title">Alt Başlık 1</label>
          <input className='Panel-Blog-Yukle' type="text" />

          <label className="Panel-Blog-Yukle-Label" htmlFor="title">İçerik</label>
          <input className='Panel-Blog-Yukle' type="text" />
        </div>
        <div>
          <label className="Panel-Blog-Yukle-Label" htmlFor="title">Alt Başlık 2</label>
          <input className='Panel-Blog-Yukle' type="text" />

          <label className="Panel-Blog-Yukle-Label" htmlFor="title">İçerik</label>
          <input className='Panel-Blog-Yukle' type="text" />
        </div>
        <div>
          <label className="Panel-Blog-Yukle-Label" htmlFor="title">Alt Başlık 3</label>
          <input className='Panel-Blog-Yukle' type="text" />

          <label className="Panel-Blog-Yukle-Label" htmlFor="title">İçerik</label>
          <input className='Panel-Blog-Yukle' type="text" />
        </div>
        <div>
          <label className="Panel-Blog-Yukle-Label" htmlFor="title">Alt Başlık 4</label>
          <input className='Panel-Blog-Yukle' type="text" />

          <label className="Panel-Blog-Yukle-Label" htmlFor="title">İçerik</label>
          <input className='Panel-Blog-Yukle' type="text" />
        </div>

        <button>Gönder</button>

      </form>
    </section>
  )
}

export default YeniBlogEkle