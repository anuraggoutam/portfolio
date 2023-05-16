export default function About() {
  return (
    <>
      <section
        id="about"
        className="about  w-full py-20 px-0   h-screen tablet:mb-36 tablet:pt-4 "
      >
        <div className="main w-11/12 max-w-screen-xl flex smx:flex-col my-10 mx-auto items-center justify-around gap-4 mt-36 tablet:flex-col">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
            alt=""
            className="w-420 shadow-[20px_39px_78px_15px_#00000024] rounded-xl smx:-mt-10"
          />
          <div className="about-text w-500 max-w-fit">
            <h2 className="text-text text-7xl capitalize mb-5 smx:text-4xl smx:mt-4 smx:ml-4 smx:mb-1 text-bold text-left">
              About <span className="text-blue">Me</span>
            </h2>
            <h3 className="text-blue text-2xl capitalize mb-6 trackin g-wider smx:text-2xl smx:mt-0 smx:ml-4 smx:mb-2 ">
              Graphic Designer!
            </h3>
            <p className="text-text tracking-wide text-base mb-11 smx:ml-5 smx:mb-6  g border-2 border-solid border-transparent hover:bg-transparent hover:border-blue rounded-2xl p-5 ">
              I am Front-end web developer. Lorem ipsum, dolor sit amet voluptas
              nisi, maiores voluptatem eveniet Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Doloribus, earum fugit dicta magnam
              laboriosam culpa obcaecati illo ea, accusamus nemo dolores
              reprehenderit! Accusantium ducimus voluptas illo incidunt quis
            </p>
            <a
              className="relative inline-flex items-center justify-center w-36 h-11 bg-blue border-2 smx:ml-5 border-solid border-blue rounded-lg text-xl text-bg font-semibold tracking-wide no-underline z-p overflow-hidden before:absolute before:top-0 before:w-0 before:left-0 before:bg-bg before:h-full before:z-n  hover:text-blue hover:before:w-full smx:w-28 smx:h-10 smx:bottom-3"
              href="#"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
