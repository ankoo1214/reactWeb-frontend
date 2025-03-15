import { useEffect } from 'react';
import './BluePage.css'
import { Link } from 'react-router-dom';
import Aos from 'aos';
function BluePage(){
  useEffect(()=>{
    Aos.init()
  },[])
    return (
      <div className="container" data-aos="fade-up">
        <div className="blueColor rounded-2 row my-4" data-aos="fade-up">
          <div className="col-md-7 gap-5 p-5 ">
            <h1 className="text-white fw-bolder bigText">
              Have an awesome project in mind?
            </h1>
            <p className="text-white fs-5">
              Let's discuss it and make your dream software come true!
            </p>
          </div>
          <div
            className="col-md-5 d-flex justify-content-center align-items-center p-5"
        
          >
            <Link to={"./form"}>
              <button
                type="btn"
                className="btn btn-warning p-3 fw-medium px-4 rounded-5 fs-5 primary-text"
              >
                Let's Discuss
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
}
export default BluePage;