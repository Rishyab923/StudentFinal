const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <h3>{course.name}</h3>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Fee:</strong> ${course.fee}</p>
    </div>
  );
};

export default CourseCard;