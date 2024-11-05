import './Team.css'
const developers = [
  {
    name: "Alice Johnson",
    role: "Frontend Developer",
    image: "images/man1.jfif",
  },
  { name: "Bob Smith", role: "Backend Developer", image: "images/man2.jpeg" },
  {
    name: "Carol Davis",
    role: "Full Stack Developer",
    image: "images/man3.jpg",
  },
  { name: "Dave Wilson", role: "UI/UX Designer", image: "images/woman1.webp" },
  { name: "Eve Brown", role: "Project Manager", image: "images/woman2.jfif" },
  {
    name: "Alice Johnson",
    role: "Frontend Developer",
    image: "images/man1.jfif",
  },
  { name: "Bob Smith", role: "Backend Developer", image: "images/man2.jpeg" },
  {
    name: "Carol Davis",
    role: "Full Stack Developer",
    image: "images/man3.jpg",
  },
  { name: "Dave Wilson", role: "UI/UX Designer", image: "images/woman1.webp" },
  { name: "Eve Brown", role: "Project Manager", image: "images/woman2.jfif" },
];
function Team() {
  return (
    <div className="container">
      <div className="d-flex flex-wrap my-5 justify-content-center">
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1 className="primary-text heading ">Our Team</h1>
          <p className="subHeading fs-5">
            Our team is full of passionate people and ready to make your dream
            software come.true
          </p>
        </div>
        <div className="col-md-6 d-flex flex-row justify-content-center align-items-end">
          <img src="images/team.webp" className="img-fluid" />
        </div>
      </div>
      <div className="d-flex gap-5 flex-wrap justify-content-center my-5">
        {developers.map((item) => (
          <div
            class="card d-flex justify-content-center align-items-center py-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded-4 serviceCard border border-0"
            style={{ width: "15rem" }}
          >
            <img src={item.image} class="card-img-top teamImage" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-center primary-text">{item.name}</h5>
              <p class="card-text text-center subHeading">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Team;
