const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Marjan Hasan Moon
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Softwar Engineer & Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Passionate Full-Stack Developer proficient in JavaScript, ReactJS, and
        REST API, with expertise in HTML5, CSS3, and responsive design. Seeking
        challenging opportunities to utilize NodeJs, ExpressJs, and MongoDB
        skills to develop scalable web applications that deliver exceptional
        user experiences.
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
