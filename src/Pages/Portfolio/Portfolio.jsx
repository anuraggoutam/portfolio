const data = [
  {
    id: 1,
    title: 'papa',
    link: 'hkkjbkjn',
    photo: 'http://',
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
  return (
    <section id="portfolio">
      <h5 className="mb-2 text-center mt-24 text-xl ">My Recent Work</h5>
      <h2 className="mb-16 text-center text-blue text-4xl capitalize  trackin g-wider smx:text-2xl smx:mt-0 smx:ml-4 smx:mb-12 ">
        Portfoilio
      </h2>
      <div className="portfolio_container  flex flex-wrap pl-0 gap-[3%]  justify-center items-center ">
        {data.map(({ id, title, link, photo, para }) => {
          return (
            <div className="relative flex w-96 flex-col rounded-xl bg-bg2 bg-clip-border text-text shadow-md -p-2 mb-10  tablet:ml-12 tablet:w-[60%] ">
              <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 border-2 border-solid border-transparent hover:bg-transparent hover:border-blue">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
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
                  className="bg-blue text-white no-underline border-2 border-solid border-transparent font-bold py-2 px-7 rounded-3xl g hover:bg-transparent hover:border-2 hover:border-solid hover:border-blue hover:cursor-pointer "
                  type="button"
                  data-ripple-light="true"
                >
                  Read More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
