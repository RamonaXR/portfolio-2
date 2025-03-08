const Header = () => {
  return (
    <header className="border-b border-gray-800">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="text-lg font-bold">MyPortfolio</div>
        <ul className="flex items-center space-x-6">
          <li className="cursor-pointer transition-colors hover:text-gray-400">Projects</li>
          <li className="cursor-pointer transition-colors hover:text-gray-400">About</li>
          <li className="cursor-pointer transition-colors hover:text-gray-400">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
