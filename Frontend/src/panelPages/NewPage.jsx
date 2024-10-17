import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "../Styles/NewPage.scss";
import Page404 from "../Pages/Page404"
import { Link } from "react-router-dom";

const NewPage = () => {
  const { url } = useParams();
  const [page, setPage] = useState(null);
  const [error, setError] = useState(false);

  const getHandlePage = async () => {
    try {
      const response = await fetch(`/api/page/${url}`);
      const data = await response.json();
      if (data.success==false) {
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
      {page.components.map((component, index) => (
        <div key={index} className={`component ${component.modulName.toLowerCase()}`}>
          {component.modulName === 'Header' && (
            <header className="header">
              <img src={component.logo} alt="Logo" className="header-logo" />
              <nav className="header-menu">
                <ul>
                  {component.menuItems.map((menuItem, i) => (
                    <li key={i}>{menuItem}</li>
                  ))}
                </ul>
              </nav>
            </header>
          )}

          {component.modulName === 'İçerik' && (
            <section className="content">
              <h2>{component.inputs.find(input => input.name === 'title')?.value}</h2>
              <p>{component.inputs.find(input => input.name === 'content')?.value}</p>
            </section>
          )}
        </div>
      ))}

      <Link to="/page" className="back-link">Buradan Sayfalara Dönebilirsiniz</Link>
    </main>
  );
};

export default NewPage;
