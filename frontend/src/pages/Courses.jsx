import CourseCard from '../components/CourseCard';

const Courses = () => {
  const courses = [
    { name: 'React Development', duration: '3 months', fee: 299 },
    { name: 'Node.js Backend', duration: '4 months', fee: 399 },
    { name: 'Full Stack Development', duration: '6 months', fee: 599 },
    { name: 'Data Science', duration: '8 months', fee: 799 }
  ];

  return (
    <div className="container">
      <h1>Available Courses</h1>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;