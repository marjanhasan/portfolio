function PortfolioItem({
  title,
  imgURL,
  stack,
  liveLink,
  githubClient,
  githubServer,
}) {
  return (
    <div className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden flex flex-col gap-3">
      <img
        src={imgURL}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-top cursor-pointer"
      />
      <div className="w-full p-4 flex flex-col justify-between h-full">
        <div className="text-lg md:text-xl dark:text-white  font-semibold mb-2">
          {title}
        </div>
        <div className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
          {stack.map((item, i) => (
            <span
              key={i}
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex justify-between text-black text-xs md:text-sm font-semibold mt-3">
          <button className="px-2 py-1 bg-[#FDBA74] rounded-md">
            <a href={githubClient} rel="noopener noreferrer" target="_blank">
              Github Client
            </a>
          </button>
          <button className="px-2 py-1 bg-[#FDBA74] rounded-md">
            <a href={liveLink} rel="noopener noreferrer" target="_blank">
              Live Link
            </a>
          </button>
          <button className="px-2 py-1 bg-[#FDBA74] rounded-md">
            <a href={githubServer} rel="noopener noreferrer" target="_blank">
              Github Server
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
