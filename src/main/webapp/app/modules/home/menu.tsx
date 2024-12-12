import React from 'react';
import { useState } from 'react';
import './menu.scss';

function EntitiesMenu() {
  // adding the states
  const [isActive, setIsActive] = useState(false);
  // add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  // clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          {/* logo */}
          <a href="./menu.tsx" className="log">
            Dev.{' '}
          </a>
          <ul className="navMenu.active">
            <li onClick={removeActive}>
              <a href="./menu.tsx" className="navLink">
                Home
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="./menu.tsx" className="navLink">
                Catalog
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="./menu.tsx" className="navLink">
                All products
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="./menu.tsx" className="navLink">
                Contact
              </a>
            </li>
          </ul>
          <div className={'navLink'} onClick={toggleActiveClass}>
            <span className={'navbar'}></span>
            <span className={'navbar'}></span>
            <span className={'navbar'}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default EntitiesMenu;
