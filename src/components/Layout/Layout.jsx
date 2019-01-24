import React from 'react';
import './Layout.css';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="Main">
      <div className="Sidebar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
          <li>
            <Link to="/page-3">Page 3</Link>
          </li>
          <li>
            <Link to="/page-4">Page 4</Link>
          </li>
          <li>
            <Link to="/page-5">Page 5</Link>
          </li>
        </ul>
      </div>
      <div className="Content">{children}</div>
    </div>
  );
};

export default Layout;
