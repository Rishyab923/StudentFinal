import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-brand">Student Portal</div>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
        <Link to="/register" className={location.pathname === '/register' ? 'nav-link active' : 'nav-link'}>Register</Link>
        <Link to="/courses" className={location.pathname === '/courses' ? 'nav-link active' : 'nav-link'}>Courses</Link>
      </div>
    </nav>
  );
};

export default Navbar;