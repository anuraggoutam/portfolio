export default function About() {
  return (
    <>
      <section
        id="about"
        className="about  w-full py-20 px-0   tablet:mb-40 tablet:pt-4  smx:pt-1"
      >
        <div className="main w-11/12 max-w-screen-xl flex smx:flex-col my-12 mx-auto items-center justify-around gap-1 mt-28 tablet:gap-10 relative tablet:top-24 smx:-mt-6 ">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt=""
            className="w-420  rounded-3xl  smx:w-80 smx:h-80 tablet:w-96 tablet:h-96 tablet:mb-6 tablet:mt-1 "
          />
          <div className="about-text w-500 max-w-fit smx:-mt-8">
            <h2 className="text-text text-7xl capitalize mb-5 smx:text-4xl smx:mt-4 smx:ml-4 smx:mb-1 text-bold text-left">
              About <span className="text-blue">Me</span>
            </h2>
            <h3 className="text-blue text-2xl capitalize mb-6 trackin g-wider smx:text-2xl smx:mt-0 smx:ml-4 smx:mb-2 ">
              Graphic Designer!
            </h3>
            <p className="text-text tracking-wide text-base mb-11 smx:ml-5 smx:mb-6  g ">
              I am Front-end web developer. Lorem ipsum, dolor sit amet voluptas
              nisi, maiores voluptatem eveniet Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Doloribus, earum fugit dicta magnam
              laboriosam culpa obcaecati illo ea, accusamus nemo dolores
              reprehenderit! Accusantium ducimus voluptas illo incidunt quis
            </p>
            <a
              className="relative inline-flex items-center justify-center w-36 h-11 bg-blue border-2 smx:ml-5 border-solid border-blue rounded-lg text-xl text-bg font-semibold tracking-wide no-underline z-p overflow-hidden before:absolute before:top-0 before:w-0 before:left-0 before:bg-bg before:h-full before:z-n  hover:text-blue hover:before:w-full smx:w-28 smx:h-10 smx:bottom-3 "
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
