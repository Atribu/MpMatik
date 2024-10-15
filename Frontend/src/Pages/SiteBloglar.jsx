import React, { useEffect, useState } from 'react'
import "../Styles/SiteBloglar.scss"
import { Link } from 'react-router-dom'

const SiteBloglar = () => {
    const [blogList, setBlogList] = useState(null);
    const [loading, setLoading] = useState(true);

    const getBlogList = async () => 
    {
        try 
        {
            const blogList = await fetch ("api/blog/liste");
            const data = await blogList.json();
            if(data.succes===false){
                console.log("Gadaşım burada hata var");
                return
            }

            setBlogList(data);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading("");
        }
    }

    useEffect (()=>{
        getBlogList();
    },[])

    console.log(blogList)

  return (
    <section className='SiteBloglar-section'>
    <div className='SiteBloglar-div'>
        <h1 className='SiteBloglar-h1'>Mevlana Petrol</h1>
        <p><strong>Mevlana Petrol</strong>, başarısını müşteri odaklı ve verimliliği merkeze alan bir yönetim anlayışına borçludur. Bu yaklaşım sadece maddi kazançlarla sınırlı kalmayıp, aynı zamanda toplumun genel çıkarlarına odaklanarak yurttaşlık bilinciyle bütünleşmektedir.</p>
        <p><strong>Mevlana Petrol</strong>, etkili ve çözüm odaklı çevre politikaları ile birlikte sosyal projeleri sadece bir zorunluluk olarak değil, aynı zamanda toplumsal bir sorumluluk olarak benimsemektedir. Bu yaklaşım, ülkemizin geleceğine yönelik duyarlı bir tutum oluşturmayı amaçlamakta ve bu duyarlılığı mümkün olan en geniş kitlelere ulaştırmak adına çaba sarf etmektedir.</p>
    </div>
    
    {
        loading ? (
            <p className='SiteBloglar-h1-p'>Yükleniyor...</p>
        ) : (
            blogList && blogList.length > 0 ? (
                <div className='SiteBloglar-grid'>
                    {
                        blogList.map((item, index) => (
                            <Link className='SiteBloglar-Link' to={`/blog/${item.url}`} key={index}>
                                <figure>
                                    <img src={item.image} alt='Image' width="250" height="150" />
                                </figure>
                                <h4 className='SiteBloglar-h4'>{item.title}</h4>
                                <p className='SiteBloglar-h4-p'>{item.subTitle}</p>
                            </Link>
                        ))
                    }
                </div>
            ) : <p>Bloglar Bulunamadı</p>
        )
    }
</section>
  )
}

export default SiteBloglar