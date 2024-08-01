import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-black">
          SkillQuest 🧠
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {[
              { path: '/subscription', label: 'PRO', extraClasses: 'border-2 px-2 py-0.5 rounded-md border-coral-500 text-coral-500' },
              { path: '/labs', label: 'labs' },
              { path: '/courses', label: 'courses' },
              { path: '/login', label: 'login', extraClasses: 'bg-coral-500 text-white px-4 py-2 rounded-md' },
            ].map(({ path, label, extraClasses = '' }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`text-black font-bold ${extraClasses}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
