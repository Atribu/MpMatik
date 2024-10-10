/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import "../Styles/Panel.scss"
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from '../firebase.js'
import { useSelector } from 'react-redux';

const YeniBlogEkle = () => {
  const {activeUser} = useSelector((state)=>state.user);
  const [form, setForm] = useState([]);
  const [error, setError] = useState(false);
  const [wait, setWait] = useState(false);
  const [success, setSuccess] = useState(false);
  const [thumbnail, setThumbnail] = useState(undefined);
  const [imageError, setImageError] = useState(false);
  const [progressBar, setProgressBar] = useState(0);
  const [images, setImages] = useState([]);
  
  useEffect (() => {
    setForm({
      ...form,
      author: activeUser._id,
    })
  },[])

  useEffect (() => {
    if(thumbnail){
      console.log("thumbnail");
      handleUploadThumbnail(thumbnail);
    }
  },[thumbnail])

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


  const handleUploadThumbnail  = (image) =>{
    setWait(true);

    const storage = getStorage(app);
    const fileName = new Date().getTime()+image.name;
    const storageRef = ref(storage,fileName);
    const uploadImage = uploadBytesResumable(storageRef,image);

    uploadImage.on("state_changed",(snapshot)=>{
      const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      setProgressBar(Math.round(progress));
    },
    (error)=>{
      setImageError(error);
      setWait(false);
    },
    ()=>{
      getDownloadURL(uploadImage.snapshot.ref).then((downloadURL)=>{
        setForm({
          ...form,
          thumbnail: downloadURL,
          image:downloadURL,
        })
      })
      setWait(false);
    }
    
    )
  }

  const handleFormChange = (e) => {
    if(e.target.id === "title")
        setForm({
            ...form,
            [e.target.id]: e.target.value,
            url: e.target.value.toLocaleLowerCase("en-us").split(" ").join("-").turkishtoEnglish()
        });
    else if(e.target.id === "subTitle")
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    else if(e.target.id === "subTitle1")
        setForm({
            ...form,
            [e.target.id]: e.target.value
        }); 
    else if(e.target.id === "subTitle2")
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    else if(e.target.id === "subTitle3")
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    else if(e.target.id === "subTitle4")
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    else if(e.target.id === "url")
        setForm({
            ...form,
            [e.target.id]: e.target.value,
            url: e.target.value.toLocaleLowerCase("en-us").split(" ").join("-").turkishtoEnglish()
        });
    else if(e.target.id === "contentTitle")
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    else if(e.target.id === "contentSubTitle")
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    else if(e.target.id === "contentSubTitle1")
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    else if(e.target.id === "contentSubTitle2")
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    else if(e.target.id === "contentSubTitle3")
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    else if(e.target.id === "contentSubTitle4")
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    else {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    }      
}

const handleFormSubmit = async (e) => {
  e.preventDefault();
  setError(false)
  setWait(true)

  setForm({
    ...form,
    author: activeUser._id,
  });
  try {
    const response = await fetch("/api/blog/yeni",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form)
    })
    const data = await response.json();
    if(data.success===false){
      setError(data.message);
      return;
    }
    setSuccess("Veri Başarılı Bir Şekilde Yüklendi");
    setWait(false);
  } catch (error) {
      setError(error)
      setWait(false)
  }
}

    console.log(form);

  return (
    <section className='blog-section'>
      <h1>Yeni Blog Ekle</h1>
      <form className='blog-form' onSubmit={handleFormSubmit}>
       <div className='dısImgDiv'>
       {form.thumbnail && <img className ="imgThumbnail" src={form.thumbnail} alt="thumbnail" />}
       </div>
        <div className='Image-Yukle'>
        <label className="Panel-Blog-Yukle-Label" htmlFor="Image">Resim Yükle</label>
          <input className='Panel-Blog-Yukle' type="file" id='thumbnail' accept='image/*' onChange={(e)=>setThumbnail(e.target.files[0])} disabled={wait && "disable"} />
        </div>

        <div className='Panel-Blog-Yukle-Div'>
          <label className="Panel-Blog-Yukle-Label"  htmlFor="title">Başlık</label>
          <input className='Panel-Blog-Yukle' type="text" id='title' onChange={handleFormChange}/>

          <label className="Panel-Blog-Yukle-Label"  htmlFor="subTitle">İçerik</label>
          <input className='Panel-Blog-Yukle' type="text" id='contentTitle' onChange={handleFormChange}/>

        </div>  
        <div>  
          <label className="Panel-Blog-Yukle-Label"  htmlFor="subTitle">Alt Başlık</label>
          <input className='Panel-Blog-Yukle' type="text" id='subTitle' onChange={handleFormChange}/>
          
          <label className="Panel-Blog-Yukle-Label"  htmlFor="contentSubTitle">İçerik</label>
          <input className='Panel-Blog-Yukle' type="text" id='contentSubTitle' onChange={handleFormChange}/>
        </div>  
        <div>
          <label className="Panel-Blog-Yukle-Label" htmlFor="subTitle1">Alt Başlık 1</label>
          <input className='Panel-Blog-Yukle' type="text" id="subTitle1" onChange={handleFormChange}/>

          <label className="Panel-Blog-Yukle-Label" htmlFor="contentSubTitle1">İçerik</label>
          <input className='Panel-Blog-Yukle' type="text" id='contentSubTitle1' onChange={handleFormChange}/>
        </div>
        <div>
          <label className="Panel-Blog-Yukle-Label" htmlFor="subTitle2">Alt Başlık 2</label>
          <input className='Panel-Blog-Yukle' type="text" id="subTitle2" onChange={handleFormChange}/>

          <label className="Panel-Blog-Yukle-Label" htmlFor="contentSubTitle2">İçerik</label>
          <input className='Panel-Blog-Yukle' type="text" id='contentSubTitle2' onChange={handleFormChange}/>
        </div>
        <div>
          <label className="Panel-Blog-Yukle-Label" htmlFor="subTitle3">Alt Başlık 3</label>
          <input className='Panel-Blog-Yukle' type="text" id="subTitle3" onChange={handleFormChange}/>

          <label className="Panel-Blog-Yukle-Label" htmlFor="contentSubTitle3">İçerik</label>
          <input className='Panel-Blog-Yukle' type="text" id='contentSubTitle3' onChange={handleFormChange}/>
        </div>
        <div>
          <label className="Panel-Blog-Yukle-Label" htmlFor="subTitle4">Alt Başlık 4</label>
          <input className='Panel-Blog-Yukle' type="text" id="subTitle4" onChange={handleFormChange}/>

          <label className="Panel-Blog-Yukle-Label" htmlFor="contentSubTitle4">İçerik</label>
          <input className='Panel-Blog-Yukle' type="text" id='contentSubTitle4' onChange={handleFormChange}/>
        </div>

        <button type='submit'>{wait ? "Bekleyiniz..." : "Kaydet"}</button>

      </form>
    </section>
  )
}

export default YeniBlogEkle