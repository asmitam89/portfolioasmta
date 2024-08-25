import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="container projects " id="projects">
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {project.map((data) => (
            <>
              <div
                key={data.id}
                className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4">
                <div
                  className="card bg-dark text-light"
                  style={{
                    width: "18rem",
                    border: "1px solid white",
                    minHeight: "18rem",
                    boxShadow: "5px 5px 10px 10px rgba(49, 32, 44, 0.5)",
                  }}
                  data-aos="flip-right"
                  data-aos-duration="1000">
                  <div className="img d-flex justify-content-center align-content-center p-3"></div>
                  <div className="card-body text-center">
                    <h5
                      className="card-title "
                      style={{ color: "azure", fontStyle: "italic" }}>
                      {data.title}
                    </h5>
                    <p className="card-text py-2">{data.description}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
