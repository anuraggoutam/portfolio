import './Header.css';
import { useState } from 'react';

export default function Header() {
  const [activeNav, seActive] = useState();
  const [color, setClick] = useState();
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setClick(true);
    } else {
      setClick(false);
    }
  };
  window.addEventListener('scroll', changeColor);
  return (
    <>
      <section id="home">
        <header
          className={
            color
              ? 'top-0 left-0 w-full h-20 flex justify-between items-center z-50 py-5 px-8 fixed bg-nav2 tablet:gap-12'
              : 'top-0 left-0 w-full h-20 flex justify-between items-center z-50 py-5 px-8 fixed bg-transparent'
          }
        >
          <a
            href="#"
            className="logo relative text-3xl text-text no-underline font-semibold "
          >
            Lakshay.
          </a>
          <nav className="navbar hidden sm:block">
            <a
              href="#"
              // className="active text-lg text-text no-underline font-medium ml-9 mr-1 "
              className={
                activeNav === '#'
                  ? 'active  text-lg text-text no-underline font-medium ml-9 mr-1'
                  : ' text-lg text-text no-underline font-medium ml-9 mr-1'
              }
              onClick={() => seActive('#')}
            >
              Home
            </a>
            <a
              href="#about"
              // className="active text-lg text-text no-underline font-medium ml-9 mr-1"
              className={
                activeNav === '#about'
                  ? 'active text-lg text-text no-underline font-medium ml-9 mr-1'
                  : ' text-lg text-text no-underline font-medium ml-9 mr-1'
              }
              onClick={() => seActive('#about')}
            >
              About
            </a>
            <a
              href="#services"
              className={
                activeNav === '#services'
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
                activeNav === '#portfolio'
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
                activeNav === '#contact'
                  ? 'active text-lg text-text no-underline font-medium ml-9 mr-1'
                  : 'text-lg text-text no-underline font-medium ml-9 mr-5'
              }
              onClick={() => seActive('#contact')}
            >
              Contact
            </a>
          </nav>
        </header>
        <a
          href="#contact"
          className="absolute -right-9 bottom-66 rotate-90 font-extralight text-sm text-text mr-8 p-5 smx:hidden"
        >
          Scroll Down
        </a>
      </section>
      <section className="home h-screen w-full flex bg-cover bg-center items-center py-0 px-R10 smx:bg-right-bottom ">
        <div className="home-content max-w-text  smx:mt-36">
          <h1
            className="text-6xl font-bold smx:font-medium  smx:text-4xl
          "
          >
            Hi, I'm Lakshay Verma
          </h1>
          <h3 className="text-4xl font-bold  text-blue smx:mr-6 smx:text-2xl">
            Graphic Designer
          </h3>
          <p className="text-xl mt-5 mx-0 mb-10">
            "Unleashing the Power of Creativity"
          </p>
          <div className="btn-box w-btn flex justify-between h-12">
            <a
              href="#"
              className="relative inline-flex items-center justify-center w-36 smx:w-32 h-full bg-blue border-2 border-solid border-blue rounded-lg text-xl text-bg font-semibold tracking-wide no-underline z-p overflow-hidden before:absolute before:top-0 before:w-0 before:left-0 before:bg-bg before:h-full before:z-n  hover:text-blue hover:before:w-full"
            >
              Hire Me
            </a>
            <a
              href=""
              className="relative inline-flex items-center justify-center w-36 smx:w-32 h-full bg-transparent border-2 border-solid border-blue rounded-lg text-xl text-blue font-semibold tracking-wide no-underline z-p overflow-hidden before:w-0  before:absolute before:top-0 before:left-0 before:bg-blue before:h-full before:z-n hover:text-bg hover:before:w-full smx:right-16"
            >
              Let's Talk
            </a>
          </div>
          <div className="home-sci absolute bottom-66 w-44 flex justify-between smx:hidden">
            <a
              href="#"
              className="relative inline-flex justify-center items-center w-10 h-10 bg-transparent border-2 border-solid border-blue rounded-ff text-xl no-underline text-blue z-p overflow-hidden hover:text-bg before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-blue before:z-n hover:before:w-full"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="#"
              className="relative inline-flex justify-center items-center w-10 h-10 bg-transparent border-2 border-solid border-blue rounded-ff text-xl no-underline text-blue z-p overflow-hidden  hover:text-bg
              before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-blue before:z-n hover:before:w-full"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="#"
              className="relative inline-flex justify-center items-center w-10 h-10 bg-transparent border-2 border-solid border-blue rounded-ff text-xl no-underline text-blue z-p overflow-hidden  hover:text-bg
              before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-blue before:z-n hover:before:w-full"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
