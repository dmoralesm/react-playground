import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="Main">
      <div className="Sidebar">
        <ul>
          <li>Opt 1</li>
          <li>Opt 2</li>
          <li>Opt 3</li>
          <li>Opt 4</li>
          <li>Opt 5</li>
        </ul>
      </div>
      <div className="Content">{children}</div>
    </div>
  );
};

export default Layout;
