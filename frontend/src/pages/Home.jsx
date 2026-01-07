import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <div className="hero">
        <h1>Welcome to Student Registration System</h1>
        <p>Register as a student and explore available courses</p>
        <div className="hero-buttons">
          <Link to="/register" className="btn btn-primary">Register Now</Link>
          <Link to="/courses" className="btn btn-secondary">View Courses</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;