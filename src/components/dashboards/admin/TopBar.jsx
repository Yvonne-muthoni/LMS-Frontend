
const TopBar = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center w-full">
      <h1 className="text-2xl font-bold text-gray-900">Admin's Management Dashboard</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button 
            className="text-gray-600 hover:text-gray-800"
            onClick={handleNotificationClick}
          >
            <FontAwesomeIcon icon={faBell} className="text-2xl" />
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full px-1">
                {notifications.length}
              </span>
            )}
          </button>
          {showNotifications && notifications.length > 0 && (
            <div className="absolute right-0 bg-white border border-gray-300 shadow-lg mt-2 w-48 rounded-lg z-10">
              {notifications.map((notification, index) => (
                <div key={index} className="px-4 py-2 border-b border-gray-200 text-gray-700">
                  {notification}
                </div>
              ))}
            </div>
          )}
        </div>
        <button className="text-gray-600 hover:text-gray-800">
          <FontAwesomeIcon icon={faUser} className="text-2xl" />
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <FontAwesomeIcon icon={faSignOutAlt} className="text-2xl" />
        </button>
      </div>
    </header>
  );
};

export default TopBar;
