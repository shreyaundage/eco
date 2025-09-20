import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center pixel-card">
        <h1 className="text-4xl font-pixel mb-2">404</h1>
        <p className="mb-4">Oops! Page not found</p>
        <a href="/" className="pixel-button">Return Home</a>
      </div>
    </div>
  );
};

export default NotFound;
