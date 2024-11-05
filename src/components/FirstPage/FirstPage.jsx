import './FirstPage.css'
import { Link } from 'react-router-dom';
function FirstPage(){
 
    return (
      <div className="d-flex flex-wrap my-5">
        <div className=" column1 col-md-6 d-flex flex-column justify-content-between gap-3">
          <div>
            <h2 className="px-5 fw-bolder fs-1 primary-text">
              We specialize in custom Web Devlopment,Mobile App Solutions , and
              Ai Automation.
            </h2>
          </div>
          <div>
            <p className="px-5 primary-text fs-5">
              We provide developers & designers using the latest technologies to
              help you scale up your business.
            </p>
          </div>

          <div className="w-100 px-5">
            <Link to={'/portfolio'}>
              <button type="w-100 btn" class="btn btn1 fs-5 fw-semibold p-3">
                See Our Work
              </button>
            </Link>
          </div>
        </div>
        <div className=" container p-1 column2 container col-12 col-md-6 d-flex justify-content-center align-items-center btn fs-5 fw-semibold px-5">
          <div className=" imgContainer">
            <img src="./images/first.avif" className="img-fluid " alt="" />
          </div>
        </div>
      </div>
    );
}
export default FirstPage;