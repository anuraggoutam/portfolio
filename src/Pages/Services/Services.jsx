import { CgWebsite } from 'react-icons/cg';
import { SiAdobephotoshop } from 'react-icons/si';
import { MdPhotoCamera } from 'react-icons/md';

export default function Services() {
  return (
    <section id="services" className="services section w-full  py-24 px-0 ">
      <div className="title">
        <h2 className="text-white text-7xl w-[70.625rem] my-8 mx-auto text-center mb-16  tablet:w-auto tablet:text-4xl tablet:mb-6 tablet:mx-4">
          Our Services!
        </h2>
      </div>
      <div className="box flex justify-center items-center min-h-[25rem] smx:flex-col ">
        <div className="card flex flex-col h-[22.8125rem] w-[20.9375rem] bg-bg2 rounded-2xl m-4 relative overflow-hidden text-center items-center border-2 border-solid border-transparent hover:bg-transparent hover:border-blue ">
          <SiAdobephotoshop className="text-5xl block text-center my-6 mx-0 text-blue tablet:text-4xl" />

          <h5 className="text-white text-2xl mb-4">Graphic Designing</h5>
          <div className="pra">
            <p className="text-blue2 text-lg mb-6  mx-2 tablet:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              maxime necessitatibus neque!
            </p>
            <p className="text-center">
              <a
                className="bg-blue text-white no-underline border-2 border-solid border-transparent font-bold py-2 px-7 rounded-3xl g hover:bg-transparent hover:border-2 hover:border-solid hover:border-blue hover:cursor-pointer "
                href="#"
              >
                Read More
              </a>
            </p>
          </div>
        </div>
        <div className="card flex flex-col items-center h-[22.8125rem] w-[20.9375rem] bg-bg2 rounded-2xl m-4 relative overflow-hidden text-center border-2 border-solid border-transparent hover:bg-transparent hover:border-blue">
          <CgWebsite className="text-5xl block text-center my-6 mx-0 text-blue tablet:text-4xl" />
          <h5 className="text-white text-2xl mb-4">Web Development</h5>
          <div className="pra">
            <p className="text-blue2 text-lg mb-6  mx-2 tablet:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              maxime necessitatibus neque!
            </p>
            <p className="text-center">
              <a
                className="bg-blue text-white no-underline border-2 border-solid border-transparent font-bold py-2 px-7 rounded-3xl g hover:bg-transparent hover:border-2 hover:border-solid hover:border-blue hover:cursor-pointer"
                href="#"
              >
                Read More
              </a>
            </p>
          </div>
        </div>
        <div className="card flex flex-col items-center h-[22.8125rem] w-[20.9375rem] bg-bg2 rounded-2xl m-4 relative overflow-hidden text-center border-2 border-solid border-transparent hover:bg-transparent hover:border-blue">
          <MdPhotoCamera className="text-5xl block text-center my-6 mx-0 text-blue tablet:text-4xl" />
          <h5 className="text-white text-2xl mb-4">PhotoShoot Services</h5>
          <div className="pra">
            <p className="text-blue2 text-lg mb-6  mx-2 tablet:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              maxime necessitatibus neque!
            </p>
            <p className="text-center">
              <a
                className="bg-blue text-white no-underline border-2 border-solid border-transparent font-bold py-2 px-7 rounded-3xl g hover:bg-transparent hover:border-2 hover:border-solid hover:border-blue hover:cursor-pointer"
                href="#"
              >
                Read More
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
