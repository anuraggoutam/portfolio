import { useState } from 'react';
import './Model.css';
import { ImgComparisonSlider } from '@img-comparison-slider/react';

const data = [
  {
    id: 1,
    title: 'papa',
    link: 'hkkjbkjn',
    photo: 'http://',
    photo1: '',
    para: 'jhvhjbhkbbn',
  },
  {
    id: 2,
    title: 'papa',
    link: 'hkkjbkjn',
    photo: 'http://',
    para: 'jhvhjbhkbbn',
  },
  {
    id: 3,
    title: 'papa',
    link: 'hkkjbkjn',
    photo: 'http://',
    para: 'jhvhjbhkbbn',
  },
  {
    id: 4,
    title: 'papa',
    link: 'hkkjbkjn',
    photo: 'http://',
    para: 'jhvhjbhkbbn',
  },
  {
    id: 5,
    title: 'papa',
    link: 'hkkjbkjn',
    photo: 'http://',
    para: 'jhvhjbhkbbn',
  },
  {
    id: 6,
    title: 'papa',
    link: 'hkkjbkjn',
    photo: 'http://',
    para: 'jhvhjbhkbbn',
  },
  {
    id: 7,
    title: 'papa',
    link: 'hkkjbkjn',
    photo: 'http://',
    para: 'jhvhjbhkbbn',
  },
  {
    id: 8,
    title: 'papa',
    link: 'hkkjbkjn',
    photo: 'http://',
    para: 'jhvhjbhkbbn',
  },
];

export default function Portfolio() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }
  return (
    <section id="portfolio">
      <h5 className="mb-2 text-center mt-24 text-xl ">My Recent Work</h5>
      <h2 className="mb-16 text-center text-blue text-4xl capitalize  trackin g-wider smx:text-2xl smx:mt-0 smx:ml-4 smx:mb-12 ">
        Portfoilio
      </h2>
      <div className="portfolio_container  flex flex-wrap pl-0 gap-[3%]  justify-center items-center ">
        {data.map(({ id, title, link, photo, para }) => {
          return (
            <div className="relative flex w-96 flex-col rounded-xl bg-bg2 bg-clip-border text-text shadow-md -p-2 mb-10  tablet:ml-12   ">
              <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 border-2 border-solid border-transparent hover:bg-transparent hover:border-blue">
                <img
                  src="https://images.unsplash.com/photo-1685988755120-f0da7b70b3c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="img-blur-shadow"
                  layout="fill"
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  UI/UX Review Check
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk and near to "Naviglio" where you can enjoy the
                  main night life in Barcelona.
                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="bg-blue text-white no-underline border-2 border-solid border-transparent font-bold py-2 px-7 rounded-3xl g hover:bg-transparent hover:border-2 hover:border-solid hover:border-blue hover:cursor-pointer btn-model "
                  type="button"
                  data-ripple-light="true"
                  onClick={toggleModal}
                >
                  Live View
                </button>
                {modal && (
                  <div className=" w-screen h-screen top-0 left-0 right-0 bottom-0 fixed ">
                    <div
                      onClick={toggleModal}
                      className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed "
                    ></div>
                    <div className="modal-content absolute top-1/2 left-1/2  rounded-xl border-2  border-f50 bg-bg2 ">
                      <div className="text-center">
                        <h2 className="text-4xl text-blue mt-2 -mb-6 smx:text-2xl">
                          <span className="text-white">Lets</span> Compare
                        </h2>
                        <h5 className="text-xl mt-4 mb-6 smx:text-lg smx:mb-2">
                          US<span className="text-2xl text-blue">!</span>{' '}
                        </h5>
                      </div>

                      <button
                        className="absolute top-3 right-4 cursor-pointer border-2 bg-red-600 text-xl font-bold border-solid rounded-f50 px-2 text-white"
                        onClick={toggleModal}
                      >
                        X
                      </button>
                      <div className="w-full h-full tablet:w-[800px] ">
                        <ImgComparisonSlider className="slider-example-slpit-line mb-10">
                          <img
                            slot="first"
                            src="https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                          />
                          <img
                            slot="second"
                            src="https://img-comparison-slider.sneas.io/demo/images/after.webp"
                          />
                        </ImgComparisonSlider>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
