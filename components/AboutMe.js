export default function AboutMe() {
  return (
    <div className="container mx-auto py-20 px-4">
      <h2 className="text-5xl font-bold mb-12 text-center text-gray-800">About Me</h2>
      <div className="flex flex-col md:flex-row items-center bg-white shadow-xl rounded-lg p-8 md:p-16">
        <img
          src="/mypf.jpg"
          alt="Profile Picture"
          className="w-64 h-80 mb-6 md:mb-0 shadow-xl border-4 border-gray-200 rounded-lg"
        />
        <div className="text-center md:text-left md:ml-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Rin Reaksmey</h3>
          <p className="text-lg text-gray-700 mb-6">
            Hello! I'm Rin Reaksmey, a passionate web developer with a love for creating dynamic and user-friendly web applications. I specialize in JavaScript, React, and Next.js. I'm constantly learning and exploring new technologies to enhance my skills and deliver high-quality projects.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
