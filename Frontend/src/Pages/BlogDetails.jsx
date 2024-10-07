import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "../Styles/BlogDetails.scss";
import Page404 from './Page404';
import logo from "../../public/Logo/mp-matik-favicon.png"
import MainBackground from '../Components/subPageComponents/MainBackground';
import BreadCrumbs from '../Components/BreadCrumbs';

const BlogDetails = () => {
 const {url} =useParams();
 const [blog,getBlog]=useState(false);
 const [error, setError] =useState(false);

 const getHandlePage=async()=>{
    try{
        const response = await fetch(`/api/blog/${url}`);
        const data = await response.json();
        if (data.success==false) {
            console.log("Burada bir sorun olabilir")
            return;
          }

          getBlog(data);
    } catch(error){
        setError(error);
    }
 }

 useEffect(()=>{
    getHandlePage();
 },[]);

 console.log(blog);
 const blogArray = Array.isArray(blog) ? blog : [blog];
    
     return(
       <main>
        {error && <Page404/>}

        {
 blog && Array.isArray(blogArray) && blogArray.length > 0 ?(
    <div className='blog-div'>
      {blogArray.map((item, index) => (
        <div className='div-ic'
        key={index}>
            <span className='greenText'>MEVLANA PETROL</span>
          <h1>{item.title}</h1>

          <div className='logo-div'>
            <img src={logo} alt="logo" className='img-logo'/>
            <span>MP Taşıtmatik</span>
          </div>
          <BreadCrumbs/>

          <p>{item.contentTitle}</p>
          <MainBackground header="" img={item.image}/>
          <h2>{item.subTitle}</h2>
          <p>{item.contentSubTitle}</p>

          <h2>{item.subTitle1}</h2>
          <p>{item.contentSubTitle1}</p>

          <h3>{item.subTitle2}</h3>
          <p>{item.contentSubTitle2}</p>

          <h3>{item.subTitle4}</h3>
          <p>{item.contentSubTitle3}</p>

          <h4>{item.subTitle3}</h4>
          <p>{item.contentSubTitle4}</p>
          
        </div>
      ))}
    </div>
  ) : (
    <p>No blog data available</p>
  )
}
       </main>
     )
};

export default BlogDetails;
