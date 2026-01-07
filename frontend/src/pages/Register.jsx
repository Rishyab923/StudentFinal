import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  });
  const navigate = useNavigate();

  const courses = ['React Development', 'Node.js Backend', 'Full Stack Development', 'Data Science'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/register', formData);
      navigate('/success');
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div className="container">
      <div className="form-card">
        <h1>Student Registration</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            required
          />
          <select
            value={formData.course}
            onChange={(e) => setFormData({...formData, course: e.target.value})}
            required
          >
            <option value="">Select Course</option>
            {courses.map(course => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;