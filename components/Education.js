import { FaUniversity, FaLaptopCode } from 'react-icons/fa';

export default function Education() {
  return (
    <div className="container mx-auto py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
      <div className="space-y-10">
        
        <div className="flex items-center bg-white shadow-lg rounded-lg p-6">
          <FaUniversity className="text-blue-500 text-4xl mr-6" />
          <div>
            <h3 className="text-2xl font-bold mb-2">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-700 mb-2">Paragon International University</p>
            <p className="text-gray-700">
              Specialized in software development app and web applications.
            </p>
          </div>
        </div>
        
        <div className="flex items-center bg-white shadow-lg rounded-lg p-6">
          <FaLaptopCode className="text-blue-500 text-4xl mr-6" />
          <div>
            <h3 className="text-2xl font-bold mb-2">Web Development Program</h3>
            <p className="text-gray-700 mb-2">STEP IT ACADEMY CAMBODIA</p>
            <p className="text-gray-700">
              Specialized in web design and development.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
