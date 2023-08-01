const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Marjan Hasan Moon
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Front End Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Passionate front-end developer proficient in HTML, CSS, JavaScript, and
        ReactJS. Seeking opportunities to create exceptional user experiences
        through innovative web applications while continuously expanding and
        refining my front-end development skills.
      </p>
      <a
        href="/resume.pdf"
        download="resume.pdf"
        className="text-center px-8 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Intro;
