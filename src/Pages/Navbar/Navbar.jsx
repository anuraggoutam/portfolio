import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { useState } from 'react';
export default function Navbar() {
  const [activeNav, seActive] = useState();
  return (
    <section id="Navbar" className="hidden smx:block">
      <nav
        className="bg-nav max-w-max p-6 z-2 flex left-1/2 
         bottom-8 gap-7 rounded-sml BCD -translate-x-1/2 fixed"
      >
        <a
          href="#"
          onClick={() => seActive('#')}
          className={activeNav === '#' ? 'active' : ''}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => seActive('#about')}
          className={activeNav === '#about' ? 'active' : ''}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#experiance"
          onClick={() => seActive('#experiance')}
          className={activeNav === '#experiance' ? 'active' : ''}
        >
          <BiBook />
        </a>
        <a
          href="#services"
          onClick={() => seActive('#services')}
          className={activeNav === '#services' ? 'active' : ''}
        >
          <RiServiceLine />
        </a>
        <a
          href="#contact"
          onClick={() => seActive('#contact')}
          className={activeNav === '' ? 'active' : ''}
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
    </section>
  );
}
