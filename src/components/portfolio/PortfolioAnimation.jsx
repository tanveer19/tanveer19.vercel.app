import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { FiGithub, FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";
import { FaGithub } from "react-icons/fa";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const tabList = [
  "All",
  "HTML",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  // "WordPress",
];

const portfolioItems = [
  {
    img: "/img/portfolio/m-portfolio-0.jpg",
    width: 400,
    height: 400,
    title: "Natural Travel",
    subTitle: "Your Travel Provider",
    alterText: "Natural Travel",
    delayAnimation: "200",
    portfolioLink: "https://h01-natural-travel.vercel.app/",
    category: ["HTML"],
  },
  {
    img: "/img/portfolio/m-portfolio-1.jpg",
    width: 400,
    height: 400,
    title: "Karate Camp",
    subTitle: "Learn karate from famous instructors!",
    alterText: "Karate Camp",
    delayAnimation: "",
    portfolioLink: "https://a12-summer-camp-1ce70.web.app/",
    githubClientLink: "https://github.com/tanveer19/A12-karate-camp-client",
    githubServerLink: "https://github.com/tanveer19/A12-karate-camp-server",
    category: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    img: "/img/portfolio/m-portfolio-2.jpg",
    width: 400,
    height: 400,
    title: "Toy Story",
    subTitle: "A toy store for your favorite toys!",
    alterText: "Toy Story",
    delayAnimation: "100",
    portfolioLink: "https://a11-toy.web.app/",
    githubClientLink: "https://github.com/tanveer19/A11-toy-story-client",
    githubServerLink: "https://github.com/tanveer19/A11-toy-story-server",
    category: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    img: "/img/portfolio/m-portfolio-3.jpg",
    width: 400,
    height: 400,
    title: "Cafe Onion",
    subTitle: "Your delicious recipes",
    alterText: "Cafe Onion",
    delayAnimation: "200",
    portfolioLink: "https://a10-chef-recipe-hunter-8182f.web.app/",
    githubClientLink: "https://github.com/tanveer19/A10-cafe-onion-client",
    githubServerLink: "https://github.com/tanveer19/A10-cafe-onion-server",
    category: ["JavaScript", "React", "Node.js"],
  },
  // {
  //   img: "/img/portfolio/pge.jpg",
  //   width: 400,
  //   height: 400,
  //   title: "Pacific Green Energy",
  //   subTitle: "Your Solar Provider",
  //   alterText: "Pacific Green Energy",
  //   delayAnimation: "200",
  //   portfolioLink: "https://pacificgreenenergy.com.au",
  //   category: ["WordPress"],
  // },
  // {
  //   img: "/img/portfolio/kbgau.jpg",
  //   width: 400,
  //   height: 400,
  //   title: "KBG Australia",
  //   subTitle: "Your Provider",
  //   alterText: "KBG Australia",
  //   delayAnimation: "200",
  //   portfolioLink: "https://kbgbd.com.au",
  //   category: ["WordPress"],
  // },
];

const PortfolioTabPanel = ({ items }) => (
  <div className="portfolio-content ">
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {items.map((val, i) => (
        <div
          className="portfolio-box-01"
          key={i}
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay={val.delayAnimation}
        >
          <div className="portfolio-img">
            <div className="portfolio-info">
              <h5>
                <a href={val.portfolioLink} target="_blank" rel="noreferrer">
                  {val.title}
                </a>
              </h5>
              <span>{val.subTitle}</span>
            </div>
            <Item
              original={val.img}
              thumbnail={val.img}
              width={val.width}
              height={val.height}
            >
              {({ ref, open }) => (
                <div className="gallery-link">
                  <img
                    src={val.img}
                    alt={val.alterText}
                    role="button"
                    ref={ref}
                    onClick={open}
                  />
                </div>
              )}
            </Item>
            <div className="portfolio-icons">
              <a
                className="portfolio-icon"
                href={val.portfolioLink}
                target="_blank"
                rel="noreferrer"
              >
                <FiLink />
              </a>
              {val.githubClientLink && (
                <a
                  className="portfolio-icon"
                  href={val.githubClientLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub />
                </a>
              )}
              {val.githubServerLink && (
                <a
                  className="portfolio-icon"
                  href={val.githubServerLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </Masonry>
  </div>
);

const PortfolioAnimation = () => {
  return (
    <div className="portfolio-filter-01">
      <Tabs>
        <TabList className="filter flex justify-center">
          {tabList.map((val, i) => (
            <Tab key={i}>{val}</Tab>
          ))}
        </TabList>
        <Gallery>
          {tabList.map((tab, i) => (
            <TabPanel key={i}>
              <PortfolioTabPanel
                items={portfolioItems.filter(
                  (item) => tab === "All" || item.category.includes(tab)
                )}
              />
            </TabPanel>
          ))}
        </Gallery>
      </Tabs>
    </div>
  );
};

export default PortfolioAnimation;
