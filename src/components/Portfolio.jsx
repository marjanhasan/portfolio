import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
const Portfolio = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolio.map((project, i) => (
          <PortfolioItem
            key={i}
            imgURL={project.imgURL}
            title={project.title}
            stack={project.stack}
            liveLink={project.liveLink}
            githubClient={project.githubClient}
            githubServer={project.githubServer}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
