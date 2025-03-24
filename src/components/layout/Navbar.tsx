import React from "react";
import { Link } from "react-router-dom";
import { Search, User, Bell, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  isLoggedIn?: boolean;
  username?: string;
  avatarUrl?: string;
}

const Navbar = ({
  isLoggedIn = false,
  username = "User",
  avatarUrl,
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearchFocused, setIsSearchFocused] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full h-20 bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary">TimeSwap</span>
        </Link>

        {/* Search Bar - Hidden on mobile */}
        <div
          className={cn(
            "hidden md:flex items-center relative max-w-md w-full mx-4",
            isSearchFocused ? "ring-2 ring-primary" : "",
          )}
        >
          <input
            type="text"
            placeholder="Buscar habilidades, serviços..."
            className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none"
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
          <Search className="absolute right-3 text-gray-500" size={18} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/browse"
            className="text-gray-700 hover:text-primary font-medium"
          >
            Explorar
          </Link>
          <Link
            to="/how-it-works"
            className="text-gray-700 hover:text-primary font-medium"
          >
            Como Funciona
          </Link>

          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <Link to="/notifications" className="relative">
                <Bell size={20} className="text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </Link>
              <Link to="/profile" className="flex items-center space-x-2">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt={username}
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <User size={16} className="text-gray-500" />
                  </div>
                )}
                <span className="text-gray-700 font-medium">{username}</span>
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Button variant="outline" asChild>
                <Link to="/login">Entrar</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Cadastrar</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full border-t border-gray-200 py-4 px-6 absolute top-20 left-0 shadow-md">
          <div className="flex items-center relative mb-4">
            <input
              type="text"
              placeholder="Buscar habilidades, serviços..."
              className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute right-3 text-gray-500" size={18} />
          </div>

          <div className="flex flex-col space-y-4">
            <Link
              to="/browse"
              className="text-gray-700 hover:text-primary font-medium py-2"
            >
              Explorar
            </Link>
            <Link
              to="/how-it-works"
              className="text-gray-700 hover:text-primary font-medium py-2"
            >
              Como Funciona
            </Link>

            {isLoggedIn ? (
              <>
                <Link
                  to="/notifications"
                  className="flex items-center justify-between text-gray-700 hover:text-primary font-medium py-2"
                >
                  Notificações
                  <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </Link>
                <Link
                  to="/profile"
                  className="text-gray-700 hover:text-primary font-medium py-2"
                >
                  Meu Perfil
                </Link>
                <Link
                  to="/settings"
                  className="text-gray-700 hover:text-primary font-medium py-2"
                >
                  Configurações
                </Link>
                <Button variant="outline" className="w-full mt-2">
                  Sair
                </Button>
              </>
            ) : (
              <div className="flex flex-col space-y-3 pt-2">
                <Button variant="outline" asChild className="w-full">
                  <Link to="/login">Entrar</Link>
                </Button>
                <Button asChild className="w-full">
                  <Link to="/signup">Cadastrar</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
