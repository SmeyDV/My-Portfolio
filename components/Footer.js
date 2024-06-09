export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white p-4 mt-4 shadow-lg">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            GitHub
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            Twitter
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Reaksmey Rin. All rights reserved.</p>
      </div>
    </footer>
  );
}
