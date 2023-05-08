import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { AiFillTwitterCircle } from 'react-icons/ai';

export default function Footer() {
  return (
    <>
      <footer className="bg-blue text-bg py-12 px-0 text-sm mt-28 text-center">
        <a href="Lalshay" className="text-4xl font-medium mb-8 inline-block ">
          Lakshay
        </a>
        <ul className="flex flex-wrap justify-center gap-8 mt-0 my-auto mb-12 smx:flex-col smx:gap-5">
          <li>
            <a href="#" className="bright">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="bright">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="bright">
              Experience
            </a>
          </li>
          <li>
            <a href="#services" className="bright">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="bright">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#testimonials" className="bright">
              Testimonilas
            </a>
          </li>
          <li>
            <a href="#contact" className="bright">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex justify-center gap-4 mb-16 smx:mb-10 ">
          <a
            href="https://facebook.com"
            className=" text-white p-3 rounded-xl bg-bg border-2 border-transparent border-solid hover:bg-transparent hover:text-bg hover:border-bg"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            className=" text-white p-3 rounded-xl bg-bg border-2 border-transparent border-solid hover:bg-transparent hover:text-bg hover:border-bg"
          >
            <FiInstagram />
          </a>
          <a
            href="https://twitter.com"
            className=" text-white p-3 rounded-xl bg-bg border-2 border-transparent border-solid hover:bg-transparent hover:text-bg hover:border-bg"
          >
            <AiFillTwitterCircle />
          </a>
        </div>
        <div className="copyright mb-16 text-bg ">
          <small>&copy; Lakshay. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}
