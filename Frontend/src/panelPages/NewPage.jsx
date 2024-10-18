import { useParams } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import "../Styles/NewPage.scss";
import Page404 from "../Pages/Page404";
import { Link } from "react-router-dom";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const NewPage = () => {
  const { url } = useParams();
  const [page, setPage] = useState(null);
  const [error, setError] = useState(false);

  // Embla Carousel Hook
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ]);

  const getHandlePage = async () => {
    try {
      const response = await fetch(`/api/page/${url}`);
      const data = await response.json();
      if (data.success === false) {
        console.log("Burada bir sorun olabilir");
        setError(true);
        return;
      }
      setPage(data);
    } catch (error) {
      console.error("Sayfa alınırken hata oluştu:", error);
      setError(true);
    }
  };

  useEffect(() => {
    getHandlePage();
  }, []);

  if (error) {
    return <Page404 />;
  }

  if (!page) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <main className="page-container">
      {page.components && page.components.length > 0 ? (
        page.components.map((component, index) => (
          <div key={index} className={`component ${component.modulName.toLowerCase()}`}>
            {component.modulName === 'Header' && (
              <header className="header">
                <img src={component.logo} alt="Logo" className="header-logo" />
                <nav className="header-menu">
                  <ul>
                    {component.menuItems && component.menuItems.map((menuItem, i) => (
                      <li key={i}>{menuItem}</li>
                    ))}
                  </ul>
                </nav>
              </header>
            )}

            {component.modulName === 'İçerik' && (
              <section className="content">
                <h2>{component.inputs?.find(input => input.name === 'title')?.value}</h2>
                <p>{component.inputs?.find(input => input.name === 'content')?.value}</p>
                {component.inputs?.find(input => input.name === 'image')?.value && (
                  <img 
                    src={component.inputs.find(input => input.name === 'image').value} 
                    alt="Yüklenen Resim" 
                    className="content-image" 
                  />
                )}
              </section>
            )}

            {component.modulName === "Galeri" && (
              <section className="gallery">
                <h2>Galeri</h2>
                {component.inputs && component.inputs.length > 0 && component.inputs[0].value ? (
                  <div className='carousell-wrapper'>
                    <div className="carousell-container" ref={emblaRef}>
                      <div className="carousell-slides">
                        {component.inputs[0].value.map((imageUrl, i) => (
                          <div className='carousel-slide' key={i}>
                            <img
                              src={imageUrl}
                              alt={`Galeri Resmi ${i + 1}`}
                              className="gallery-image"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <p>Galeri için resim bulunamadı.</p>
                )}
              </section>
            )}
          </div>
        ))
      ) : (
        <p>Sayfa içeriği bulunamadı.</p>
      )}

      <Link to="/page" className="back-link">Buradan Sayfalara Dönebilirsiniz</Link>
    </main>
  );
};

export default NewPage;
