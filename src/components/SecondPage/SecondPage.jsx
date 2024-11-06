import { useEffect } from "react";
import "./SecondPage.css";
import Aos from "aos";
const services = [
  {
    name: "Web Devlopment",
    image: "images/web.png",
  },
  {
    name: "Mobile Devlopment",
    image:'images/mobile.png'
  },
  {
    name: "Backend Development",
    image:'images/backend.png'

  },
  {
    name: "AI Automations",
    image:'images/ai.png'
  },
  { name: "Q/A Testing" ,
    image:'images/qa.png'
  },
  {
    name: "Marketing",
    image:'images/marketing.png'
  },
  { name: "SEO",
    image:'images/seo.png'
   },
  { name: "UI/UX Design" ,
    image:'images/uiux.png'
  },
];
function SecondPage() {
  useEffect(()=>{
    Aos.init(5000)
  },[])
  return (
    <>
      <div className="main my-5 py-5 " data-aos="fade-up">
        <div
          className="header d-flex flex-column align-items-center justify-content-center"
          data-aos="fade-up"
        >
          <h2 className="primary-text fw-semibold fs-1">Services we Provide</h2>
          <p className="text-dark-emphasis fs-5">
            We are ready to scale up your busines with our great service.
          </p>
        </div>
        <div
          className="d-flex flex-wrap justify-content-center"
          data-aos="fade-up"
        >
          {services.map((item, index) => (
            <div
              data-aos="fade-up"
              className="card serviceCard m-4 rounded-4 shadow p-3 mb-5 rounded"
              style={{ width: "22rem" }}
              key={index}
            >
              {item.image && (
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                />
              )}
              <div className="card-body ">
                <h4 className="card-title text-center primary-text fw-medium ">
                  {item.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default SecondPage;
