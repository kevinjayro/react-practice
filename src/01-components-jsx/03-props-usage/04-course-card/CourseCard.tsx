type CourseCardProps = {
  title: string;
  instructor: string;
  duration: string;
  students: number;
  isOnline: boolean;
};

export default function CourseCard({
  title,
  instructor,
  duration,
  students,
  isOnline,
}: CourseCardProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>Instructor: {instructor}</p>
      <p>Duration: {duration} hours</p>
      <p>Students: {students}</p>
      <p>Mode: {isOnline ? 'Online' : 'On-site'}</p>
    </section>
  );
}
