import "./WhyUs.css";
function WhyUs() {
  return (
    <>
      <div className="container-fluid main py-4 my-4 ">
        <div className="my-5">
          <h1 className="primary-text text-center">Why Us</h1>
          <p className="subHeading fs-5 text-center">
            We are the team of experienced software engineers on a mission of
            revolutionize businesses with innovative solutions.
          </p>
        </div>
        <div className="container shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="row d-flex flex-row justify-content-center align-items-center my-6 ">
            <div className="col-md-3">
              <h2 className="text-center">15+</h2>
              <p className="text-center">Projects Completed</p>
            </div>
            <div className="col-md-3">
              <h2 className="text-center">12+</h2>
              <p className="text-center"> Happy Clients</p>
            </div>
            <div className="col-md-3">
              <h2 className="text-center">100K+</h2>
              <p className="text-center">Market Community</p>
            </div>
            <div className="col-md-3">
              <h2 className="text-center">4+</h2>
              <p className="text-center">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default WhyUs;
