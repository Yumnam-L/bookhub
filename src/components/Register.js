import { Link } from "react-router-dom";
const Register = ({ setIsAuthenticated }) => {
  const handleSubmit = () => {
    setIsAuthenticated(true);
  };
  return (
    <div className="container mt-5 ">
      <h2 className="ms-5 mt-5 text-center ">Sign up </h2>
      <div className="d-flex justify-content-center">
        <form className="col-4  ms-5 " onSubmit={handleSubmit}>
          <div class="form-group mb-3">
            <label for="username">Username</label>
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Enter username"
              required
            />
          </div>
          <div class="form-group mb-3">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter password"
              required
            />
          </div>
          <div class="form-group mb-3">
            <label for="password"> confirm Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter password"
              required
            />
          </div>
          <Link to="/search">
            <button className="btn btn-outline-navy mb-4"> SIGN UP</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
