import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../Styles/BreadCrumbs.scss";

const BreadCrumbs = () => {
  const routeNameMap = {
    "/": "Ana Sayfa",
    "/bp-tasitmatik-nedir": "BP Taşıtmatik Nedir?"
  };

  const location = useLocation();
  const pathname = location.pathname;

  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Ana Sayfa</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const name = routeNameMap[to] || decodeURIComponent(value);

          return isLast ? (
            <li key={to} className="breadcrumb-item active" aria-current="page">
              {name}
            </li>
          ) : (
            <li key={to} className="breadcrumb-item">
              <Link to={to}>{name}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
