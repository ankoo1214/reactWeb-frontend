import './ThirdPage.css'
import { Link } from 'react-router-dom';
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
function ThirdPage() {
  return (
    <div className="container-fluid my-5">
      <div className="header d-flex flex-column align-items-center justify-content-center">
        <h1 className="primary-text fw-semibold fs-1">
          Project we have done for Clients
        </h1>
        <p className="text-dark-emphasis fs-5">
          We are ready to to scale up your business with out great work.
        </p>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {projects.map((item, index) => (
          <div
            className="card border border-0 serviceCard m-4 rounded-4 shadow mb-5 mt-4 rounded"
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
      <div className="d-flex justify-content-center align-items-center">
        <Link to ={'/portfolio'}>
          <button className="btn thirdBtn primary-text rounded-5 px-4 py-2 fs-5 fw-medium">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
}
export default ThirdPage;
