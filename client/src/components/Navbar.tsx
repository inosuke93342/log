import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, User, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState(null); // Stores user credentials
  const [dropdownOpen, setDropdownOpen] = useState(false); // Controls dropdown visibility
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
    if (token) {
      setIsLoggedIn(true);

      // Mock user details (replace with real user fetching logic)
      setUserDetails({ username: 'john_doe', email: 'john@example.com' }); 
    }
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev); // Toggles dropdown
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token
    setIsLoggedIn(false); // Update state
    setUserDetails(null); // Clear user details
    setDropdownOpen(false); // Close dropdown
    navigate('/login'); // Redirect to login page
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-logistics-800">LogiSwift</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-sm font-medium text-gray-700 hover:text-logistics-600 transition-colors"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-sm font-medium text-gray-700 hover:text-logistics-600 transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-gray-700 hover:text-logistics-600 transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-gray-700 hover:text-logistics-600 transition-colors"
          >
            Contact
          </a>

          <div className="relative flex items-center">
            {isLoggedIn ? (
              <>
                <div
                  className="cursor-pointer"
                  onClick={toggleDropdown}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <User className="h-6 w-6 text-gray-700" />
                </div>
                {dropdownOpen && (
                  <div
                    className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md p-4 z-50"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <p className="text-sm text-gray-600">
                      <strong>Username:</strong> {userDetails?.username}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Email:</strong> {userDetails?.email}
                    </p>
                    <Button
                      variant="outline"
                      className="mt-2 w-full text-logistics-600"
                      onClick={handleLogout}
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  className="border-logistics-600 text-logistics-600 hover:bg-logistics-50"
                  asChild
                >
                  <Link to="/login">Login</Link>
                </Button>
                <Button
                  className="bg-logistics-600 hover:bg-logistics-700 text-white"
                  asChild
                >
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
