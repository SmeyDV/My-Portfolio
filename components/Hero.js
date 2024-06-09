export default function Hero() {
  return (
    <div className="bg-gray-700 text-white py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-8">Showcase of my work and projects.</p>
        <a href="#projects" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Projects
        </a>
      </div>
    </div>
  );
}
