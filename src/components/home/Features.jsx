import Courses from "./Courses";
import Feature from "./Feature";


const Features = () => {
  return (
    <div className="max-w-6xl mx-auto min-h-screen px-8 py-12 pt-8 space-y-8">
      {/* What makes us different */}
      <div className="pb-16">
        <Feature />
      </div>
      <div>
        <Courses />
      </div>
    </div>
  );
};

export default Features;
