"use client"

import Link from "next/link";

const Sidebar = ({isOpen ,setIsOpen}) => {
  return (
    <>
    {isOpen && 
      <div className="offcanvas__content">
        <div className="offcanvas__top mb-70 d-flex justify-content-between align-items-center">
          <div className="offcanvas__logo logo">
            <Link href="/">
              <img src="/assets/img/logo/logo.svg" alt="logo" />
            </Link>
          </div>
        </div>

        <div className="tp-main-menu-mobile smooth fix mb-40">
          <nav className="tp-main-menu-content">
            <ul>
              <li>
                <a href="#homeDemos" onClick={ () => setIsOpen(false)}>Demos</a>
              </li>
              <li>
                <a href="#shopDemos" onClick={ () => setIsOpen(false)}>Shop</a>
              </li>
              <li>
                <a href="#shopDemos" onClick={ () => setIsOpen(false)}>Pages</a>
              </li>
              <li>
                <a href="#elements" onClick={ () => setIsOpen(false)}>Elements</a>
              </li>
              <li>
                <a href="#features" onClick={ () => setIsOpen(false)}>Features</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>    
    }
    </>
  );
};

export default Sidebar;
