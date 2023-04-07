import './Header.css';
import { useState } from 'react';
export default function Header() {
  const [activeNav, seActive] = useState();
  return (
    <header>
      <section id="header">
        <div className="top-0 left-0 w-full px-3 py-5 flex justify-between items-center z-50 ">
          <a
            href="#"
            className="logo relative text-2xl text-text no-underline font-semibold ml-3"
          >
            Lakshay.
          </a>
          <nav className="navbar hidden sm:block">
            <a
              href="#"
              // className="active text-lg text-text no-underline font-medium ml-9 mr-1 "
              className={
                activeNav === '#about'
                  ? 'active  text-lg text-text no-underline font-medium ml-9 mr-1'
                  : ' text-lg text-text no-underline font-medium ml-9 mr-1'
              }
              onClick={() => seActive('#')}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => seActive('#about')}
              // className="active text-lg text-text no-underline font-medium ml-9 mr-1"
              className={
                activeNav === '#about '
                  ? 'active text-lg text-text no-underline font-medium ml-9 mr-1'
                  : ' text-lg text-text no-underline font-medium ml-9 mr-1'
              }
            >
              About
            </a>
            <a
              href="#services"
              className={
                activeNav === '#services '
                  ? 'active text-lg text-text no-underline font-medium ml-9 mr-1'
                  : 'text-lg text-text no-underline font-medium ml-9 mr-1'
              }
              onClick={() => seActive('#services')}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className={
                activeNav === '#portfolio '
                  ? 'active text-lg text-text no-underline font-medium ml-9 mr-1'
                  : ' text-lg text-text no-underline font-medium ml-9 mr-1'
              }
              onClick={() => seActive('#portfolio')}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className={
                activeNav === '#contact '
                  ? 'active text-lg text-text no-underline font-medium ml-9 mr-1'
                  : 'text-lg text-text no-underline font-medium ml-9 mr-5'
              }
              onClick={() => seActive('#contact')}
            >
              Contact
            </a>
          </nav>
        </div>
      </section>
    </header>
  );
}
