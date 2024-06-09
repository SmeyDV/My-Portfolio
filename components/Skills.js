import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJs, FaGitAlt } from 'react-icons/fa';

export default function Skills() {
  return (
    <div className="container mx-auto py-15">
      <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
          <FaReact className="text-blue-500 text-6xl mb-4" />
          <h3 className="text-2xl font-bold mb-2">React</h3>
          <p className="text-gray-700">Building interactive UIs with React.</p>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
          <FaNodeJs className="text-green-500 text-6xl mb-4" />
          <h3 className="text-2xl font-bold mb-2">Node.js</h3>
          <p className="text-gray-700">Server-side development with Node.js.</p>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
          <FaCss3Alt className="text-blue-500 text-6xl mb-4" />
          <h3 className="text-2xl font-bold mb-2">CSS3</h3>
          <p className="text-gray-700">Styling web applications with CSS3.</p>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
          <FaHtml5 className="text-orange-500 text-6xl mb-4" />
          <h3 className="text-2xl font-bold mb-2">HTML5</h3>
          <p className="text-gray-700">Structuring content with HTML5.</p>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
          <FaJs className="text-yellow-500 text-6xl mb-4" />
          <h3 className="text-2xl font-bold mb-2">JavaScript</h3>
          <p className="text-gray-700">Programming with JavaScript.</p>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
          <FaGitAlt className="text-red-500 text-6xl mb-4" />
          <h3 className="text-2xl font-bold mb-2">Git</h3>
          <p className="text-gray-700">Version control with Git.</p>
        </div>
      
      </div>
    </div>
  );
}
