import { FaBriefcase, FaLaptopCode } from 'react-icons/fa';

export default function Experience() {
  return (
    <div className="container mx-auto py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
      <div className="space-y-10">
        
        <div className="flex items-center bg-white shadow-lg rounded-lg p-6">
          <FaBriefcase className="text-blue-500 text-4xl mr-6" />
          <div>
            <h3 className="text-2xl font-bold mb-2">Software Developer</h3>
            <p className="text-gray-700 mb-2">Jan 2020 - Present</p>
            <p className="text-gray-700">
              Developed and maintained web applications using JavaScript, React, and Node.js. Collaborated with cross-functional teams to define, design, and ship new features.
            </p>
          </div>
        </div>
        
        <div className="flex items-center bg-white shadow-lg rounded-lg p-6">
          <FaLaptopCode className="text-blue-500 text-4xl mr-6" />
          <div>
            <h3 className="text-2xl font-bold mb-2">Frontend Developer</h3>
            <p className="text-gray-700 mb-2">Jun 2018 - Dec 2019</p>
            <p className="text-gray-700">
              Implemented responsive UI components and optimized web performance. Worked closely with designers to create a seamless user experience.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
