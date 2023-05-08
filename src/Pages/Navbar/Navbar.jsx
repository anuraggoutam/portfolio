import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { useState } from 'react';
import './navbar.css';
export default function Navbar() {
  const [activeNav, seActive] = useState();
  return (
    <section id="Navbar" className="hidden smx:block ">
      <nav
        className="bg-nav max-w-max p-6 z-2 flex left-1/2 
         bottom-6 gap-4 rounded-sml BCD -translate-x-1/2 fixed Z-n"
      >
        <a
          href="#"
          onClick={() => seActive('#home')}
          className={
            activeNav === '#home'
              ? 'active bg-transparent p-2 rounded-f50 flex text-light text-lg hover:bg-nav'
              : 'bg-transparent p-2 rounded-f50 flex text-light text-lg hover:bg-nav '
          }
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => seActive('#about')}
          className={
            activeNav === '#about'
              ? 'active bg-transparent p-2 rounded-f50 flex text-light text-lg hover:bg-nav'
              : 'bg-transparent p-2 rounded-f50 flex text-light text-lg hover:bg-nav'
          }
        >
          <AiOutlineUser />
        </a>
        <a
          href="#experiance"
          onClick={() => seActive('#experiance')}
          className={
            activeNav === '#experiance'
              ? 'active bg-transparent p-2 rounded-f50 flex text-light text-lg hover:bg-nav'
              : 'bg-transparent p-2 rounded-f50 flex text-light text-lg hover:bg-nav'
          }
        >
          <BiBook />
        </a>
        <a
          href="#services"
          onClick={() => seActive('#services')}
          className={
            activeNav === '#services'
              ? 'active bg-transparent p-2 rounded-f50 flex text-light text-lg hover:bg-nav'
              : 'bg-transparent p-2 rounded-f50 flex text-light text-lg hover:bg-nav'
          }
        >
          <RiServiceLine />
        </a>
        <a
          href="#contact"
          onClick={() => seActive('#contact')}
          className={
            activeNav === ''
              ? 'active bg-transparent p-2 rounded-f50 flex text-light text-lg hover:bg-nav'
              : ' bg-transparent p-2 rounded-f50 flex text-light text-lg hover:bg-nav'
          }
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
    </section>
  );
}
