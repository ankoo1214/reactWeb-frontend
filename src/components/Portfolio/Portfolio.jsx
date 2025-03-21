import { useEffect, useState } from "react";
import "./Portfolio.css";

import BluePage from "../BluePage/BluePage";
import Aos from "aos";
import { useNavigate } from "react-router-dom";

const projects = [
  { name: "Recruiting Apps", image: "images/recruit.png", type: "Mobile Apps" },
  { name: "Stream Plus", image: "images/stream.png", type: "Mobile Apps" },
  {
    name: "Aura",
    image: "images/aura.png",
    type: "Website",
  },
  { name: "Surtido Rico", image: "images/rico.png", type: "Website" },
  { name: "Courses Management", image: "images/course.png", type: "Website" },
];
function Portfolio() {
  const [filter, setFilter] = useState("Mobile Apps");
  const filterProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.type === filter);
  const handleBtn = (newFilter) => {
    setFilter(newFilter);
    Aos.refresh();
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="container" data-aos="fade-up">
      <div
        className="d-flex flex-wrap my-4 justify-content-center"
        data-aos="fade-up"
      >
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1 className="primary-text heading ">Portfolio</h1>
          <p className="subHeading fs-5">
            As a software house that designs and develops website, mobile apps,
            and UI/UX design, we have been trusted by our clients from all
            around the world.
          </p>
        </div>
        <div className="col-md-6 d-flex flex-row justify-content-center align-items-end">
          <img src="images/port.png" className="img-fluid" />
        </div>
      </div>

      <div className="d-flex justify-content-start gap-3 align-items-start">
        <button
          className="btn thirdBtn primary-text rounded-5 px-4 py-2 fs-6 fw-medium"
          onClick={() => handleBtn("Mobile Apps")}
        >
          Mobile
        </button>
        <button
          onClick={() => handleBtn("Website")}
          className="btn thirdBtn primary-text rounded-5 px-4 py-2 fs-6 fw-medium"
        >
          Website
        </button>
        <button
          onClick={() => handleBtn("All")}
          className="btn thirdBtn primary-text rounded-5 px-4 py-2 fs-6 fw-medium"
        >
          UI/UX
        </button>
      </div>
      <div
        className="d-flex flex-wrap justify-content-center align-items-center"
        data-aos="fade-up"
      >
        {filterProjects.map((item, index) => (
          <div
     
            className="card border border-0 portfolio-card m-2 rounded-4 shadow mb-5 mt-5 rounded "
            style={{ width: "22rem" }}
            key={index}
          >
            {item.image && (
              <img
                src={item.image}
                className="card-img-top rounded-top image"
                alt={item.name}
              />
            )}
            <div className="card-body ">
              <h5 className="card-title text-center primary-text fw-medium ">
                {item.name}
              </h5>
              <p className="text-body-tertiary text-center fs-6">{item.type}</p>
            </div>
          </div>
        ))}
      </div>
      <BluePage />
    </div>
  );
}
export default Portfolio;
