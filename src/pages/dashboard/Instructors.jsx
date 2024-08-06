import InstructorsList from '../../components/dashboards/instructors/InstructorsList'

const Instructors = () => {
    return (
      <div className="container mx-auto p-4">
        <header className="bg-teal-500 text-white p-4 rounded">
          <h1 className="text-2xl">Instructors</h1>
        </header>
        <section className="mt-4">
          <h2 className="text-xl font-semibold">Meet Our Instructors</h2>
          <p className="mt-2">Learn more about our experienced instructors who will guide you through your web development journey.</p>
          <InstructorsList />
        </section>
      </div>
    );
  };
  
  export default Instructors;