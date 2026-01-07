import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="container">
      <div className="success-card">
        <h1>Registration Successful!</h1>
        <p>Thank you for registering. Your application has been submitted successfully.</p>
        <div className="success-buttons">
          <Link to="/" className="btn btn-primary">Go Home</Link>
          <Link to="/courses" className="btn btn-secondary">View Courses</Link>
        </div>
      </div>
    </div>
  );
};

export default Success;