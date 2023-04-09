import './Header.css';
import { useState } from 'react';
import { CiFacebook } from 'react-icons/ci';
import { IoLogoInstagram } from 'react-icons/io';
import { AiOutlineLinkedin } from 'react-icons/ai';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Header() {
  const [activeNav, seActive] = useState();
  return (
    <header>
      <section
        id="header"
        className="h-screen bg-cover bg-no-repeat bg-center smx:bg-right-bottom relative py-5 px-8"
      >
        <div className="top-0 left-0 w-full  flex justify-between items-center z-50 ">
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
        <div className="text-box pl-3 p  text-text absolute bottom-bottom">
          <p className="text-5xl font-semibold">I'M</p>
          <h1 className="text-h1 -ml-3 text-transparent h1s ">LAKSHAY</h1>
          <h3 className="text-4xl font-medium">
            I HELP COMPANIES MAKE A BEUTIFUL ADVERTISE
          </h3>
          <div className="row flex items-center flex-wrap mt-8 py-5">
            <a
              href=""
              className="text-text no-underline px-5 py-3 mr-5 border-solid border-white border-2"
            >
              Explore My Portfolio
            </a>
            <a
              href=""
              className="text-text no-underline px-5 py-3 mr-5 border-solid border-white border-2 flex items-center mb-3 "
            >
              Connect With Me
              <ArrowForwardIcon />
            </a>
            <span className="text-2xl ml-1 ">
              You Can Explore More About My Portfoilo And<br></br>Personal Life
              Experiences Here.
            </span>
          </div>
        </div>
        <div className="social-icons absolute right-11 bottom-6">
          <a
            href=""
            className="w-6 block my-6 mx-2 text-4xl hover:bg-transparent hover:text-blue hover:opacity-15"
          >
            <CiFacebook />
          </a>
          <a
            href=""
            className="w-6 block my-6 mx-2 text-4xl hover:bg-transparent hover:text-blue hover:opacity-15"
          >
            <IoLogoInstagram />
          </a>
          <a
            href=""
            className="w-6 block my-6 mx-2 text-4xl hover:bg-transparent hover:text-blue hover:opacity-15"
          >
            <AiOutlineLinkedin />
          </a>
        </div>
      </section>
    </header>
  );
}
